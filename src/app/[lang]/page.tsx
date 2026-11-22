import Link from "next/link";
import type { Metadata } from "next";
import { href, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import {
  aboutPage,
  certifications,
  education,
  eventPhotos,
  home,
  languages,
  involvement,
  research,
  meta,
  profile,
  skills,
  ui,
} from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { WorkList } from "@/components/WorkList";
import { ExperienceList } from "@/components/ExperienceList";
import { ContactForm } from "@/components/ContactForm";
import { CopyButton } from "@/components/CopyButton";
import { Arrow, ArrowUpRight, Download, Star } from "@/components/Icons";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang, "", meta.home.title[lang], meta.home.description[lang]);
}

export default async function HomePage({ params }: Props) {
  const { lang: l } = await params;
  const s = home.sections;
  const [tsyp, wie] = eventPhotos;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: home.role[l],
    email: `mailto:${profile.email}`,
    alumniOf: ["SUP'COM", "IPEIT"],
    sameAs: [profile.linkedin, profile.github],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="hero" aria-labelledby="name">
        <div className="wrap grid">
          <div>
            <h1 id="name" className="display">
              {profile.firstName}
              <br />
              <span className="last">{profile.lastName}</span>
            </h1>
            <p className="eyebrow role">{home.role[l]}</p>
            <p className="intro">{home.intro[l]}</p>
            <p className="status">{home.status[l]}</p>
            <p className="lede">{home.lede[l]}</p>
            <div className="cta">
              <Link className="btn primary" href={href(l, "projects")}>
                {ui.actions.explore[l]} <Arrow />
              </Link>
              <Link className="btn" href={href(l, "#contact")}>
                {ui.actions.contact[l]}
              </Link>
            </div>
            <div className="hero-links">
              <a className="text-link" href={profile.cv[l]} download>
                <Download /> {ui.actions.cv[l]}
              </a>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="me noopener">
                LinkedIn <ArrowUpRight />
              </a>
              <a className="text-link" href={profile.github} target="_blank" rel="me noopener">
                GitHub <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about" aria-labelledby="about-h">
        <div className="wrap">
          <div className="split">
            <div className="side">
              <div className="sticky">
                <Eyebrow n="01">{s.about[l]}</Eyebrow>
                <h2 id="about-h" className="display" style={{ fontSize: "clamp(26px, 2.4vw, 34px)", marginTop: 18 }}>
                  {/* Keep hyphenated words such as "real-world" on one line. */}
                  {home.about.title[l].split(/(\S+-\S+)/).map((part, i) =>
                    i % 2 ? (
                      <span key={i} style={{ whiteSpace: "nowrap" }}>
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  )}
                </h2>
              </div>
            </div>
            <div data-reveal>
              <div className="about-body">
                {home.about.paragraphs[l].map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <p className="small-head" style={{ marginTop: 48 }}>
                {home.about.approachTitle[l]}
              </p>
              <ol className="approach" style={{ marginTop: 0 }}>
                {home.about.approach.map((a, i) => (
                  <li key={a.k.en}>
                    <p className="k">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {a.k[l]}
                    </p>
                    <p>{a.v[l]}</p>
                  </li>
                ))}
              </ol>
              <p style={{ marginTop: 36 }}>
                <Link className="text-link" href={href(l, "about")}>
                  {ui.actions.moreAbout[l]} <Arrow />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills" aria-labelledby="skills-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow n="02">{s.skills[l]}</Eyebrow>
              <h2 id="skills-h" className="display">
                {s.skillsTitle[l]}
              </h2>
            </div>
          </div>
          <div className="skills" data-reveal>
            {skills.map((g) => (
              <div key={g.title.en}>
                <h3>{g.title[l]}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" id="experience" aria-labelledby="xp-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow n="03">{s.experience[l]}</Eyebrow>
              <h2 id="xp-h" className="display">
                {s.experienceTitle[l]}
              </h2>
            </div>
          </div>
          <ExperienceList locale={l} />
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="work" aria-labelledby="work-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow n="04">{s.work[l]}</Eyebrow>
              <h2 id="work-h" className="display">
                {s.workTitle[l]}
              </h2>
            </div>
          </div>
          <WorkList locale={l} />
        </div>
      </section>

      {/* Education */}
      <section className="section" id="background" aria-labelledby="edu-h">
        <div className="wrap">
          <Eyebrow n="05">{s.education[l]}</Eyebrow>
          <h2 id="edu-h" className="display" style={{ fontSize: "clamp(30px, 3.6vw, 46px)", margin: "18px 0 32px" }}>
            {s.educationTitle[l]}
          </h2>
        </div>
        <div className="wrap two-col">
          <div data-reveal>
            <ul className="entries">
              {education.map((e) => {
                const school = typeof e.school === "string" ? e.school : e.school[l];
                return (
                  <li key={school}>
                    <h3>{school}</h3>
                    <span className="date">{e.period[l]}</span>
                    <p className="sub">
                      {e.full ? `${e.full[l]} · ` : ""}
                      {e.degree[l]}
                    </p>
                    {e.note && (
                      <p className="note">
                        <Star /> {e.note[l]}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="display" style={{ fontSize: "clamp(30px, 3.6vw, 46px)", margin: "0 0 24px" }}>
              {aboutPage.certsTitle[l]}
            </h2>
            <ul className="inline-list">
              {certifications.map((c) => (
                <li key={c.issuer}>
                  <span>{c.issuer}</span>
                  <span>{c.items[l].join(" · ")}</span>
                </li>
              ))}
            </ul>
            <h2 className="display" style={{ fontSize: "clamp(30px, 3.6vw, 46px)", margin: "56px 0 24px" }}>
              {aboutPage.languagesTitle[l]}
            </h2>
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
      </section>

      {/* Academic research */}
      <section className="section" id="research" aria-labelledby="research-h">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <Eyebrow n="06">{s.research[l]}</Eyebrow>
              <h2 id="research-h" className="display">
                {s.researchTitle[l]}
              </h2>
            </div>
          </div>
          <div className="research">
            {research.map((r) => (
              <article key={r.title.en} data-reveal>
                <p className="ctx">
                  {r.context[l]} <span>· {r.period[l]}</span>
                </p>
                <h3>{r.title[l]}</h3>
                <p className="summary">{r.summary[l]}</p>
                <ul>
                  {r.points[l].map((pt) => (
                    <li key={pt.slice(0, 32)}>{pt}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Tags">
                  {r.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Involvement */}
      <section className="section" id="leadership" aria-labelledby="lead-h">
        <div className="wrap">
          <Eyebrow n="07">{s.leadership[l]}</Eyebrow>
          <h2 id="lead-h" className="display" style={{ fontSize: "clamp(30px, 3.6vw, 46px)", margin: "18px 0 32px" }}>
            {s.leadershipTitle[l]}
          </h2>
          <div className="inv-groups">
            {involvement.map((g) => (
              <div key={g.id} className="inv-group" data-reveal>
                <h3 className="inv-head">{g.title[l]}</h3>
                <ul className="entries">
                  {g.items.map((x) => (
                    <li key={x.title.en}>
                      <h3 className="kind">
                        {x.kind === "award" && <Star />}
                        {x.title[l]}
                      </h3>
                      {x.period ? <span className="date">{x.period[l]}</span> : <span />}
                      <p className="sub">{x.org[l]}</p>
                      {x.blurb && <p className="blurb">{x.blurb[l]}</p>}
                      {x.caseStudy && (
                        <p className="blurb">
                          <Link className="text-link" href={href(l, `leadership/${x.caseStudy}`)}>
                            {ui.actions.readCase[l]} <Arrow />
                          </Link>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32 }}>
            <Link className="text-link" href={href(l, "leadership")}>
              {s.leadershipMore[l]} <Arrow />
            </Link>
          </p>
        </div>

        <div className="wrap">
          <div className="photo-strip" data-reveal>
            <figure className="tall">
              <div className="ph-frame">
                <img src={tsyp.src} alt={tsyp.alt[l]} width={tsyp.width} height={tsyp.height} loading="lazy" decoding="async" />
              </div>
              <figcaption>{tsyp.caption[l]}</figcaption>
            </figure>
            <figure className="wide">
              <div className="ph-frame">
                <img src={wie.src} alt={wie.alt[l]} width={wie.width} height={wie.height} loading="lazy" decoding="async" />
              </div>
              <figcaption>{wie.caption[l]}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact" aria-labelledby="contact-h">
        <div className="wrap">
          <Eyebrow n="08">{s.contact[l]}</Eyebrow>
          <h2 id="contact-h" className="display" style={{ marginTop: 20 }}>
            {home.contact.title[l].split("\n").map((line, i) => (
              <span key={line} className={i === 1 ? "accent" : undefined}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <div className="grid">
            <div>
              <p className="body">{home.contact.body[l]}</p>
              <div className="cta">
                <a className="btn" href={profile.cv[l]} download>
                  <Download /> {ui.actions.cv[l]}
                </a>
              </div>
              <ContactForm locale={l} fallbackEmail={profile.email} />
            </div>
            <ul className="channels">
              <li>
                <span className="k">{ui.labels.email[l]}</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <CopyButton text={profile.email} label={ui.actions.copy[l]} done={ui.actions.copied[l]} />
              </li>
              <li>
                <span className="k">LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="me noopener">
                  {profile.linkedinLabel}
                </a>
                <ArrowUpRight className="star" />
              </li>
              <li>
                <span className="k">GitHub</span>
                <a href={profile.github} target="_blank" rel="me noopener">
                  {profile.githubLabel}
                </a>
                <ArrowUpRight className="star" />
              </li>
              <li>
                <span className="k">{ui.labels.basedIn[l]}</span>
                <span>{profile.location[l]}</span>
                <span />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
