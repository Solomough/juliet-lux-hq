import { useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { formatNaira, orderMessage, whatsappLink } from "@/lib/brand";
import type { Product } from "@/data/catalog";

export function OrderDialog({
  product,
  trigger,
}: {
  product: Product;
  trigger: React.ReactNode;
}) {
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [delivery, setDelivery] = useState("");

  const href = whatsappLink(
    orderMessage({
      product: `${product.name} — ${formatNaira(product.price)}`,
      size,
      color,
      quantity: qty,
      delivery: delivery || "To be confirmed",
    }),
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl bg-background sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <p className="font-display text-xl text-foreground">
            {formatNaira(product.price)}
          </p>

          <Field label="Size">
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <Chip key={s} active={s === size} onClick={() => setSize(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </Field>

          <Field label="Colour">
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <Chip key={c} active={c === color} onClick={() => setColor(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </Field>

          <Field label="Quantity">
            <div className="inline-flex items-center gap-4 rounded-full border border-border px-4 py-2">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="size-4" />
              </button>
              <span className="w-6 text-center font-button text-sm">{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>
                <Plus className="size-4" />
              </button>
            </div>
          </Field>

          <Field label="Delivery location">
            <Input
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              placeholder="e.g. Makurdi, Benue State"
              className="rounded-full bg-card"
            />
          </Field>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-luxe"
          >
            <MessageCircle className="size-4" /> Order on WhatsApp
          </a>
          <p className="text-center text-xs text-muted-foreground">
            Delivery fee is confirmed on WhatsApp after your order.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-button text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 font-button text-xs transition-colors ${
        active
          ? "border-transparent gradient-brand text-primary-foreground"
          : "border-border text-muted-foreground hover:border-primary"
      }`}
    >
      {children}
    </button>
  );
}
