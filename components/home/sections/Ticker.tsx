"use client";

import { Braces } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const stack = ["Next.js", "Tailwind", "React", "Motion", "TypeScript", "UX systems"];

export function Ticker() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-b border-[#111111] bg-[#111111] py-3 text-[#f7f4ea]" aria-label="Current stack">
      <motion.div
        className="ticker-track"
        animate={reduceMotion ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {[...stack, ...stack, ...stack].map((item, index) => (
          <span key={`${item}-${index}`} className="mx-5 inline-flex items-center gap-3 text-lg font-black uppercase">
            <Braces className="h-5 w-5 text-[#d7ff44]" />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
