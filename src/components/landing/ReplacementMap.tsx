import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Row = { job: string; before: string; after: string };

export default function ReplacementMap({ rows }: { rows: Row[] }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <div className="text-left">
      {/* Anchor counter — loss aversion: quantify the pile */}
      <div
        ref={headerRef}
        className="flex items-baseline justify-between gap-4 pb-4 border-b border-on-ink/25"
      >
        <div className="flex items-baseline gap-3">
          <motion.span
            key={inView ? "in" : "out"}
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl tabular-nums"
          >
            {rows.length}
          </motion.span>
          <span className="text-xs uppercase tracking-[0.14em] text-on-ink-subtle font-mono">
            jobs today
          </span>
        </div>

        <span className="hidden sm:inline-block h-px flex-1 bg-on-ink/15 mx-4 self-center" />

        <div className="flex items-baseline gap-3">
          <span className="text-xs uppercase tracking-[0.14em] text-ember font-mono">
            one login
          </span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-3xl md:text-4xl text-ember tabular-nums"
          >
            1
          </motion.span>
        </div>
      </div>

      {/* Column labels — desktop only, orient the reader */}
      <div
        className="hidden md:grid gap-4 py-3 border-b border-on-ink/15 text-xs uppercase tracking-[0.14em] text-on-ink-subtle font-mono"
        style={{ gridTemplateColumns: "4fr 5fr auto 5fr" }}
      >
        <div>Job</div>
        <div>What you're using today</div>
        <div className="w-8" aria-hidden />
        <div className="text-ember">Inside Acara</div>
      </div>

      {/* Rows */}
      <ul className="divide-y divide-on-ink/10">
        {rows.map((r, i) => (
          <motion.li
            key={r.job}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(i * 0.022, 0.25),
              ease: [0.2, 0.7, 0.2, 1],
            }}
            className="grid gap-x-4 gap-y-1 py-4 md:py-3 items-baseline
                       grid-cols-1
                       md:[grid-template-columns:4fr_5fr_auto_5fr]
                       group hover:bg-on-ink/[0.03] -mx-4 px-4 rounded-sm transition-colors"
          >
            {/* Job */}
            <div className="font-display text-base md:text-lg leading-snug">
              {r.job}
            </div>

            {/* Before */}
            <div className="text-sm leading-snug">
              <span className="md:hidden text-[10px] uppercase tracking-[0.14em] text-on-ink-subtle font-mono mr-2">
                Before
              </span>
              <span className="text-on-ink-subtle line-through decoration-on-ink/40">
                {r.before}
              </span>
            </div>

            {/* Arrow — desktop column */}
            <div className="hidden md:flex items-center w-8 justify-center" aria-hidden>
              <motion.span
                initial={{ x: -4, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(i * 0.022, 0.25) + 0.15,
                }}
                className="text-ember font-mono text-sm"
              >
                →
              </motion.span>
            </div>

            {/* After */}
            <div className="text-sm leading-snug flex items-baseline gap-2">
              <span className="md:hidden text-ember font-mono" aria-hidden>
                →
              </span>
              <span className="md:hidden text-[10px] uppercase tracking-[0.14em] text-ember font-mono mr-1">
                After
              </span>
              <span className="text-on-ink">{r.after}</span>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Closer — drives the anchor home */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 text-center text-sm md:text-base text-on-ink-muted"
      >
        That's <span className="text-ember font-mono">{rows.length}</span>{" "}
        separate jobs — done in one place.
      </motion.p>
    </div>
  );
}
