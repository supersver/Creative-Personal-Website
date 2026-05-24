import type { ComponentType } from "react";

export type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

export type Project = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  icon: IconComponent;
};
