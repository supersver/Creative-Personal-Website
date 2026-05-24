"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MagneticLink } from "../ui/MagneticLink";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f4ea] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <motion.div
        className="contact-marquee"
        aria-hidden="true"
        animate={reduceMotion ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        Manish / Creative Developer / Manish / Creative Developer /
      </motion.div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <p className="section-kicker">Contact</p>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <Reveal delay={0.08}>
            <h2 className="section-title max-w-4xl">Let's build something that people remember.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-lg font-semibold leading-relaxed">
              Tell me what you are making, what needs to feel different, and
              where the deadline lives. I will bring structure, motion, and the
              code to ship it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <MagneticLink
                href="mailto:hello@manish.dev"
                icon={Mail}
                className="text-[#f7f4ea]"
              >
                email Manish
              </MagneticLink>
              <MagneticLink
                href="https://github.com/supersver"
                icon={Github}
                className="bg-[#d7ff44] text-[#111111]"
              >
                github
              </MagneticLink>
              <MagneticLink
                href="https://www.linkedin.com/in/manish-jangir-730385219"
                icon={Linkedin}
                className="bg-[#7ae7ff] text-[#111111]"
              >
                linkedin
              </MagneticLink>
            </div>
          </Reveal>
        </div>
        <footer className="mt-16 flex flex-col gap-3 border-t border-[#111111] pt-6 text-sm font-black uppercase sm:flex-row sm:items-center sm:justify-between">
          <span>Manish</span>
          <span>Next.js + Tailwind</span>
        </footer>
      </div>
    </section>
  );
}
