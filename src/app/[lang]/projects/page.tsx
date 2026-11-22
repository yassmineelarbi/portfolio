import Link from "next/link";
import type { Metadata } from "next";
import { href, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { home, meta, ui } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { WorkList } from "@/components/WorkList";
import { ArrowLeft } from "@/components/Icons";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang, "projects", meta.projects.title[lang], meta.projects.description[lang]);
}

export default async function ProjectsPage({ params }: Props) {
  const { lang: l } = await params;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link className="text-link back" href={href(l)}>
              <ArrowLeft /> {ui.nav.home[l]}
            </Link>
          </p>
          <Eyebrow>{home.sections.work[l]}</Eyebrow>
          <h1 className="display">{ui.nav.projects[l]}</h1>
        </div>
      </section>
      <section style={{ paddingBottom: "clamp(72px, 9vw, 128px)" }}>
        <div className="wrap">
          <WorkList locale={l} />
        </div>
      </section>
    </>
  );
}
