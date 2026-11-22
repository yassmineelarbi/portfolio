import Link from "next/link";
import type { Metadata } from "next";
import { href, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { eventPhotos, home, involvement, meta, ui } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Arrow, ArrowLeft, Star } from "@/components/Icons";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return pageMeta(lang, "leadership", meta.leadership.title[lang], meta.leadership.description[lang]);
}

/** Photos shown under a group, matched by group id. */
const groupPhotos: Record<string, (typeof eventPhotos)[number][]> = {
  competitions: [eventPhotos[0], eventPhotos[2]], // TSYP12 WIE STAR, TSYP13 2nd place
};

export default async function LeadershipPage({ params }: Props) {
  const { lang: l } = await params;
  const s = home.sections;
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <p className="crumb">
            <Link className="text-link back" href={href(l)}>
              <ArrowLeft /> {ui.nav.home[l]}
            </Link>
          </p>
          <Eyebrow>{s.leadership[l]}</Eyebrow>
          <h1 className="display">{s.leadershipTitle[l]}</h1>
          <nav className="inv-toc" aria-label={s.leadershipTitle[l].replace("\n", " ")}>
            {involvement.map((g, i) => (
              <a key={g.id} href={`#${g.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span> {g.title[l]}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {involvement.map((g, i) => {
        const photos = groupPhotos[g.id] ?? [];
        return (
          <section key={g.id} id={g.id} className="p-section inv-section" aria-labelledby={`${g.id}-h`}>
            <div className="wrap">
              <Eyebrow n={String(i + 1).padStart(2, "0")}>{g.title[l]}</Eyebrow>
              <h2 id={`${g.id}-h`} className="display inv-title">
                {g.title[l]}
              </h2>
              <p className="lede inv-intro">{g.intro[l]}</p>
              <div className="inv-items">
                {g.items.map((x) => (
                  <article key={x.title.en} className="inv-item" data-reveal>
                    <header>
                      <h3>
                        {x.kind === "award" && <Star />}
                        {x.title[l]}
                      </h3>
                      <p className="meta">
                        {x.org[l]}
                        {x.period && <span> · {x.period[l]}</span>}
                      </p>
                    </header>
                    <p className="summary">{x.summary[l]}</p>
                    {x.points && (
                      <ul>
                        {x.points[l].map((pt) => (
                          <li key={pt.slice(0, 32)}>{pt}</li>
                        ))}
                      </ul>
                    )}
                    {x.caseStudy && (
                      <Link className="text-link" href={href(l, `leadership/${x.caseStudy}`)}>
                        {ui.actions.readCase[l]} <Arrow />
                      </Link>
                    )}
                    {x.link && (
                      <Link className="text-link" href={href(l, x.link.to)}>
                        {x.link.label[l]} <Arrow />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
              {photos.length > 0 && (
                <div className="inv-photos">
                  {photos.map((photo) => (
                    <figure key={photo.src} className="inv-photo" data-reveal>
                      <div className="ph-frame">
                        <img src={photo.src} alt={photo.alt[l]} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
                      </div>
                      <figcaption>{photo.caption[l]}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
