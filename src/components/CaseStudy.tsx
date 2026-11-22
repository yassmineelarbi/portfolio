import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/i18n";
import type { Project } from "@/content/projects";
import { ui } from "@/content/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Figure, Frame } from "@/components/Frame";
import { Placeholder } from "@/components/Placeholder";
import { ArrowLeft, ArrowUpRight } from "@/components/Icons";

/** Full case study layout, shared by project pages and internship pages. */
export type CaseStudyProps = {
  p: Project;
  l: Locale;
  index: number;
  prev: Project;
  next: Project;
  basePath: string; // "projects" or "experience"
  backHref: string;
  backLabel: string;
  bottomBackLabel: string;
  prevLabel: string;
  nextLabel: string;
};

export function Section({ n, title, id, children }: { n: number; title: string; id: string; children: React.ReactNode }) {
  return (
    <section className="p-section" id={id} aria-labelledby={`${id}-h`}>
      <div className="wrap split">
        <div className="side">
          <div className="sticky">
            <Eyebrow n={String(n).padStart(2, "0")}>{title}</Eyebrow>
          </div>
        </div>
        <div data-reveal>
          <h2 id={`${id}-h`} className="sr-only">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}

/** One frame ratio per gallery, taken from its images (median, kept between 1.2 and 2), so screenshots fill their frames. */
function galleryRatio(p: Project) {
  const r = p.gallery.map((g) => g.width / g.height).sort((a, b) => a - b);
  if (r.length === 0) return 1.6;
  const mid = r.length % 2 ? r[(r.length - 1) / 2] : (r[r.length / 2 - 1] + r[r.length / 2]) / 2;
  // Phone screenshots keep their portrait ratio and sit three per row.
  if (mid < 0.8) return Math.round(Math.max(0.4, mid) * 1000) / 1000;
  return Math.round(Math.min(2, Math.max(1.2, mid)) * 1000) / 1000;
}

export function CaseStudy({ p, l, index, prev, next, basePath, backHref, backLabel, bottomBackLabel, prevLabel, nextLabel }: CaseStudyProps) {
  const t = ui.project;
  const statusLabel = ui.labels.stepStatus;
  let n = 0;
  const num = () => ++n;

  return (
    <article>
      <header className="page-head p-head">
        <div className="wrap">
          <p className="crumb">
            <Link className="text-link back" href={backHref}>
              <ArrowLeft /> {backLabel}
            </Link>
          </p>
          <Eyebrow n={String(index + 1).padStart(2, "0")}>{p.category[l]}</Eyebrow>
          <h1 className="display">{p.title[l]}</h1>
          <p className="lede">{p.lede[l]}</p>
          <dl className="p-meta">
            <div>
              <dt>{ui.labels.period[l]}</dt>
              <dd>{p.period[l]}</dd>
            </div>
            <div>
              <dt>{ui.labels.context[l]}</dt>
              <dd>{p.context[l]}</dd>
            </div>
            <div>
              <dt>{ui.labels.status[l]}</dt>
              <dd>{p.status[l]}</dd>
            </div>
          </dl>
          <div className="p-cover">
            <Frame img={p.cover} locale={l} eager sizes="100vw" />
          </div>
        </div>
      </header>

      <Section n={num()} id="overview" title={p.overviewTitle?.[l] ?? t.overview[l]}>
        <div className="prose">
          {p.overview[l].map((x) => (
            <p key={x.slice(0, 32)}>{x}</p>
          ))}
        </div>
      </Section>

      <Section n={num()} id="objectives" title={t.objectives[l]}>
        <ol className="list">
          {p.objectives[l].map((x) => (
            <li key={x.slice(0, 32)}>{x}</li>
          ))}
        </ol>
      </Section>

      <Section n={num()} id="architecture" title={t.architecture[l]}>
        <div className="prose">
          <p>{p.architecture.intro[l]}</p>
        </div>
        <ol className="flow">
          {p.architecture.steps.map((s) => (
            <li key={s.label.en}>
              <span className="idx" aria-hidden="true" />
              <div className="head">
                {s.tag && <span className="tag">{s.tag[l]}</span>}
                <h3>{s.label[l]}</h3>
              </div>
              {s.detail ? <p>{s.detail[l]}</p> : <span />}
              {s.status ? (
                <span className={`s ${s.status}`}>
                  <span className="pill">{statusLabel[s.status][l]}</span>
                </span>
              ) : (
                <span />
              )}
            </li>
          ))}
        </ol>
        {p.architecture.note && <p className="flow-note">{p.architecture.note[l]}</p>}
      </Section>

      <Section n={num()} id="stack" title={t.stack[l]}>
        <div className="stack-grid">
          {p.stack.map((g) => (
            <div key={g.label.en}>
              <h3>{g.label[l]}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>



      <Section n={num()} id="results" title={t.results[l]}>
        <div className="metrics">
          {p.results.metrics.map((m) => (
            <div key={m.label.en}>
              <p className="v">{l === "fr" ? frNumber(m.value) : m.value}</p>
              <p className="l">{m.label[l]}</p>
            </div>
          ))}
        </div>
        {p.results.table && (
          <div className="table-wrap">
            <table>
              <caption>{p.results.table.caption[l]}</caption>
              <thead>
                <tr>
                  {p.results.table.head[l].map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.results.table.rows.map((row, i) => (
                  <tr key={i} className={i === p.results.table!.highlight ? "hl" : undefined}>
                    {row.map((c, j) => (
                      <td key={j}>{typeof c === "string" ? (l === "fr" ? frNumber(c) : c) : c[l]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <ul className="notes">
          {p.results.notes[l].map((x) => (
            <li key={x.slice(0, 32)}>{x}</li>
          ))}
        </ul>
      </Section>

      {p.gallery.length > 0 && (
        <Section n={num()} id="visuals" title={t.gallery[l]}>
          <div className={`gallery${galleryRatio(p) < 0.8 ? " portrait" : ""}`} style={{ "--gallery-ratio": galleryRatio(p) } as React.CSSProperties}>
            {p.gallery.map((g) => (
              <Figure
                key={g.src}
                img={g}
                locale={l}
                className={!g.paper && Math.abs(g.width / g.height - galleryRatio(p)) / galleryRatio(p) < 0.08 ? "cover" : ""}
              />
            ))}
          </div>
        </Section>
      )}


      {p.links.length > 0 && (
      <Section n={num()} id="links" title={t.links[l]}>
        <ul className="links">
          {p.links.map((x) =>
            x.placeholder ? (
              <li key={x.label.en}>
                <Placeholder locale={l}>{x.label[l]}</Placeholder>
              </li>
            ) : x.href ? (
              <li key={x.label.en}>
                <a className="text-link" href={x.href} target="_blank" rel="noopener">
                  {x.label[l]} <ArrowUpRight />
                </a>
              </li>
            ) : (
              <li key={x.label.en} className="muted">
                {x.label[l]}
              </li>
            ),
          )}
        </ul>
      </Section>
      )}

      <nav className="wrap" aria-label={backLabel} style={{ paddingBottom: "clamp(56px, 7vw, 96px)" }}>
        <div className="pager">
          <Link href={href(l, `${basePath}/${prev.slug}`)} rel="prev">
            <span className="dir">← {prevLabel}</span>
            <span className="t">{prev.shortTitle[l]}</span>
          </Link>
          <Link href={href(l, `${basePath}/${next.slug}`)} rel="next">
            <span className="dir">
              {nextLabel} →
            </span>
            <span className="t">{next.shortTitle[l]}</span>
          </Link>
        </div>
        <p className="pager-back">
          <Link className="text-link back" href={backHref}>
            <ArrowLeft /> {bottomBackLabel}
          </Link>
        </p>
      </nav>
    </article>
  );
}

/** French number formatting for metric values: 97.4% → 97,4 %, 28,587 → 28 587. */
function frNumber(v: string) {
  return v
    .replace(/(\d),(\d{3})/g, "$1 $2")
    .replace(/(\d)\.(\d)/g, "$1,$2")
    .replace(/(\d)%/g, "$1 %");
}
