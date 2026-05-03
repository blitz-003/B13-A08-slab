import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 min-h-[60vh]">
      <h1 className="text-6xl">This page does not exist</h1>
      <Link href="/" className="text-blue-500 underline">
        <Button className={"text-2xl p-6"}> Go back Home</Button>
      </Link>
    </div>
  );
}
