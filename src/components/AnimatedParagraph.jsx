"use client";

import { motion } from "framer-motion";

export default function AnimatedParagraph({ children, delay = 0 }) {
  return (
    <motion.p
      className="text-lg md:text-xl mb-6 max-w-xl text-gray-200"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.p>
  );
}
