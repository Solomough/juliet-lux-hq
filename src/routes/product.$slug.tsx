import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Truck, MessageCircle, ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { OrderDialog } from "@/components/site/OrderDialog";
import { products } from "@/data/catalog";
import { formatNaira } from "@/lib/brand";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  component: ProductPage,
  errorComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl">This product didn't load</h1>
        <Link to="/shop" className="mt-6 inline-block underline">
          Back to shop
        </Link>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block underline">
          Back to shop
        </Link>
      </div>
    </SiteLayout>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Product"} | Chill Fit by Juliet Lux` },
      {
        name: "description",
        content: loaderData?.description ?? "Premium fashion from Chill Fit by Juliet Lux.",
      },
      { property: "og:title", content: loaderData?.name ?? "Product" },
      { property: "og:description", content: loaderData?.description ?? "" },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/product/${loaderData?.slug ?? ""}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/product/${loaderData?.slug ?? ""}` }],
  }),
});

function ProductPage() {
  const product = Route.useLoaderData();
  const [active, setActive] = useState(0);
  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.featured))
    .slice(0, 4);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pt-10 md:px-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-button text-xs uppercase tracking-[0.16em] text-muted-foreground"
        >
          <ArrowLeft className="size-4" /> Back to shop
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <img
              src={product.images[active] ?? product.images[0]}
              alt={product.name}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-luxe"
            />
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`overflow-hidden rounded-2xl border-2 ${
                      i === active ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="size-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-4 font-display text-2xl">{formatNaira(product.price)}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8 space-y-5">
              <Detail label="Available sizes" value={product.sizes.join(" · ")} />
              <Detail label="Colours" value={product.colors.join(" · ")} />
              <div className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-[var(--gold)]" />
                <span>{product.inStock ? "In stock and ready to ship" : "Made to order"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="size-4 text-[var(--gold)]" />
                <span>Nationwide delivery · fee confirmed on WhatsApp</span>
              </div>
            </div>

            <div className="mt-9">
              <OrderDialog
                product={product}
                trigger={
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-7 py-4 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-luxe">
                    <MessageCircle className="size-4" /> Order on WhatsApp
                  </button>
                }
              />
            </div>
          </div>
        </div>

        <section className="py-20">
          <h2 className="mb-8 text-2xl md:text-3xl">You may also love</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
