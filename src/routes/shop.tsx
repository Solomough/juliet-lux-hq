import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, fashionCategories } from "@/data/catalog";
import { useWishlist } from "@/hooks/use-wishlist";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/shop")({
  component: Shop,
  head: () => ({
    meta: [
      { title: "Shop Fashion | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Browse crop tops, luxury gowns, baggie jeans, cargo pants, two piece sets and more. Nationwide delivery across Nigeria, order on WhatsApp.",
      },
      { property: "og:title", content: "Shop Fashion | Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "Premium Nigerian fashion collections with easy WhatsApp ordering.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
});

const PER_PAGE = 8;

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const wishlist = useWishlist();

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase().trim()) &&
        (!onlyWishlist || wishlist.has(p.slug)),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [query, category, sort, onlyWishlist, wishlist]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Shop Fashion</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every piece is carefully selected for quality, fit and finish. Filter, find your
          favourite and order in seconds on WhatsApp.
        </p>

        <div className="mt-9 grid gap-3 rounded-3xl border border-border/70 bg-card p-4 shadow-soft md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search products"
              className="rounded-full border-border bg-background pl-11"
            />
          </div>

          <Select
            value={category}
            onValueChange={(v) => {
              setCategory(v);
              setPage(1);
            }}
          >
            <SelectTrigger className="rounded-full bg-background">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {fashionCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="rounded-full bg-background">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: low to high</SelectItem>
              <SelectItem value="price-desc">Price: high to low</SelectItem>
              <SelectItem value="name">Name A–Z</SelectItem>
            </SelectContent>
          </Select>

          <button
            onClick={() => {
              setOnlyWishlist((v) => !v);
              setPage(1);
            }}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2 font-button text-xs uppercase tracking-[0.14em] ${
              onlyWishlist
                ? "border-transparent gradient-brand text-primary-foreground"
                : "border-border"
            }`}
          >
            <Heart className="size-4" /> Wishlist
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="mb-6 font-button text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {filtered.length} product{filtered.length === 1 ? "" : "s"}
        </p>

        {visible.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-16 text-center">
            <p className="font-display text-xl">Nothing here yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different category or clear your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {visible.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`size-10 rounded-full font-button text-sm ${
                  current === i + 1
                    ? "gradient-brand text-primary-foreground"
                    : "border border-border"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-3xl border border-border/70 bg-card p-8 text-center shadow-soft">
          <h2 className="font-display text-2xl">Looking for glam too?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Complete your look with a professional makeup session in studio or at home.
          </p>
          <Link
            to="/services"
            className="mt-6 inline-block rounded-full gradient-brand px-7 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"
          >
            View beauty services
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
