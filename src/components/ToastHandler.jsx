"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ToastHandler() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("logout") === "true") {
      toast.success("Successfully logged out");

      // clean URL so it doesn't repeat
      window.history.replaceState({}, "", "/");
    }
  }, []);

  return null;
}
