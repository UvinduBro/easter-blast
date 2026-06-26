import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.5-4.6-9.7-9.4C1 7.4 2.6 4 6 4c2.1 0 3.6 1.3 4.5 2.6C11.4 5.3 12.9 4 15 4c3.4 0 5 3.4 3.7 6.6C16.5 15.4 12 20 12 20Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="3" />
      <circle cx="16.2" cy="9" r="2.4" />
      <path d="M2.8 19c.6-3.2 2.9-5 5.7-5s5.1 1.8 5.7 5" />
      <path d="M14.8 14.3c2.3.2 4.1 1.8 4.6 4.7" />
    </svg>
  );
}

export function ScalesIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v17" />
      <path d="M5 21h14" />
      <path d="M3.5 8h6.2" />
      <path d="M14.3 8h6.2" />
      <path d="M3.5 8 1.8 12.6a2.7 2.7 0 0 0 5.2 0Z" />
      <path d="M20.5 8 18.8 12.6a2.7 2.7 0 0 0 5.2 0Z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M19.8 19.8l-4.3-4.3" />
    </svg>
  );
}

export function GavelIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9.4 4.4 14 9" />
      <path d="M5.8 8 8 5.8a1 1 0 0 1 1.4 0l4.8 4.8a1 1 0 0 1 0 1.4L12 14.2a1 1 0 0 1-1.4 0L5.8 9.4a1 1 0 0 1 0-1.4Z" />
      <path d="M3 21l5.5-5.5" />
      <path d="M13.5 11.5 21 19" />
      <path d="M19.5 17.2 17.2 19.5" />
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M8.5 12.5h7" />
      <path d="M8.5 16h7" />
    </svg>
  );
}

export function BookOpenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5c-1.4-1.3-3.6-2-6.5-2-.6 0-1 .4-1 1v12c0 .6.4 1 1 1 2.9 0 5.1.7 6.5 2 1.4-1.3 3.6-2 6.5-2 .6 0 1-.4 1-1v-12c0-.6-.4-1-1-1-2.9 0-5.1.7-6.5 2Z" />
      <path d="M12 6.5v13" />
    </svg>
  );
}

export function CandleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1 1.4 1.6 2.4 1.6 3.3a1.6 1.6 0 0 1-3.2 0c0-.9.6-1.9 1.6-3.3Z" />
      <rect x="9" y="9" width="6" height="11" rx="1" />
      <path d="M9 13h6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-2.5Z" />
      <path d="M9 12l2.2 2.2L15.5 9.7" />
    </svg>
  );
}

export function NewsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="14" height="15" rx="1" />
      <path d="M17 9h3a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H7" />
      <path d="M6.5 8.7h7" />
      <path d="M6.5 12h7" />
      <path d="M6.5 15.3h4.5" />
    </svg>
  );
}

export function HelpCircleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.4 9.5a2.6 2.6 0 1 1 4.3 2c-.7.6-1.7 1.1-1.7 2.3" />
      <circle cx="12" cy="17" r="0.18" fill="currentColor" stroke="none" />
    </svg>
  );
}
