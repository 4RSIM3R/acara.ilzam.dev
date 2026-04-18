import { motion } from "motion/react";
import type { ReactNode } from "react";

type Variant = "ink" | "paper" | "outline";

const styles: Record<Variant, string> = {
  ink: "bg-ink text-on-ink hover:bg-accent-ink",
  paper: "bg-paper text-ink hover:bg-ember hover:text-on-ink",
  outline: "bg-transparent text-on-ink border border-on-ink/30 hover:border-ember hover:text-ember",
};

type Size = "md" | "lg";
const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export default function MotionCta({
  href,
  label,
  variant = "ink",
  size = "md",
  fullWidth,
}: {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}) {
  return (
    <motion.a
      href={href}
      initial={false}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`inline-flex items-center justify-center gap-3 font-sans rounded-none transition-colors cursor-pointer ${sizes[size]} ${styles[variant]} ${fullWidth ? "w-full" : ""}`}
    >
      <span>{label}</span>
      <motion.span
        aria-hidden="true"
        variants={{
          hover: { x: 6 },
        }}
        transition={{ type: "spring", stiffness: 500, damping: 24 }}
        className="inline-block"
      >
        →
      </motion.span>
    </motion.a>
  );
}
