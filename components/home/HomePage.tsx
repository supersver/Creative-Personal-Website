"use client";

import { motion, MotionConfig, useMotionValue, useScroll, useSpring } from "motion/react";
import type { PointerEvent } from "react";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Ticker } from "./sections/Ticker";
import { Workflow } from "./sections/Workflow";

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 32,
    mass: 0.35,
  });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSpringX = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const cursorSpringY = useSpring(cursorY, { stiffness: 420, damping: 34 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    cursorX.set(event.clientX - 14);
    cursorY.set(event.clientY - 14);
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative isolate overflow-hidden bg-[#f7f4ea] text-[#111111]" onPointerMove={handlePointerMove}>
        <motion.div
          aria-hidden="true"
          className="fixed left-0 top-0 z-50 h-[5px] w-full origin-left bg-[#111111]"
          style={{ scaleX: progressScale }}
        />
        <motion.div aria-hidden="true" className="cursor-box" style={{ x: cursorSpringX, y: cursorSpringY }} />

        <Hero />
        <Ticker />
        <Projects />
        <Experience />
        <Workflow />
        <Contact />
      </main>
    </MotionConfig>
  );
}
