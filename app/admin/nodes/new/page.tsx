import NodeForm from "@/components/admin/NodeForm";

export default function NewNodePage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-4 text-xl font-semibold text-zinc-50">Add node</h1>
      <NodeForm />
    </div>
  );
}
