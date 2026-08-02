import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/data/catalog";
import { formatNaira } from "@/lib/brand";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Makeup Services & Prices | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Professional makeup in Makurdi: soft glam, natural, studio, photoshoot, birthday, bridal and traditional bridal glam. Studio and home service available.",
      },
      { property: "og:title", content: "Makeup Services | Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "Book professional glam sessions with transparent pricing and durations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Services() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6">
        <p className="eyebrow">Beauty Studio</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Makeup Services</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every session is crafted around your features, your outfit and your occasion —
          in our Makurdi studio or at your home.
        </p>

        <div className="grid gap-6 py-12 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="grid overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft sm:grid-cols-[40%_1fr]"
            >
              <img
                src={s.image}
                alt={`${s.name} makeup look`}
                loading="lazy"
                width={900}
                height={1100}
                className="h-56 w-full object-cover sm:h-full"
              />
              <div className="space-y-3 p-6">
                <h2 className="font-display text-xl">{s.name}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="flex items-center gap-2 font-button text-xs text-muted-foreground">
                  <Clock className="size-3.5" /> {s.duration}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-display text-lg">
                    {s.priceLabel ?? formatNaira(s.price)}
                  </span>
                  <Link
                    to="/booking"
                    search={{ service: s.slug }}
                    className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 font-button text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                  >
                    Book <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-8 rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
          <h2 className="font-display text-2xl">Booking policy at a glance</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
            <li>· A deposit confirms your booking and is non-refundable.</li>
            <li>· Rescheduling is allowed with 72 hours' notice.</li>
            <li>· Arrivals over 30 minutes late may be rescheduled.</li>
            <li>· Bridal bookings: please book at least two weeks ahead.</li>
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
