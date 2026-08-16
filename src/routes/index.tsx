import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Star,
} from "lucide-react";

import { SiteLayout, Section } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";

import {
  products,
  services,
  testimonials,
  faqs,
  galleryImages,
  realWork,
} from "@/data/catalog";

import { brand, formatNaira, whatsappLink } from "@/lib/brand";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* -------------------------------------------------------------------------- */
/* SEO / BRAND METADATA                                                       */
/* -------------------------------------------------------------------------- */

const pageTitle =
  "Chill Fit by Juliet Lux | Luxury Fashion & Makeup in Nigeria";

const pageDescription =
  "Discover premium fashion collections and professional makeup artistry from Chill Fit by Juliet Lux in Makurdi, Benue State, with delivery available across Nigeria.";

const socialTitle = "Chill Fit by Juliet Lux | Wear Confidence";

const socialDescription =
  "Luxury fashion collections and professional makeup artistry designed to help you wear confidence and own every moment.";

export const Route = createFileRoute("/")({
  component: Home,

  head: () => ({
    meta: [
      {
        title: pageTitle,
      },
      {
        name: "description",
        content: pageDescription,
      },

      /* Open Graph */
      {
        property: "og:title",
        content: socialTitle,
      },
      {
        property: "og:description",
        content: socialDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        property: "og:image",
        content: realWork.chevron,
      },
      {
        property: "og:image:alt",
        content:
          "Chill Fit by Juliet Lux fashion collection featuring a client wearing a statement dress",
      },
      {
        property: "og:site_name",
        content: brand.name,
      },

      /* Twitter / X */
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: socialTitle,
      },
      {
        name: "twitter:description",
        content: socialDescription,
      },
      {
        name: "twitter:image",
        content: realWork.chevron,
      },
      {
        name: "twitter:image:alt",
        content:
          "Chill Fit by Juliet Lux fashion collection featuring a client wearing a statement dress",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: brand.name,
          description: pageDescription,
          slogan: brand.slogan,
          telephone: brand.phone,
          email: brand.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Makurdi",
            addressRegion: "Benue State",
            addressCountry: "NG",
          },
          areaServed: {
            "@type": "Country",
            name: "Nigeria",
          },
          priceRange: "$$",
        }),
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

const heroSlides = [
  {
    src: realWork.chevron,
    alt: "Client wearing the Zuri Chevron off-shoulder dress",
    label: "From the collection",
    caption: "Zuri Chevron Dress",
  },
  {
    src: realWork.tracksuit,
    alt: "Model wearing the Still Grind tracksuit set",
    label: "Streetwear edit",
    caption: "Still Grind Tracksuit",
  },
  {
    src: realWork.traditional,
    alt: "Couple styled in traditional outfits with bridal makeup",
    label: "Occasion styling",
    caption: "Traditional Glam",
  },
];

/* -------------------------------------------------------------------------- */
/* ANIMATION                                                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
};

/* -------------------------------------------------------------------------- */
/* HOME                                                                       */
/* -------------------------------------------------------------------------- */

function Home() {
  const featured = products.filter((product) => product.featured);

  const featuredServices = services.filter(
    (service) => service.featured,
  );

  return (
    <SiteLayout>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-12 md:grid-cols-2 md:px-6 md:pb-20 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Fashion · Beauty · Confidence</p>

            <h1
              id="hero-heading"
              className="mt-5 text-[2.6rem] leading-[1.05] md:text-6xl"
            >
              Wear Confidence.
              <span className="block text-gradient-brand">
                Own Every Moment.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Premium fashion collections and professional makeup artistry,
              crafted in Makurdi and delivered across Nigeria. One boutique
              for the outfit and the glow.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full gradient-brand px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-luxe transition-transform hover:scale-[1.03]"
              >
                Shop Collection
                <ArrowRight
                  className="size-4"
                  aria-hidden="true"
                />
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

            {/* Trust / business metrics */}
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-7">
              {[
                ["500+", "Happy clients"],
                ["36", "States delivered"],
                ["5.0", "Average rating"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl">
                    {value}
                  </dt>

                  <dd className="mt-1 font-button text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <HeroSlideshow slides={heroSlides} />
          </motion.div>
        </div>

        {/* Service highlights */}
        <div className="border-y border-border/60 bg-card/50">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-7 sm:grid-cols-3 md:px-6">
            {[
              {
                icon: Truck,
                title: "Nationwide delivery",
                subtitle: "Every state in Nigeria",
              },
              {
                icon: Sparkles,
                title: "Professional glam",
                subtitle: "Studio & home service",
              },
              {
                icon: ShieldCheck,
                title: "Trusted service",
                subtitle: "48-hour exchange window",
              },
            ].map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-3"
              >
                <Icon
                  className="size-5 text-[var(--gold)]"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-button text-xs font-semibold uppercase tracking-[0.12em]">
                    {title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURED PRODUCTS                                                  */}
      {/* ------------------------------------------------------------------ */}

      <Section
        eyebrow="Featured Collection"
        title="Pieces our clients love"
        subtitle="Carefully selected fashion made to move with you — from everyday essentials to statement moments."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {featured.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
          >
            View the full shop
            <ArrowRight
              className="size-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* BEAUTY SERVICES                                                    */}
      {/* ------------------------------------------------------------------ */}

      <Section
        eyebrow="Beauty Studio"
        title="Glam that lasts all day"
        subtitle="Professional makeup artistry for every occasion, available in our Makurdi studio or at your home."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.slug}
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft"
            >
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                width={900}
                height={1100}
                className="aspect-[5/4] w-full object-cover"
              />

              <div className="space-y-3 p-6">
                <h3 className="font-display text-xl">
                  {service.name}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-button text-sm font-semibold">
                    {service.priceLabel ??
                      formatNaira(service.price)}
                  </span>

                  <Link
                    to="/booking"
                    search={{
                      service: service.slug,
                    }}
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

      {/* ------------------------------------------------------------------ */}
      {/* BRAND STORY                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section
        aria-labelledby="story-heading"
        className="border-y border-border/60 bg-card/60"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
          <motion.img
            {...fadeUp}
            transition={{ duration: 0.6 }}
            src={galleryImages[4]?.src}
            alt="Behind the scenes at the Chill Fit by Juliet Lux studio"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-luxe"
          />

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="eyebrow">Our Story</p>

            <h2
              id="story-heading"
              className="mt-3 text-3xl md:text-[2.6rem]"
            >
              Confidence begins with how you feel
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              What started as a passion for beauty has grown into a
              lifestyle brand that combines premium fashion and
              professional makeup services to help every customer look
              and feel their best for every occasion.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Read our story
              <ArrowRight
                className="size-4"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TESTIMONIALS                                                       */}
      {/* ------------------------------------------------------------------ */}

      <Section
        eyebrow="Kind Words"
        title="Loved by women across Nigeria"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.blockquote
              key={`${testimonial.name}-${testimonial.location}`}
              {...fadeUp}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft"
            >
              <div
                className="flex gap-1 text-[var(--gold)]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="size-3.5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                "{testimonial.quote}"
              </p>

              <footer className="mt-5 font-button text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {testimonial.name} · {testimonial.location}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* INSTAGRAM PREVIEW                                                  */}
      {/* ------------------------------------------------------------------ */}

      <Section
        eyebrow="@chillfitbyjulietlux"
        title="Straight from the feed"
        subtitle="Daily looks, transformations and behind the scenes moments."
      >
        <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
          {galleryImages.slice(0, 6).map((image) => (
            <a
              key={image.alt}
              href={brand.socials?.[0]?.href ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${brand.name} on Instagram`}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </a>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                */}
      {/* ------------------------------------------------------------------ */}

      <Section
        eyebrow="Good to know"
        title="Frequently asked"
      >
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl"
        >
          {faqs.slice(0, 5).map((faq) => (
            <AccordionItem
              key={faq.q}
              value={faq.q}
              className="border-border/70"
            >
              <AccordionTrigger className="text-left font-display text-base">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Link
          to="/faq"
          className="mt-8 inline-flex items-center gap-2 font-button text-xs font-semibold uppercase tracking-[0.18em]"
        >
          All questions
          <ArrowRight
            className="size-4"
            aria-hidden="true"
          />
        </Link>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* NEWSLETTER                                                         */}
      {/* ------------------------------------------------------------------ */}

      <Section>
        <div className="rounded-[2rem] gradient-brand px-6 py-14 text-center shadow-luxe md:px-16">
          <h2 className="mx-auto max-w-xl text-3xl text-primary-foreground md:text-4xl">
            Be first to know about new drops
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm text-primary-foreground/80">
            Join our list for early access to collections, glam offers
            and styling notes.
          </p>

          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address"
              className="w-full rounded-full border border-transparent bg-background/90 px-5 py-3.5 text-sm outline-none focus:border-foreground/20"
            />

            <button
              type="submit"
              className="rounded-full bg-foreground px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-background"
            >
              Subscribe
            </button>
          </form>

          <a
            href={whatsappLink(
              "Hello Juliet Lux 👋 Please add me to your updates list.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-button text-xs uppercase tracking-[0.16em] text-primary-foreground/85 underline"
          >
            Or join via WhatsApp
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
}
