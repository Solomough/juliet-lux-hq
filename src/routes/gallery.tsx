import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { galleryImages } from "@/data/catalog";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Fashion editorials, makeup transformations, behind the scenes and lifestyle moments from Chill Fit by Juliet Lux.",
      },
      { property: "og:title", content: "Gallery | Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "See our fashion looks, glam transformations and studio moments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

const tags = ["All", "Fashion", "Makeup", "Behind the Scenes", "Lifestyle", "Transformations"];

function Gallery() {
  const [tag, setTag] = useState("All");
  const shown = galleryImages.filter((g) => tag === "All" || g.tag === tag);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6">
        <p className="eyebrow">Lookbook</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Gallery</h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-5 py-2.5 font-button text-xs uppercase tracking-[0.12em] ${
                t === tag
                  ? "border-transparent gradient-brand text-primary-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 py-12 md:columns-3">
          {shown.map((g, i) => (
            <motion.figure
              key={g.alt}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.25) }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              <figcaption className="px-5 py-4 font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                {g.tag}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
