export type Policy = {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; points: string[] }[];
};

export const policies: Policy[] = [
  {
    slug: "returns-exchanges",
    title: "Returns & Exchanges",
    intro:
      "We want you to love every piece. If something isn't right, here is exactly how we handle it.",
    sections: [
      {
        heading: "Return conditions",
        points: [
          "Items must be unused and in their original condition.",
          "All tags must still be attached.",
          "Returns must be raised within 48 hours of delivery.",
          "Sale items are not eligible for return.",
          "Accessories are not eligible for return.",
        ],
      },
      {
        heading: "Exchanges",
        points: [
          "Exchanges are allowed for a wrong size.",
          "Exchanges are allowed if the wrong product was sent.",
          "Exchanges are allowed for manufacturing defects.",
          "Return delivery costs are discussed and agreed on WhatsApp.",
        ],
      },
      {
        heading: "How to start",
        points: [
          "Message us on WhatsApp within 48 hours with your order details.",
          "Include clear photos of the item and its tags.",
          "We confirm approval before you ship anything back.",
        ],
      },
    ],
  },
  {
    slug: "booking-policy",
    title: "Booking Policy",
    intro:
      "These terms keep every client's appointment protected and running on time.",
    sections: [
      {
        heading: "Deposits",
        points: [
          "A deposit confirms your booking.",
          "Deposits are non-refundable but are applied in full to your session fee.",
        ],
      },
      {
        heading: "Rescheduling & lateness",
        points: [
          "Rescheduling is allowed with at least 72 hours' notice, subject to availability.",
          "Arrivals more than 30 minutes late may require rescheduling.",
        ],
      },
      {
        heading: "Bridal bookings",
        points: [
          "Bridal and traditional bridal sessions should be booked at least two weeks in advance.",
          "Travel outside Makurdi is quoted separately before confirmation.",
        ],
      },
    ],
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    intro:
      "We collect the minimum information needed to serve you, and we never sell your data.",
    sections: [
      {
        heading: "What we collect",
        points: [
          "Your name, phone number and delivery address for order fulfilment.",
          "Booking details such as service, date, time and address for home service.",
          "Any information you choose to share with us in chat.",
        ],
      },
      {
        heading: "How we use it",
        points: [
          "To process and deliver your orders.",
          "To confirm and manage your appointments.",
          "To send updates you have opted in to receive.",
        ],
      },
      {
        heading: "Your choices",
        points: [
          "You may ask us to delete your details at any time.",
          "You can opt out of updates by replying STOP on WhatsApp.",
          "We do not share your data with third parties except delivery partners.",
        ],
      },
    ],
  },
  {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    intro:
      "By ordering or booking with Chill Fit by Juliet Lux you agree to the following.",
    sections: [
      {
        heading: "Orders",
        points: [
          "Prices are listed in Nigerian Naira and may change without notice.",
          "Orders are confirmed only after payment is received.",
          "Delivery fees are calculated separately and confirmed on WhatsApp.",
          "Product colours may vary slightly from screen to fabric.",
        ],
      },
      {
        heading: "Services",
        points: [
          "Service prices reflect artistry, products and time.",
          "Additional faces or looks are charged separately.",
          "We reserve the right to decline a booking that falls outside our capacity.",
        ],
      },
      {
        heading: "Content",
        points: [
          "All images and copy on this site belong to Chill Fit by Juliet Lux.",
          "We may share session photos on our social channels unless you ask us not to.",
        ],
      },
    ],
  },
];
