import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Instagram, Facebook, Music2, Ghost } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { brand, whatsappLink } from "@/lib/brand";
import logo from "@/assets/juliet_brand.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Beauty" },
  { to: "/booking", label: "Book" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "Our Story" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const socialIcon: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  TikTok: Music2,
  Snapchat: Ghost,
};

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo.url}
        alt="Chill Fit by Juliet Lux logo"
        width={64}
        height={64}
        className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg tracking-tight">Chill Fit</span>
        <span className="block font-button text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
          by Juliet Lux
        </span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen gradient-soft">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Wordmark />

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-button text-xs uppercase tracking-[0.16em] transition-colors hover:text-foreground ${
                  path === item.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink("Hello Juliet Lux 👋 I'd like to make an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full gradient-brand px-5 py-2.5 font-button text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-luxe transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="rounded-full border border-border p-2.5 lg:hidden"
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[78%] bg-background">
                <div className="mt-10 flex flex-col gap-1 px-5">
                  {nav.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="border-b border-border/60 py-4 font-display text-2xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href={whatsappLink("Hello Juliet Lux 👋 I'd like to make an enquiry.")}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3 font-button text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
                  >
                    <MessageCircle className="size-4" /> Chat on WhatsApp
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-border/60 bg-card/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.slogan} Premium fashion and professional beauty, delivered
              nationwide from Makurdi, Benue State.
            </p>
            <div className="mt-6 flex gap-3">
              {brand.socials.map((s) => {
                const Icon = socialIcon[s.label] ?? Instagram;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-button text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.slice(1).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-foreground/80 hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/policies" className="text-foreground/80 hover:text-foreground">
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-button text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
              <li>{brand.location}</li>
              <li>{brand.hours}</li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-6 text-center font-button text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>
      </footer>

      <a
        href={whatsappLink("Hello Juliet Lux 👋 I'd like to make an enquiry.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full gradient-brand text-primary-foreground shadow-luxe transition-transform hover:scale-105"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-3 text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
