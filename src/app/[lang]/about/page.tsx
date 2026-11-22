import Link from "next/link";
import type { Metadata } from "next";
import { href, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { aboutPage as a, certifications, experience, home, languages, meta, profile, ui } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Arrow, ArrowLeft, Download } from "@/components/Icons";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang, "about", meta.about.title[lang], meta.about.description[lang]);
}

export default async function AboutPage({ params }: Props) {
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
          <div className="about-hero">
            <div>
              <Eyebrow>{a.title[l]}</Eyebrow>
              <h1 className="display">{a.heading[l]}</h1>
              <p className="lede">{a.intro[l]}</p>
              <div className="cta">
                <a className="btn primary" href={profile.cv[l]} download>
                  <Download /> {ui.actions.cv[l]}
                </a>
                <Link className="btn" href={href(l, "#contact")}>
                  {ui.actions.contact[l]}
                </Link>
              </div>
            </div>
            {profile.portrait ? (
              <figure className="portrait">
                <img
                  src={profile.portrait.src}
                  alt={profile.name}
                  width={profile.portrait.width}
                  height={profile.portrait.height}
                />
              </figure>
            ) : (
              <div className="portrait empty" data-placeholder="true">
                <div>
                  <span className="mono-mark" aria-hidden="true">
                    YE
                  </span>
                  <p>{a.portraitPlaceholder[l]}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="wrap split">
          <div className="side">
            <div className="sticky">
              <Eyebrow n="01">{a.journeyTitle[l]}</Eyebrow>
            </div>
          </div>
          <ol className="timeline" data-reveal>
            {a.journey.map((j) => (
              <li key={j.when.en}>
                <p className="when">{j.when[l]}</p>
                <div>
                  <h3>{j.what[l]}</h3>
                  <ul className="timeline-points">
                    {j.points[l].map((pt) => (
                      <li key={pt.slice(0, 24)}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="p-section">
        <div className="wrap split">
          <div className="side">
            <div className="sticky">
              <Eyebrow n="02">{home.about.approachTitle[l]}</Eyebrow>
            </div>
          </div>
          <div data-reveal>
            <div className="about-body">
              {home.about.paragraphs[l].slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ol className="approach">
              {home.about.approach.map((x, i) => (
                <li key={x.k.en}>
                  <p className="k">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {x.k[l]}
                  </p>
                  <p>{x.v[l]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="wrap split">
          <div className="side">
            <div className="sticky">
              <Eyebrow n="03">{a.interestsTitle[l]}</Eyebrow>
            </div>
          </div>
          <ol className="list interests" data-reveal>
            {a.interests.map((x) => (
              <li key={x.title.en}>
                <div>
                  <h3>{x.title[l]}</h3>
                  <p>{x.text[l]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="p-section">
        <div className="wrap split">
          <div className="side">
            <div className="sticky">
              <Eyebrow n="04">{home.sections.experience[l]}</Eyebrow>
            </div>
          </div>
          <ul className="entries" data-reveal>
            {experience.map((x) => (
              <li key={x.company}>
                <h3>{x.company}</h3>
                <span className="date">{x.period[l]}</span>
                <p className="sub">{x.role[l]}</p>
                <p className="note">{x.summary[l]}</p>
                {x.caseStudy && (
                  <p className="note">
                    <Link className="text-link" href={href(l, `experience/${x.caseStudy}`)}>
                      {ui.actions.readCase[l]} <Arrow />
                    </Link>
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="p-section">
        <div className="wrap split">
          <div className="side">
            <div className="sticky">
              <Eyebrow n="05">{a.goalsTitle[l]}</Eyebrow>
            </div>
          </div>
          <div data-reveal>
            <div className="prose">
              <p style={{ fontSize: 20, color: "var(--ink)" }}>{a.goals[l]}</p>
            </div>
            <div className="two-col" style={{ marginTop: 48 }}>
              <div>
                <p className="small-head">{a.certsTitle[l]}</p>
                <ul className="inline-list">
                  {certifications.map((c) => (
                    <li key={c.issuer}>
                      <span>{c.issuer}</span>
                      <span>{c.items[l].join(" · ")}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="small-head">{a.languagesTitle[l]}</p>
                <ul className="inline-list">
                  {languages.map((x) => (
                    <li key={x.name.en}>
                      <span>{x.name[l]}</span>
                      <span>{x.level?.[l]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cta" style={{ marginTop: 48 }}>
              <Link className="btn primary" href={href(l, "projects")}>
                {ui.actions.explore[l]} <Arrow />
              </Link>
              <a className="btn" href={`mailto:${profile.email}`}>
                {ui.actions.contact[l]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
