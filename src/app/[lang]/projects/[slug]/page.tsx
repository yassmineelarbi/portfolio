import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { getProject, neighbours, projects } from "@/content/projects";
import { ui } from "@/content/site";
import { CaseStudy } from "@/components/CaseStudy";

type Props = { params: Promise<{ lang: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMeta(lang, `projects/${slug}`, `${p.title[lang]} · Yassmine El Arbi`, p.summary[lang], p.cover.src);
}

export default async function ProjectPage({ params }: Props) {
  const { lang: l, slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const { prev, next } = neighbours(slug);
  return (
    <CaseStudy
      p={p}
      l={l}
      index={projects.findIndex((x) => x.slug === slug)}
      prev={prev}
      next={next}
      basePath="projects"
      backHref={href(l, "projects")}
      backLabel={ui.actions.allProjects[l]}
      bottomBackLabel={ui.actions.backToProjects[l]}
      prevLabel={ui.actions.previous[l]}
      nextLabel={ui.actions.next[l]}
    />
  );
}
