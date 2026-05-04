"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function ToastHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("logout") === "true") {
      toast.success("Successfully logged out");
    }
  }, [searchParams]);

  return null;
}
