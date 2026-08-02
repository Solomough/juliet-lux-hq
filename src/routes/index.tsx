import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Truck, ShieldCheck, Star } from "lucide-react";
import { SiteLayout, Section } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, services, testimonials, faqs, galleryImages } from "@/data/catalog";
import { brand, formatNaira, whatsappLink } from "@/lib/brand";
import hero from "@/assets/hero.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Chill Fit by Juliet Lux | Luxury Fashion & Makeup in Nigeria" },
      {
        name: "description",
        content:
          "Premium fashion and professional makeup artistry from Makurdi, Benue State. Shop luxury gowns, denim and sets, book glam sessions and order on WhatsApp.",
      },
      { property: "og:title", content: "Chill Fit by Juliet Lux | Wear Confidence" },
      {
        property: "og:description",
        content:
          "Luxury fashion collections and professional makeup services with nationwide delivery across Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: brand.name,
          slogan: brand.slogan,
          telephone: brand.phone,
          email: brand.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Makurdi",
            addressRegion: "Benue State",
            addressCountry: "NG",
          },
          openingHours: "Mo-Sa 08:00-18:00",
        }),
      },
    ],
  }),
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function Home() {
  const featured = products.filter((p) => p.featured);
  const featuredServices = services.filter((s) => s.featured);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-12 md:grid-cols-2 md:px-6 md:pb-20 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Fashion · Beauty · Confidence</p>
            <h1 className="mt-5 text-[2.6rem] leading-[1.05] md:text-6xl">
              Wear Confidence.
              <span className="block text-gradient-brand">Own Every Moment.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Premium fashion collections and professional makeup artistry, crafted in
              Makurdi and delivered across Nigeria. One boutique for the outfit and the
              glow.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-luxe transition-transform hover:scale-[1.03]"
              >
                Shop Collection <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:border-foreground/40"
              >
                Book Makeup
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
              >
                Explore Collections
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-7">
              {[
                ["500+", "Happy clients"],
                ["36", "States delivered"],
                ["5.0", "Average rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl">{v}</dt>
                  <dd className="mt-1 font-button text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 size-40 rounded-full bg-[var(--mint)] opacity-50 blur-3xl" />
            <div className="absolute -bottom-10 -right-6 size-52 rounded-full bg-[var(--lavender)] opacity-50 blur-3xl" />
            <img
              src={hero}
              alt="Model wearing a blush pink luxury gown from Chill Fit by Juliet Lux"
              width={1280}
              height={1600}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 left-4 rounded-2xl border border-border/70 bg-background/90 px-5 py-4 shadow-soft backdrop-blur md:left-8"
            >
              <p className="font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Signature piece
              </p>
              <p className="mt-1 font-display text-base">Rose Luxe Gown</p>
              <p className="font-button text-xs text-muted-foreground">
                {formatNaira(65000)}
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="border-y border-border/60 bg-card/50">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-7 sm:grid-cols-3 md:px-6">
            {[
              [Truck, "Nationwide delivery", "Every state in Nigeria"],
              [Sparkles, "Professional glam", "Studio & home service"],
              [ShieldCheck, "Trusted service", "48-hour exchange window"],
            ].map(([Icon, title, sub]) => {
              const I = Icon as typeof Truck;
              return (
                <div key={title as string} className="flex items-center gap-3">
                  <I className="size-5 text-[var(--gold)]" />
                  <div>
                    <p className="font-button text-xs font-semibold uppercase tracking-[0.12em]">
                      {title as string}
                    </p>
                    <p className="text-xs text-muted-foreground">{sub as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <Section
        eyebrow="Featured Collection"
        title="Pieces our clients love"
        subtitle="Carefully selected fashion made to move with you — from everyday essentials to statement moments."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            View the full shop <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="Beauty Studio"
        title="Glam that lasts all day"
        subtitle="Professional makeup artistry for every occasion, available in our Makurdi studio or at your home."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredServices.map((s, i) => (
            <motion.article
              key={s.slug}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-button text-sm font-semibold">
                    {s.priceLabel ?? formatNaira(s.price)}
                  </span>
                  <Link
                    to="/booking"
                    search={{ service: s.slug }}
                    className="rounded-full gradient-brand px-4 py-2 font-button text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* BRAND STORY */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.6 }}
            src={galleryImages[4]!.src}
            alt="Behind the scenes at the Chill Fit studio"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-luxe"
          />
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl md:text-[2.6rem]">
              Confidence begins with how you feel
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              What started as a passion for beauty has grown into a lifestyle brand that
              combines premium fashion and professional makeup services to help every
              customer look and feel their best for every occasion.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Read our story <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Kind Words" title="Loved by women across Nigeria">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.blockquote
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft"
            >
              <div className="flex gap-1 text-[var(--gold)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <footer className="mt-5 font-button text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {t.name} · {t.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* INSTAGRAM PREVIEW */}
      <Section
        eyebrow="@chillfitbyjulietlux"
        title="Straight from the feed"
        subtitle="Daily looks, transformations and behind the scenes moments."
      >
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {galleryImages.slice(0, 6).map((g) => (
            <a
              key={g.alt}
              href={brand.socials[0]!.href}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </Section>

      {/* FAQ PREVIEW */}
      <Section eyebrow="Good to know" title="Frequently asked">
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.slice(0, 5).map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border/70">
              <AccordionTrigger className="text-left font-display text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          to="/faq"
          className="mt-8 inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em]"
        >
          All questions <ArrowRight className="size-4" />
        </Link>
      </Section>

      {/* NEWSLETTER */}
      <Section>
        <div className="rounded-[2rem] gradient-brand px-6 py-14 text-center shadow-luxe md:px-16">
          <h2 className="mx-auto max-w-xl text-3xl text-primary-foreground md:text-4xl">
            Be first to know about new drops
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/80">
            Join our list for early access to collections, glam offers and styling notes.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full rounded-full border border-transparent bg-background/90 px-5 py-3.5 text-sm outline-none focus:border-foreground/20"
            />
            <button className="rounded-full bg-foreground px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-background">
              Subscribe
            </button>
          </form>
          <a
            href={whatsappLink("Hello Juliet Lux 👋 Please add me to your updates list.")}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-button text-xs uppercase tracking-[0.16em] text-primary-foreground/85 underline"
          >
            Or join via WhatsApp
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
