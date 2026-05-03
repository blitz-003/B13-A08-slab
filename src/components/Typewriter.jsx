"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 40, onComplete }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
        onComplete && onComplete(); // 🔥 notify parent
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <>
      {displayed}
      <span className="animate-pulse">|</span>
    </>
  );
}
