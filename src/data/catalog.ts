import croptop from "@/assets/p-croptop.jpg";
import gown from "@/assets/p-gown.jpg";
import jeans from "@/assets/p-jeans.jpg";
import twopiece from "@/assets/p-twopiece.jpg";
import hoodie from "@/assets/p-hoodie.jpg";
import cargo from "@/assets/p-cargo.jpg";
import softglam from "@/assets/m-softglam.jpg";
import bridal from "@/assets/m-bridal.jpg";
import traditional from "@/assets/m-traditional.jpg";
import studio from "@/assets/m-studio.jpg";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured?: boolean;
};

export const fashionCategories = [
  "Crop Tops",
  "Luxury Gowns",
  "Casual Dresses",
  "Jerseys",
  "Baggie Jeans",
  "Cargo Pants",
  "Joggers",
  "Shorts",
  "Two Piece Sets",
  "Hoodies",
  "Skirts",
  "Accessories",
];

const STD = ["XS", "S", "M", "L", "XL"];

export const products: Product[] = [
  {
    slug: "aurora-crop-top",
    name: "Aurora Crop Top",
    category: "Crop Tops",
    price: 9500,
    images: [croptop, twopiece],
    description:
      "A soft ribbed crop top cut for everyday elegance. Breathable stretch fabric that holds its shape from brunch to golden hour.",
    sizes: STD,
    colors: ["White", "Blush Pink", "Black"],
    inStock: true,
    featured: true,
  },
  {
    slug: "luna-crop-top",
    name: "Luna Crop Top",
    category: "Crop Tops",
    price: 12000,
    images: [croptop],
    description:
      "Sculpted square-neck crop top in a premium double-knit finish. Designed to layer beautifully under blazers and open shirts.",
    sizes: STD,
    colors: ["Ivory", "Lavender", "Mint"],
    inStock: true,
  },
  {
    slug: "rose-luxe-gown",
    name: "Rose Luxe Gown",
    category: "Luxury Gowns",
    price: 65000,
    images: [gown],
    description:
      "Our signature floor-sweeping gown in liquid satin with a soft chiffon overlay. Made for weddings, galas and unforgettable entrances.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rose Pink", "Champagne", "Wine"],
    inStock: true,
    featured: true,
  },
  {
    slug: "midnight-elegance-dress",
    name: "Midnight Elegance Dress",
    category: "Casual Dresses",
    price: 30000,
    images: [gown, twopiece],
    description:
      "A fluid midi dress with a flattering wrap silhouette. Effortless enough for dinner, refined enough for the occasion.",
    sizes: STD,
    colors: ["Black", "Deep Emerald"],
    inStock: true,
  },
  {
    slug: "nova-baggie-jeans",
    name: "Nova Baggie Jeans",
    category: "Baggie Jeans",
    price: 28000,
    images: [jeans],
    description:
      "High-rise wide-leg denim in a light wash. Structured at the waist, relaxed through the leg, made to be lived in.",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Light Wash", "Mid Blue", "Black"],
    inStock: true,
    featured: true,
  },
  {
    slug: "classic-drift-joggers",
    name: "Classic Drift Joggers",
    category: "Joggers",
    price: 14500,
    images: [hoodie],
    description:
      "Brushed-cotton joggers with a tapered leg and soft elastic cuffs. Your comfort staple that still looks styled.",
    sizes: STD,
    colors: ["Heather Grey", "Cream", "Black"],
    inStock: true,
  },
  {
    slug: "skyline-jersey",
    name: "Skyline Jersey",
    category: "Jerseys",
    price: 15000,
    images: [cargo],
    description:
      "Oversized jersey in a breathable mint knit. Drop shoulders and a clean hem for that easy off-duty look.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Mint", "White", "Lavender"],
    inStock: true,
  },
  {
    slug: "cloud-nine-hoodie",
    name: "Cloud Nine Hoodie",
    category: "Hoodies",
    price: 19500,
    images: [hoodie],
    description:
      "A plush oversized hoodie in soft lavender fleece with gold-tipped drawcords. Cosy, elevated, endlessly wearable.",
    sizes: STD,
    colors: ["Lavender", "Blush Pink", "Sand"],
    inStock: true,
    featured: true,
  },
  {
    slug: "monaco-cargo-pants",
    name: "Monaco Cargo Pants",
    category: "Cargo Pants",
    price: 17000,
    images: [cargo],
    description:
      "Utility cargo pants with a soft drape and adjustable waist tie. Pocket detailing that is practical and polished.",
    sizes: STD,
    colors: ["Sand", "Olive", "Black"],
    inStock: true,
  },
  {
    slug: "crystal-two-piece-set",
    name: "Crystal Two Piece Set",
    category: "Two Piece Sets",
    price: 28000,
    images: [twopiece],
    description:
      "A matching off-shoulder top and tailored trouser set in warm cream. One outfit, complete confidence.",
    sizes: STD,
    colors: ["Cream", "Blush Pink", "Black"],
    inStock: true,
    featured: true,
  },
  {
    slug: "breeze-tailored-shorts",
    name: "Breeze Tailored Shorts",
    category: "Shorts",
    price: 9500,
    images: [twopiece],
    description:
      "Lightweight tailored shorts with a clean front pleat. Effortless for warm Nigerian afternoons.",
    sizes: STD,
    colors: ["Cream", "Black", "Sand"],
    inStock: true,
  },
  {
    slug: "gilded-hoop-set",
    name: "Gilded Hoop Accessory Set",
    category: "Accessories",
    price: 5000,
    images: [softglam],
    description:
      "Gold-tone hoops and a fine layered chain. The finishing touch on every Chill Fit look.",
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    inStock: true,
  },
];

export type Service = {
  slug: string;
  name: string;
  price: number;
  priceLabel?: string;
  duration: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "natural-makeup",
    name: "Natural Makeup",
    price: 12000,
    duration: "45 minutes",
    description:
      "A fresh, skin-first finish that enhances your natural features. Perfect for work, brunch and everyday confidence.",
    image: softglam,
  },
  {
    slug: "soft-glam",
    name: "Soft Glam",
    price: 15000,
    duration: "1 hour",
    description:
      "Our signature look — glowing skin, defined eyes and a soft lip. Elegant enough for any celebration.",
    image: softglam,
    featured: true,
  },
  {
    slug: "studio-glam",
    name: "Studio Glam",
    price: 18000,
    duration: "1 hour 15 minutes",
    description:
      "A polished, camera-ready finish created in our Makurdi studio with professional lighting.",
    image: studio,
  },
  {
    slug: "photoshoot-glam",
    name: "Photoshoot Glam",
    price: 20000,
    duration: "1 hour 30 minutes",
    description:
      "Built to perform under studio lights and flash. Long-wear products with sculpted definition.",
    image: studio,
  },
  {
    slug: "birthday-glam",
    name: "Birthday Glam",
    price: 25000,
    duration: "1 hour 30 minutes",
    description:
      "Bold, radiant and celebratory. Lashes, glow and a look designed to own the room all night.",
    image: softglam,
    featured: true,
  },
  {
    slug: "home-service",
    name: "Home Service",
    price: 35000,
    priceLabel: "From ₦35,000",
    duration: "Varies by look",
    description:
      "We come to you with the full kit. Available within Makurdi and surrounding areas by arrangement.",
    image: studio,
  },
  {
    slug: "bridal-glam",
    name: "Bridal Glam",
    price: 80000,
    duration: "2 hours 30 minutes",
    description:
      "A full bridal experience including trial consultation, flawless long-wear base and touch-up guidance.",
    image: bridal,
    featured: true,
  },
  {
    slug: "traditional-bridal",
    name: "Traditional Bridal Glam",
    price: 100000,
    duration: "3 hours",
    description:
      "Rich, regal artistry crafted for traditional ceremonies, complete with gele styling coordination.",
    image: traditional,
  },
];

export const galleryImages = [
  { src: gown, alt: "Rose Luxe Gown editorial", tag: "Fashion" },
  { src: bridal, alt: "Bridal glam finish", tag: "Makeup" },
  { src: jeans, alt: "Nova baggie jeans styling", tag: "Fashion" },
  { src: traditional, alt: "Traditional bridal glam with gele", tag: "Makeup" },
  { src: studio, alt: "Behind the scenes in the studio", tag: "Behind the Scenes" },
  { src: twopiece, alt: "Crystal two piece set", tag: "Fashion" },
  { src: softglam, alt: "Soft glam transformation", tag: "Transformations" },
  { src: hoodie, alt: "Cloud Nine hoodie lifestyle", tag: "Lifestyle" },
  { src: croptop, alt: "Aurora crop top detail", tag: "Fashion" },
  { src: cargo, alt: "Monaco cargo styling", tag: "Lifestyle" },
];

export const testimonials = [
  {
    name: "Amaka O.",
    location: "Abuja",
    quote:
      "My bridal glam was beyond anything I imagined. It lasted from morning to midnight and my photos are stunning.",
  },
  {
    name: "Sarah T.",
    location: "Makurdi",
    quote:
      "The Rose Luxe Gown fits like it was made for me. Ordering on WhatsApp took less than two minutes.",
  },
  {
    name: "Blessing I.",
    location: "Lagos",
    quote:
      "Delivery to Lagos was quick and the packaging felt so premium. This is my go-to store now.",
  },
  {
    name: "Doosuur A.",
    location: "Gboko",
    quote:
      "Juliet made me feel so comfortable during my birthday glam session. I felt like the best version of myself.",
  },
  {
    name: "Ngozi K.",
    location: "Port Harcourt",
    quote:
      "Quality you can feel. The two piece set is now my favourite outfit and everyone asks where I got it.",
  },
  {
    name: "Terkimbi M.",
    location: "Makurdi",
    quote:
      "Bought the baggie jeans for my sister. Excellent service and honest sizing advice on WhatsApp.",
  },
];

export const faqs = [
  {
    q: "Do you deliver nationwide?",
    a: "Yes. We deliver to every state in Nigeria through trusted courier partners. Delivery is arranged after your order is confirmed on WhatsApp.",
  },
  {
    q: "How much is delivery?",
    a: "Delivery fees depend on your location and parcel size. We calculate and confirm the exact fee on WhatsApp before dispatch.",
  },
  {
    q: "How long does delivery take?",
    a: "Within Makurdi, delivery is usually same-day or next-day. Other states typically take 2–5 working days.",
  },
  {
    q: "How do I place an order?",
    a: "Choose your product, select your size, colour and quantity, then tap Order on WhatsApp. A ready-made order summary is sent to us instantly.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We currently accept bank transfer to our OPay account (Account Name: Juliet Dzerchia). Card and online payments are coming soon.",
  },
  {
    q: "Is payment before or after delivery?",
    a: "Payment is confirmed before dispatch. For select locations, part payment with balance on delivery can be arranged on WhatsApp.",
  },
  {
    q: "Can I pick up my order instead?",
    a: "Yes. Pickup in Makurdi is available and arranged directly through WhatsApp during business hours.",
  },
  {
    q: "How do I know my size?",
    a: "Send us your measurements on WhatsApp and we will recommend the best fit. Our team responds within business hours.",
  },
  {
    q: "What if the size I ordered doesn't fit?",
    a: "Exchanges are allowed for wrong sizes within 48 hours of delivery, provided the item is unused with tags attached.",
  },
  {
    q: "Can I return an item?",
    a: "Returns are accepted within 48 hours for unused items with tags attached. Sale items and accessories are not eligible for return.",
  },
  {
    q: "Do you make custom or bespoke orders?",
    a: "Yes. Custom gowns and outfits can be arranged. Share your inspiration on WhatsApp and we will quote timing and pricing.",
  },
  {
    q: "How do I book a makeup session?",
    a: "Use the Booking page to select your service, date, time and session type. Your booking summary is sent to us on WhatsApp for confirmation.",
  },
  {
    q: "Is a deposit required for bookings?",
    a: "Yes. A deposit confirms your slot and is non-refundable, but it is fully applied to your session fee.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Rescheduling is allowed with at least 72 hours' notice, subject to availability.",
  },
  {
    q: "What happens if I arrive late?",
    a: "Arrivals more than 30 minutes late may need to be rescheduled so we can protect other clients' appointments.",
  },
  {
    q: "How far in advance should I book bridal makeup?",
    a: "We recommend booking bridal and traditional bridal sessions at least two weeks in advance, especially in wedding season.",
  },
  {
    q: "Do you offer home service?",
    a: "Yes. Home service starts from ₦35,000 and is available within Makurdi and surrounding areas. Travel outside these areas is quoted separately.",
  },
  {
    q: "Do you cover events outside Benue State?",
    a: "Yes, for bridal and event bookings. Travel and accommodation costs are discussed and agreed before confirmation.",
  },
  {
    q: "Do you use products suitable for sensitive skin?",
    a: "We use professional, skin-friendly products and can adapt your look for sensitive skin. Please tell us in advance.",
  },
  {
    q: "What are your business hours?",
    a: "Monday to Saturday, 8:00 AM – 6:00 PM. Messages received outside these hours are answered the next business day.",
  },
];
