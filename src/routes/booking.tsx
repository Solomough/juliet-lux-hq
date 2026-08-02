import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { services } from "@/data/catalog";
import { bookingMessage, formatNaira, whatsappLink } from "@/lib/brand";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  component: Booking,
  head: () => ({
    meta: [
      { title: "Book a Makeup Appointment | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Book your glam session in minutes. Choose your service, date, time and studio or home service — your booking summary is sent straight to WhatsApp.",
      },
      { property: "og:title", content: "Book a Makeup Appointment" },
      {
        property: "og:description",
        content: "Reserve your soft glam, birthday, bridal or traditional bridal session.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/booking" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

function Booking() {
  const search = Route.useSearch();
  const [slug, setSlug] = useState(search.service ?? services[1]!.slug);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState<"Studio Session" | "Home Service">("Studio Session");
  const [address, setAddress] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [notes, setNotes] = useState("");

  const service = services.find((s) => s.slug === slug) ?? services[1]!;
  const ready = name && date && time && (mode === "Studio Session" || address);

  const href = whatsappLink(
    bookingMessage({
      name: name || "-",
      service: service.name,
      price: service.priceLabel ?? formatNaira(service.price),
      date,
      time,
      mode,
      address,
      inspiration,
      notes,
    }),
  );

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 pt-14 md:px-6">
        <p className="eyebrow">Appointments</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Book Your Glam</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Fill in your details and we'll generate a complete booking summary for WhatsApp.
          Your slot is confirmed once your deposit is received.
        </p>

        <div className="my-10 space-y-7 rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:p-9">
          <Field label="Select service">
            <div className="grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setSlug(s.slug)}
                  className={`rounded-2xl border px-4 py-3 text-left transition-colors ${
                    s.slug === slug
                      ? "border-primary bg-primary/15"
                      : "border-border hover:border-primary/60"
                  }`}
                >
                  <span className="block font-display text-sm">{s.name}</span>
                  <span className="font-button text-xs text-muted-foreground">
                    {s.priceLabel ?? formatNaira(s.price)} · {s.duration}
                  </span>
                </button>
              ))}
            </div>
          </Field>

          <Field label="Your name">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="rounded-full bg-background"
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred date">
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-full bg-background"
              />
            </Field>
            <Field label="Preferred time">
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-full bg-background"
              />
            </Field>
          </div>

          <Field label="Session type">
            <div className="flex gap-2">
              {(["Studio Session", "Home Service"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-full border px-5 py-2.5 font-button text-xs uppercase tracking-[0.12em] ${
                    m === mode
                      ? "border-transparent gradient-brand text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </Field>

          {mode === "Home Service" && (
            <Field label="Your address">
              <Textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street, area, city"
                className="rounded-2xl bg-background"
              />
            </Field>
          )}

          <Field label="Inspiration image (optional)">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setInspiration(e.target.files?.[0]?.name ?? "")}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-muted file:px-4 file:py-1.5 file:font-button file:text-xs"
            />
            <p className="mt-2 text-xs text-muted-foreground">
              We'll note the file name here — please send the image itself in the WhatsApp
              chat.
            </p>
          </Field>

          <Field label="Notes (optional)">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Skin sensitivities, event details, preferred look…"
              className="rounded-2xl bg-background"
            />
          </Field>

          <a
            href={ready ? href : undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!ready}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-button text-xs font-semibold uppercase tracking-[0.16em] ${
              ready
                ? "gradient-brand text-primary-foreground shadow-luxe"
                : "pointer-events-none bg-muted text-muted-foreground"
            }`}
          >
            <MessageCircle className="size-4" /> Submit booking on WhatsApp
          </a>
          {!ready && (
            <p className="text-center text-xs text-muted-foreground">
              Add your name, date, time{mode === "Home Service" ? " and address" : ""} to
              continue.
            </p>
          )}
        </div>
      </div>
    </SiteLayout>
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
