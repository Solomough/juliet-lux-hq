import { Link } from "@tanstack/react-router";
import { Heart, Eye } from "lucide-react";
import { motion } from "motion/react";
import { formatNaira } from "@/lib/brand";
import type { Product } from "@/data/catalog";
import { useWishlist } from "@/hooks/use-wishlist";
import { OrderDialog } from "./OrderDialog";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const wishlist = useWishlist();
  const saved = wishlist.has(product.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-shadow hover:shadow-luxe"
    >
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1100}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </Link>

      <div className="absolute right-3 top-3 flex flex-col gap-2">
        <button
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => wishlist.toggle(product.slug)}
          className="rounded-full bg-background/85 p-2.5 backdrop-blur transition-colors hover:bg-background"
        >
          <Heart
            className={`size-4 ${saved ? "fill-primary text-primary" : "text-foreground"}`}
          />
        </button>
        <OrderDialog
          product={product}
          trigger={
            <button
              aria-label="Quick view"
              className="rounded-full bg-background/85 p-2.5 backdrop-blur transition-colors hover:bg-background"
            >
              <Eye className="size-4" />
            </button>
          }
        />
      </div>

      <div className="space-y-2 p-5">
        <p className="font-button text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
          {product.category}
        </p>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="font-button text-sm font-semibold">
            {formatNaira(product.price)}
          </span>
          <OrderDialog
            product={product}
            trigger={
              <button className="rounded-full gradient-brand px-4 py-2 font-button text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                Order
              </button>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
