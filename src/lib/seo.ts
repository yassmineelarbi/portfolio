import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Title, description, canonical URL and hreflang alternates for a page that exists in both languages. */
export function pageMeta(locale: Locale, path: string, title: string, description: string, image?: string): Metadata {
  const clean = path.replace(/^\/+|\/+$/g, "");
  const url = (l: Locale) => `/${l}/${clean ? `${clean}/` : ""}`;
  return {
    title,
    description,
    alternates: {
      canonical: url(locale),
      languages: Object.fromEntries([...locales.map((l) => [l, url(l)]), ["x-default", url("en")]]),
    },
    openGraph: {
      title,
      description,
      url: url(locale),
      siteName: "Yassmine El Arbi",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}
