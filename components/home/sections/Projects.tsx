"use client";

import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ComponentType, CSSProperties, PointerEvent } from "react";
import { useState } from "react";
import { Reveal } from "../ui/Reveal";

type CSSVars = CSSProperties & Record<string, string | number>;
type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  icon: IconComponent;
};

const projects: Project[] = [
  {
    eyebrow: "01 / Launch",
    title: "Signal Studio",
    description:
      "A sharp product story with editorial sections, scroll-led reveals, and a conversion path that still feels human.",
    accent: "bg-[#d7ff44]",
    icon: Layers3,
  },
  {
    eyebrow: "02 / Interface",
    title: "Orbit Desk",
    description:
      "A dense dashboard concept with calm hierarchy, fast scanning, and motion that helps the eye move.",
    accent: "bg-[#7ae7ff]",
    icon: Code2,
  },
  {
    eyebrow: "03 / Identity",
    title: "Manish Lab",
    description:
      "A personal brand system built from bold type, tactile color blocks, and tiny interactive surprises.",
    accent: "bg-[#ff6b4a]",
    icon: Sparkles,
  },
];

export function Projects() {
  return (
    <section
      id="work"
      className="relative border-b border-[#111111] bg-[#f7f4ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <Reveal>
            <p className="section-kicker">Selected work</p>
            <h2 className="section-title">
              Websites with a pulse, not just pages.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-base font-semibold leading-relaxed sm:text-lg">
              These are sample directions for your portfolio content: launch
              pages, product interfaces, and personal brand systems. Swap the copy
              with your real work when you are ready.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 260, damping: 24 });
  const springRotateY = useSpring(rotateY, { stiffness: 260, damping: 24 });
  const [vars, setVars] = useState<CSSVars>({
    "--mx": "50%",
    "--my": "50%",
  });
  const Icon = project.icon;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    if (!reduceMotion) {
      rotateX.set((0.5 - y) * 10);
      rotateY.set((x - 0.5) * 12);
    }

    setVars({
      "--mx": `${x * 100}%`,
      "--my": `${y * 100}%`,
    });
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    setVars({
      "--mx": "50%",
      "--my": "50%",
    });
  };

  return (
    <motion.article
      className="tilt-card group min-h-[420px] border-2 border-[#111111] bg-[#f7f4ea] p-4 shadow-[8px_8px_0_#111111]"
      style={{
        ...vars,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 900,
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 110, damping: 20, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -8, boxShadow: "12px 12px 0 #111111" }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <motion.div
        className={`h-36 border-2 border-[#111111] ${project.accent} p-4 transition-transform duration-300 group-hover:-translate-y-1`}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
      >
        <Icon className="h-10 w-10" strokeWidth={2.4} />
        <div className="mt-8 h-3 w-3/4 bg-[#111111]" />
        <div className="mt-3 h-3 w-1/2 bg-[#111111]" />
      </motion.div>
      <p className="mt-5 text-xs font-black uppercase">{project.eyebrow}</p>
      <h3 className="mt-3 text-4xl font-black uppercase leading-none">
        {project.title}
      </h3>
      <p className="mt-5 text-base font-semibold leading-relaxed">
        {project.description}
      </p>
      <a
        href="#contact"
        className="mt-8 inline-flex items-center gap-2 border border-[#111111] bg-[#111111] px-4 py-3 text-sm font-black uppercase text-[#f7f4ea]"
      >
        discuss this <ArrowUpRight className="h-4 w-4" />
      </a>
    </motion.article>
  );
}
