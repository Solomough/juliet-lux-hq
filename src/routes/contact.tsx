import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { brand, whatsappLink } from "@/lib/brand";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Enquiries | Chill Fit by Juliet Lux" },
      {
        name: "description",
        content:
          "Reach Chill Fit by Juliet Lux in Makurdi, Benue State. Call, email or send a WhatsApp enquiry — we reply Monday to Saturday, 8am to 6pm.",
      },
      { property: "og:title", content: "Contact Chill Fit by Juliet Lux" },
      {
        property: "og:description",
        content: "Phone, WhatsApp, email and business hours for orders and bookings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const href = whatsappLink(
    `Hello Juliet Lux 👋\n\nName: ${name || "-"}\nSubject: ${subject || "General enquiry"}\n\n${message || ""}`,
  );

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <p className="eyebrow">Say Hello</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Contact Us</h1>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {[
              [MessageCircle, "WhatsApp", brand.phone],
              [Phone, "Phone", brand.phone],
              [Mail, "Email", brand.email],
              [MapPin, "Location", `${brand.location} · Nationwide delivery`],
              [Clock, "Business hours", brand.hours],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof Phone;
              return (
                <div
                  key={label as string}
                  className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-soft"
                >
                  <I className="mt-0.5 size-5 text-[var(--gold)]" />
                  <div>
                    <p className="font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {label as string}
                    </p>
                    <p className="mt-1 text-sm">{value as string}</p>
                  </div>
                </div>
              );
            })}

            <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
              <p className="font-button text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Payment details
              </p>
              <p className="mt-2 text-sm">Bank: {brand.bank.bank}</p>
              <p className="text-sm">Account name: {brand.bank.accountName}</p>
              <p className="text-sm text-muted-foreground">
                Account number: {brand.bank.accountNumber}
              </p>
            </div>
          </div>

          <div className="space-y-5 rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl">Send an enquiry</h2>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="rounded-full bg-background"
            />
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject (order, booking, custom piece…)"
              className="rounded-full bg-background"
            />
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
              rows={6}
              className="rounded-2xl bg-background"
            />
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-7 py-4 font-button text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground shadow-luxe"
            >
              <MessageCircle className="size-4" /> Send on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
