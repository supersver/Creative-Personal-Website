"use client";

import { Code2, Layers3, Sparkles } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { TiltCard } from "../ui/TiltCard";
import { Project } from "../types";

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
              pages, product interfaces, and personal brand systems. Swap the
              copy with your real work when you are ready.
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
