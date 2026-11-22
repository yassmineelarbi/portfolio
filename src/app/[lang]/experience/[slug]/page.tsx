import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { getInternship, internshipNeighbours, internships } from "@/content/internships";
import { ui } from "@/content/site";
import { CaseStudy } from "@/components/CaseStudy";

type Props = { params: Promise<{ lang: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => internships.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getInternship(slug);
  if (!p) return {};
  return pageMeta(lang, `experience/${slug}`, `${p.title[lang]} · Yassmine El Arbi`, p.summary[lang], p.cover.src);
}

export default async function InternshipPage({ params }: Props) {
  const { lang: l, slug } = await params;
  const p = getInternship(slug);
  if (!p) notFound();
  const { prev, next } = internshipNeighbours(slug);
  return (
    <CaseStudy
      p={p}
      l={l}
      index={internships.findIndex((x) => x.slug === slug)}
      prev={prev}
      next={next}
      basePath="experience"
      backHref={href(l, "experience")}
      backLabel={ui.actions.allInternships[l]}
      bottomBackLabel={ui.actions.backToInternships[l]}
      prevLabel={ui.actions.previousInternship[l]}
      nextLabel={ui.actions.nextInternship[l]}
    />
  );
}
