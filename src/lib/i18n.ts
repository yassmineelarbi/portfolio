export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** A value written once per language. Facts shared by both languages (numbers, stack names) stay outside it. */
export type L<T = string> = { en: T; fr: T };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function pick<T>(value: L<T>, locale: Locale): T {
  return value[locale];
}

/** Same page in the other language: /en/projects/x/ → /fr/projects/x/ */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (parts.length > 1 && isLocale(parts[1])) parts[1] = target;
  else parts.splice(1, 0, target);
  const joined = parts.join("/");
  return joined.endsWith("/") ? joined : `${joined}/`;
}

export function href(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  if (!clean) return `/${locale}/`;
  if (clean.startsWith("#")) return `/${locale}/${clean}`;
  const [p, hash] = clean.split("#");
  const withSlash = p.endsWith("/") ? p : `${p}/`;
  return `/${locale}/${withSlash}${hash ? `#${hash}` : ""}`;
}
