import { useEffect, useState } from "react";

const KEY = "chillfit-wishlist";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]") as string[];
  } catch {
    return [];
  }
}

export function useWishlist() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(read());
  }, []);

  const toggle = (slug: string) => {
    setItems((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      window.localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  return { items, toggle, has: (slug: string) => items.includes(slug) };
}
