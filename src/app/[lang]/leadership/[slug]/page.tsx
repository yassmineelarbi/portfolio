import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { home, ui } from "@/content/site";
import { getInitiative, initiatives } from "@/content/initiatives";
import { Eyebrow } from "@/components/Eyebrow";
import { Figure, Frame } from "@/components/Frame";
import { Section } from "@/components/CaseStudy";
import { ArrowLeft } from "@/components/Icons";

type Props = { params: Promise<{ lang: Locale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => initiatives.map((x) => ({ lang, slug: x.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const x = getInitiative(slug);
  if (!x) return {};
  return pageMeta(lang, `leadership/${slug}`, `${x.shortTitle[lang]} · Yassmine El Arbi`, x.lede[lang], x.cover.src);
}

export default async function InitiativePage({ params }: Props) {
  const { lang: l, slug } = await params;
  const x = getInitiative(slug);
  if (!x) notFound();
  const back = home.sections.leadershipTitle[l].replace("\n", " ");
  const portrait = x.cover.height > x.cover.width;
  let n = 0;
  const num = () => ++n;

  return (
    <article>
      <header className="page-head p-head">
        <div className="wrap">
          <p className="crumb">
            <Link className="text-link back" href={href(l, "leadership")}>
              <ArrowLeft /> {back}
            </Link>
          </p>
          <Eyebrow>{x.category[l]}</Eyebrow>
          <h1 className="display">{x.title[l]}</h1>
          <p className="lede">{x.lede[l]}</p>
          <dl className="p-meta">
            <div>
              <dt>{ui.labels.period[l]}</dt>
              <dd>{x.period[l]}</dd>
            </div>
            <div>
              <dt>{ui.labels.context[l]}</dt>
              <dd>{x.context[l]}</dd>
            </div>
            <div>
              <dt>{x.outcome.label[l]}</dt>
              <dd>{x.outcome.value[l]}</dd>
            </div>
          </dl>
          <div className={`p-cover${portrait ? " portrait" : ""}`}>
            <Frame img={{ ...x.cover, fill: true }} locale={l} eager sizes={portrait ? "420px" : "100vw"} />
          </div>
        </div>
      </header>

      {x.sections.map((s) => (
        <Section key={s.id} n={num()} id={s.id} title={s.title[l]}>
          {s.paragraphs && (
            <div className="prose">
              {s.paragraphs[l].map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          )}
          {s.points && (
            <ul className="init-points">
              {s.points[l].map((p) => (
                <li key={p.slice(0, 32)}>{p}</li>
              ))}
            </ul>
          )}
        </Section>
      ))}

      {x.metrics && (
        <Section n={num()} id="figures" title={l === "fr" ? "Chiffres clés" : "Key figures"}>
          <div className="metrics">
            {x.metrics.map((m) => (
              <div key={m.label.en}>
                <p className="v">{m.value[l]}</p>
                <p className="l">{m.label[l]}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {x.gallery && x.gallery.length > 0 && (
        <Section n={num()} id="visuals" title={ui.project.gallery[l]}>
          <div className="gallery">
            {x.gallery.map((g) => (
              <Figure key={g.src} img={g} locale={l} />
            ))}
          </div>
        </Section>
      )}

      <nav className="wrap" aria-label={back} style={{ paddingBottom: "clamp(56px, 7vw, 96px)" }}>
        <p>
          <Link className="text-link back" href={href(l, "leadership")}>
            <ArrowLeft /> {back}
          </Link>
        </p>
      </nav>
    </article>
  );
}
