"use client";

import { ArrowUpRight, Mail, Radio, Zap } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { MagneticLink } from "../ui/MagneticLink";

const heroGroup: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 34, rotate: -1 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const posterY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 86]), {
    stiffness: 110,
    damping: 28,
  });
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -52]), {
    stiffness: 110,
    damping: 28,
  });

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[92svh] overflow-hidden border-b border-[#111111] px-4 pb-6 pt-3 sm:px-6 lg:px-8"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <SignalCanvas />
      <motion.header
        className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-3"
        initial={reduceMotion ? false : { opacity: 0, y: -18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 22, delay: 0.08 }}
      >
        <motion.a href="#top" className="brand-stamp" aria-label="Manish home" whileHover={{ rotate: -4, y: -2 }} whileTap={{ scale: 0.94 }}>
          M
        </motion.a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 md:flex"
        >
          {["work", "story", "process", "contact"].map((item) => (
            <motion.a key={item} href={`#${item}`} className="nav-link" whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              {item}
            </motion.a>
          ))}
        </nav>
        <MagneticLink
          href="mailto:hello@manishjangir.online"
          icon={Mail}
          className="text-[#f7f4ea]"
        >
          hello
        </MagneticLink>
      </motion.header>

      <div
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-8 pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.7fr)] md:items-end md:pt-16 lg:pt-20"
      >
        <motion.div
          variants={heroGroup}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion ? undefined : "show"}
          style={{ y: reduceMotion ? undefined : titleY }}
        >
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 border border-[#111111] bg-[#f7f4ea] px-3 py-2 text-xs font-black uppercase leading-none"
          >
            <Radio className="h-4 w-4" />
            Available for sharp web builds
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="hero-title mt-5 text-[4.8rem] font-black uppercase leading-[0.78] sm:text-[7.25rem] md:text-[9.5rem] lg:text-[12rem] xl:text-[13.5rem]"
          >
            Manish
          </motion.h1>
          <motion.p variants={heroItem} className="mt-5 max-w-2xl text-lg font-semibold leading-snug sm:text-xl md:text-2xl">
            Creative developer crafting expressive websites, motion-led
            interfaces, and digital identities that feel alive.
          </motion.p>
          <motion.div variants={heroItem} className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticLink
              href="#work"
              icon={ArrowUpRight}
              className="bg-[#d7ff44] text-[#111111]"
            >
              see work
            </MagneticLink>
            <MagneticLink
              href="#contact"
              icon={Zap}
              className="bg-[#ff6b4a] text-[#111111]"
            >
              start a project
            </MagneticLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[420px] md:min-h-[560px]"
          initial={reduceMotion ? false : { opacity: 0, y: 42, rotate: 2 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 18, delay: 0.28 }}
          style={{ y: reduceMotion ? undefined : posterY }}
        >
          <PortraitPoster />
          <Sticker className="left-0 top-2 bg-[#7ae7ff]" angle={-5}>
            frontend
          </Sticker>
          <Sticker className="right-2 top-20 bg-[#d7ff44]" angle={7} delay={-1.4}>
            motion
          </Sticker>
          <Sticker className="bottom-24 left-4 bg-[#ff6b4a]" angle={6} delay={-2.6}>
            ux logic
          </Sticker>
          <Sticker className="bottom-8 right-0 bg-[#f7f4ea]" angle={-4} delay={-3.2}>
            clean code
          </Sticker>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let phase = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBlock = (x: number, y: number, size: number, color: string) => {
      context.fillStyle = color;
      context.fillRect(x, y, size, size);
      context.strokeStyle = "#111111";
      context.lineWidth = 1.5;
      context.strokeRect(x, y, size, size);
    };

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.globalAlpha = 0.94;

      const colors = ["#d7ff44", "#ff6b4a", "#7ae7ff", "#f7f4ea", "#111111"];
      for (let i = 0; i < 34; i += 1) {
        const row = i % 7;
        const col = Math.floor(i / 7);
        const size = 12 + ((i * 9) % 42);
        const x =
          ((col * 220 + Math.sin(phase + i) * 42 + width * 0.05) %
            (width + 160)) -
          80;
        const y =
          ((row * 120 + Math.cos(phase * 0.8 + i) * 28 + height * 0.06) %
            (height + 140)) -
          70;
        drawBlock(x, y, size, colors[i % colors.length]);
      }

      context.globalAlpha = 0.5;
      context.strokeStyle = "#111111";
      context.lineWidth = 1;
      for (let i = 0; i < 12; i += 1) {
        const y = 32 + i * 76 + Math.sin(phase + i) * 14;
        context.beginPath();
        context.moveTo(0, y);
        for (let x = 0; x <= width + 40; x += 40) {
          context.lineTo(x, y + Math.sin(x * 0.018 + phase + i) * 10);
        }
        context.stroke();
      }

      context.globalAlpha = 1;
      if (!prefersReducedMotion.matches) {
        phase += 0.012;
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const observer = new ResizeObserver(resize);

    observer.observe(canvas);
    resize();
    render();

    return () => {
      observer.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-40"
    />
  );
}

function PortraitPoster() {
  return (
    <motion.div
      className="poster-panel absolute inset-x-6 top-8 mx-auto h-[360px] max-w-[380px] border-2 border-[#111111] bg-[#111111] p-3 shadow-[14px_14px_0_#111111] sm:h-[440px] md:top-16"
      role="img"
      aria-label="Abstract kinetic poster for Manish"
      animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-full overflow-hidden border border-[#f7f4ea] bg-[#f7f4ea]">
        <div className="poster-grid absolute inset-0" />
        <div className="absolute left-6 top-6 h-20 w-20 bg-[#d7ff44] outline outline-2 outline-[#111111]" />
        <div className="absolute right-5 top-10 h-28 w-24 bg-[#7ae7ff] outline outline-2 outline-[#111111]" />
        <div className="absolute bottom-10 left-8 h-28 w-32 bg-[#ff6b4a] outline outline-2 outline-[#111111]" />
        <div className="absolute bottom-20 right-8 h-32 w-24 bg-[#111111]" />
        <div className="absolute left-1/2 top-1/2 grid h-52 w-52 -translate-x-1/2 -translate-y-1/2 place-items-center border-2 border-[#111111] bg-[#f7f4ea]">
          <span className="text-[9rem] font-black leading-none">M</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border border-[#111111] bg-[#f7f4ea] px-3 py-2 text-xs font-black uppercase">
          <span>portfolio</span>
          <span>2026</span>
        </div>
      </div>
    </motion.div>
  );
}

function Sticker({
  children,
  className,
  angle,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  angle: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`sticker absolute z-20 border-2 border-[#111111] px-4 py-3 text-sm font-black uppercase ${className}`}
      animate={{ y: [0, -10, 0], rotate: [angle, angle + 1.5, angle] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
