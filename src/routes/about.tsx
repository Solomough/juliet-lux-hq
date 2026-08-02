import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/SiteLayout";
import { brand } from "@/lib/brand";
import studio from "@/assets/m-studio.jpg";
import gown from "@/assets/p-gown.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "Our Story | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "From a passion for beauty to a Nigerian lifestyle brand combining premium fashion and professional makeup. Learn our mission, vision and values.",
      },
      { property: "og:title", content: "Our Story | Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "The brand story, mission, vision and values behind Chill Fit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  ["Confidence", "Everything we create is designed to make you feel unstoppable."],
  ["Quality", "Fabrics, finishes and products we would happily wear ourselves."],
  ["Creativity", "Every look is crafted, never copied."],
  ["Excellence", "We sweat the details others skip."],
  ["Integrity", "Honest advice, honest pricing, honest timelines."],
  ["Customer First", "Your experience shapes every decision we make."],
];

function About() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6">
        <p className="eyebrow">Our Story</p>
        <h1 className="mt-3 max-w-2xl text-4xl leading-tight md:text-5xl">
          Where fashion, beauty and confidence meet
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <img
            src={gown}
            alt="Chill Fit luxury gown editorial"
            loading="lazy"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
          />
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              At {brand.name}, we believe confidence begins with how you feel about
              yourself. What started as a passion for beauty has grown into a lifestyle
              brand that combines premium fashion and professional makeup services to help
              every customer look and feel their best for every occasion.
            </p>
            <p>
              From everyday essentials to statement outfits and flawless glam sessions, we
              are committed to delivering quality, style, and exceptional service. Every
              collection is carefully selected, and every makeup session is crafted to make
              customers feel confident, beautiful, and unforgettable.
            </p>
            <p>
              Today, Chill Fit proudly serves customers across Nigeria through a seamless
              digital shopping experience.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To inspire confidence by making premium fashion and professional beauty
              services accessible, reliable, and enjoyable while delivering an exceptional
              customer experience built on quality, trust, and style.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-soft">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              To become one of Nigeria's most trusted lifestyle brands where fashion,
              beauty, and confidence meet in one unforgettable experience.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="What we stand for" title="Our core values">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(([title, copy]) => (
            <div
              key={title}
              className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-luxe md:grid-cols-2">
          <img
            src={studio}
            alt="Juliet at work in the studio"
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl">Come see us in Makurdi</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {brand.location} · {brand.hours}
            </p>
            <Link
              to="/booking"
              className="mt-7 inline-block rounded-full gradient-brand px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
            >
              Book a session
            </Link>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
