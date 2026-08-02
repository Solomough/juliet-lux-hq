import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { policies } from "@/data/policies";

export const Route = createFileRoute("/policies/$slug")({
  loader: ({ params }) => {
    const policy = policies.find((p) => p.slug === params.slug);
    if (!policy) throw notFound();
    return policy;
  },
  component: PolicyPage,
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl">This policy didn't load</h1>
        <Link to="/policies" className="mt-6 inline-block underline">
          All policies
        </Link>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl">Policy not found</h1>
        <Link to="/policies" className="mt-6 inline-block underline">
          All policies
        </Link>
      </div>
    </SiteLayout>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Policy"} | Chill Fit by Juliet Lux` },
      { name: "description", content: loaderData?.intro ?? "Chill Fit policies." },
      { property: "og:title", content: loaderData?.title ?? "Policy" },
      { property: "og:description", content: loaderData?.intro ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/policies/${loaderData?.slug ?? ""}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/policies/${loaderData?.slug ?? ""}` }],
  }),
});

function PolicyPage() {
  const policy = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
        <Link
          to="/policies"
          className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-[0.16em] text-muted-foreground"
        >
          <ArrowLeft className="size-4" /> All policies
        </Link>
        <h1 className="mt-6 text-4xl md:text-5xl">{policy.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{policy.intro}</p>

        <div className="mt-10 space-y-6">
          {policy.sections.map((s: { heading: string; points: string[] }) => (
            <section
              key={s.heading}
              className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft"
            >
              <h2 className="font-display text-xl">{s.heading}</h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {s.points.map((p: string) => (
                  <li key={p} className="flex gap-3">
                    <span className="text-[var(--gold)]">·</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
