export const brand = {
  name: "Chill Fit by Juliet Lux",
  shortName: "Chill Fit",
  slogan: "Wear Confidence. Own Every Moment.",
  location: "Makurdi, Benue State, Nigeria",
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
  phone: "+234 901 397 1399",
  whatsapp: "2349013971399",
  email: "julietlux@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "Snapchat", href: "https://snapchat.com" },
  ],
  bank: {
    bank: "OPay",
    accountName: "Juliet Dzerchia",
    accountNumber: "Available on WhatsApp confirmation",
  },
};

export const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(input: {
  product: string;
  size?: string | undefined;
  color?: string | undefined;
  quantity?: number | undefined;
  delivery?: string | undefined;
}) {
  return [
    "Hello Juliet Lux 👋",
    "",
    "I'd like to place an order.",
    "",
    "Product:",
    input.product,
    "",
    "Size:",
    input.size || "Not selected",
    "",
    "Color:",
    input.color || "Not selected",
    "",
    "Quantity:",
    String(input.quantity ?? 1),
    "",
    "Delivery:",
    input.delivery || "To be confirmed",
    "",
    "Please confirm availability.",
  ].join("\n");
}

export function bookingMessage(input: {
  service: string;
  price: string;
  date: string;
  time: string;
  mode: string;
  address?: string | undefined;
  name: string;
  notes?: string | undefined;
  inspiration?: string | undefined;
}) {
  return [
    "Hello Juliet Lux 👋",
    "",
    "I'd like to book a makeup session.",
    "",
    `Name: ${input.name}`,
    `Service: ${input.service}`,
    `Price: ${input.price}`,
    `Preferred Date: ${input.date}`,
    `Preferred Time: ${input.time}`,
    `Session Type: ${input.mode}`,
    input.mode === "Home Service" ? `Address: ${input.address || "-"}` : "",
    input.inspiration ? `Inspiration: ${input.inspiration}` : "",
    input.notes ? `Notes: ${input.notes}` : "",
    "",
    "Please confirm my slot.",
  ]
    .filter(Boolean)
    .join("\n");
}
