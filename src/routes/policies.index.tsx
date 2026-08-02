import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { policies } from "@/data/policies";

export const Route = createFileRoute("/policies/")({
  component: PoliciesIndex,
  head: () => ({
    meta: [
      { title: "Policies | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Read our returns and exchanges policy, booking policy, privacy policy and terms and conditions.",
      },
      { property: "og:title", content: "Policies | Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "Clear, fair policies for orders, bookings and your data.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/policies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/policies" }],
  }),
});

function PoliciesIndex() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <p className="eyebrow">The Fine Print</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Policies</h1>
        <div className="mt-10 space-y-4">
          {policies.map((p) => (
            <Link
              key={p.slug}
              to="/policies/$slug"
              params={{ slug: p.slug }}
              className="flex items-center justify-between gap-6 rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-shadow hover:shadow-luxe"
            >
              <span>
                <span className="block font-display text-xl">{p.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{p.intro}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-[var(--gold)]" />
            </Link>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
