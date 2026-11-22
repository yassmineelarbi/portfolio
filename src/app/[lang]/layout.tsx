import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

// Manrope for headings and prominent text, IBM Plex Sans for body and interface. Only the weights in use.
const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});
const plex = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Yassmine El Arbi" }],
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0d0b24", colorScheme: "dark" };

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    // suppressHydrationWarning: the inline script in <head> adds the `js` class before React hydrates.
    <html lang={locale} className={`${manrope.variable} ${plex.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <Reveal />
      </body>
    </html>
  );
}
