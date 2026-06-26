"use client";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

const STATUS_OPTIONS = ["fact", "allegation", "developing", "disputed"] as const;

const LONG_FIELD_KEYS = new Set([
  "body",
  "intro",
  "summary",
  "context",
  "closing",
  "description",
  "note",
  "whyExists",
  "reliabilityNote",
]);

const INPUT_CLASS =
  "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-zinc-500";

function isPlainObject(value: JsonValue): value is { [key: string]: JsonValue } {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isLocalizedText(value: JsonValue): value is { si: string; en: string } {
  if (!isPlainObject(value)) return false;
  const keys = Object.keys(value);
  return (
    keys.length === 2 &&
    typeof value.si === "string" &&
    typeof value.en === "string"
  );
}

function humanize(key: string): string {
  const spaced = key.replace(/([A-Z])/g, " $1").replace(/[-_]/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function isLongField(key: string, value: string): boolean {
  return LONG_FIELD_KEYS.has(key) || value.length > 80;
}

function blankLike(sample: JsonValue): JsonValue {
  if (typeof sample === "string") return "";
  if (typeof sample === "boolean") return false;
  if (typeof sample === "number") return 0;
  if (Array.isArray(sample)) return [];
  if (isPlainObject(sample)) {
    const out: Record<string, JsonValue> = {};
    for (const k of Object.keys(sample)) out[k] = blankLike(sample[k]);
    return out;
  }
  return sample;
}

function JsonField({
  fieldKey,
  value,
  onChange,
}: {
  fieldKey: string;
  value: JsonValue;
  onChange: (next: JsonValue) => void;
}) {
  if (
    fieldKey === "status" &&
    typeof value === "string" &&
    (STATUS_OPTIONS as readonly string[]).includes(value)
  ) {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={INPUT_CLASS}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    );
  }

  if (isLocalizedText(value)) {
    const long = isLongField(fieldKey, value.en) || isLongField(fieldKey, value.si);
    return (
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-wide text-zinc-500">
            English
          </span>
          {long ? (
            <textarea
              value={value.en}
              rows={3}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={INPUT_CLASS}
            />
          ) : (
            <input
              value={value.en}
              onChange={(e) => onChange({ ...value, en: e.target.value })}
              className={INPUT_CLASS}
            />
          )}
        </div>
        <div>
          <span className="mb-1 block text-[10px] font-medium uppercase tracking-wide text-zinc-500">
            Sinhala
          </span>
          {long ? (
            <textarea
              value={value.si}
              rows={3}
              onChange={(e) => onChange({ ...value, si: e.target.value })}
              className={INPUT_CLASS}
            />
          ) : (
            <input
              value={value.si}
              onChange={(e) => onChange({ ...value, si: e.target.value })}
              className={INPUT_CLASS}
            />
          )}
        </div>
      </div>
    );
  }

  if (typeof value === "boolean") {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-zinc-700 bg-zinc-900"
      />
    );
  }

  if (Array.isArray(value)) {
    return (
      <div className="space-y-3">
        {value.map((item, i) => (
          <div key={i} className="relative rounded-lg border border-zinc-800 bg-zinc-950/40 p-3 pt-6">
            <span className="absolute left-3 top-2 text-[10px] font-medium uppercase tracking-wide text-zinc-600">
              #{i + 1}
            </span>
            <button
              type="button"
              onClick={() => onChange(value.filter((_, idx) => idx !== i))}
              aria-label="Remove item"
              className="absolute right-2 top-1.5 rounded px-1.5 text-xs text-zinc-500 hover:text-red-400"
            >
              ✕
            </button>
            <JsonField
              fieldKey={fieldKey}
              value={item}
              onChange={(next) => onChange(value.map((v, idx) => (idx === i ? next : v)))}
            />
          </div>
        ))}
        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange([...value, blankLike(value[value.length - 1])])}
            className="text-xs font-medium text-sky-400 hover:underline"
          >
            + Add item
          </button>
        )}
      </div>
    );
  }

  if (isPlainObject(value)) {
    return (
      <div className="space-y-3">
        {Object.entries(value).map(([k, v]) => (
          <div key={k}>
            <label className="mb-1 block text-xs font-medium text-zinc-400">{humanize(k)}</label>
            <JsonField fieldKey={k} value={v} onChange={(next) => onChange({ ...value, [k]: next })} />
          </div>
        ))}
      </div>
    );
  }

  const str = typeof value === "string" ? value : String(value ?? "");
  return isLongField(fieldKey, str) ? (
    <textarea
      value={str}
      rows={3}
      onChange={(e) => onChange(e.target.value)}
      className={INPUT_CLASS}
    />
  ) : (
    <input value={str} onChange={(e) => onChange(e.target.value)} className={INPUT_CLASS} />
  );
}

export default function ContentEditor({
  value,
  onChange,
}: {
  value: Record<string, JsonValue>;
  onChange: (next: Record<string, JsonValue>) => void;
}) {
  return (
    <div className="space-y-6">
      {Object.entries(value).map(([k, v]) => (
        <section key={k} className="border-b border-zinc-900 pb-6 last:border-0">
          <h3 className="mb-2 text-sm font-semibold text-zinc-200">{humanize(k)}</h3>
          <JsonField fieldKey={k} value={v} onChange={(next) => onChange({ ...value, [k]: next })} />
        </section>
      ))}
    </div>
  );
}
