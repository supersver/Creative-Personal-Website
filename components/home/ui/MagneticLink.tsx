"use client";

import clsx from "clsx";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import type { ComponentType, MouseEvent, ReactNode } from "react";

type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

type MagneticLinkProps = {
  href: string;
  icon: IconComponent;
  className: string;
  children: ReactNode;
};

export function MagneticLink({
  href,
  icon: Icon,
  className,
  children,
}: MagneticLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 520, damping: 32 });
  const springY = useSpring(y, { stiffness: 520, damping: 32 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.26);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={clsx(
        `magnetic-link inline-flex min-h-12 items-center gap-2 border-2 border-[#111111] px-5 py-3 text-sm font-black uppercase shadow-[5px_5px_0_#111111] `,
        className,
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        reduceMotion
          ? undefined
          : { scale: 1.03, boxShadow: "8px 8px 0 #111111" }
      }
      whileTap={
        reduceMotion
          ? undefined
          : { scale: 0.96, boxShadow: "3px 3px 0 #111111" }
      }
      transition={{ type: "spring", stiffness: 460, damping: 24 }}
    >
      <Icon className="h-4 w-4" strokeWidth={2.8} />
      {children}
    </motion.a>
  );
}
