import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-[60vh]">
      <Spinner size="xl" />
      <span className="text-2xl text-muted">Loading</span>
    </div>
  );
}
