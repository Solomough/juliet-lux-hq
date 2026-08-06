import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type HeroSlide = { src: string; alt: string; label: string; caption: string };

export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(id);
  }, [slides.length]);

  const active = slides[index]!;

  return (
    <div className="relative">
      <div className="absolute -left-8 -top-8 size-40 rounded-full bg-[var(--mint)] opacity-50 blur-3xl" />
      <div className="absolute -bottom-10 -right-6 size-52 rounded-full bg-[var(--lavender)] opacity-50 blur-3xl" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-luxe">
        <AnimatePresence initial={false}>
          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt}
            initial={{ opacity: 0, x: "60%", scale: 1.04 }}
            animate={{ opacity: 1, x: "0%", scale: 1 }}
            exit={{ opacity: 0, x: "-45%", scale: 1.02 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.2, 1] }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />

        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.src}
              aria-label={`Show ${s.label}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-background" : "w-2.5 bg-background/50"
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 left-4 rounded-2xl border border-border/70 bg-background/90 px-5 py-4 shadow-soft backdrop-blur md:left-8"
      >
        <p className="font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
          {active.label}
        </p>
        <p className="mt-1 font-display text-base">{active.caption}</p>
      </motion.div>
    </div>
  );
}
