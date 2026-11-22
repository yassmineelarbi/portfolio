import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { ui } from "@/content/site";
import { Frame } from "./Frame";
import { Arrow } from "./Icons";

export function WorkList({ locale }: { locale: Locale }) {
  return (
    <ol className="work">
      {projects.map((p, i) => {
        const inProgress = p.status.en.startsWith("In progress");
        return (
          <li key={p.slug} className="work-item" data-reveal>
            <span className="num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <Frame img={p.cover} locale={locale} sizes="(max-width: 860px) 100vw, 50vw" />
            <div className="body">
              <div className="meta-line">
                <span className="cat">{p.category[locale]}</span>
                <span>{p.period[locale]}</span>
              </div>
              <h3>
                <Link href={href(locale, `projects/${p.slug}`)}>{p.title[locale]}</Link>
              </h3>
              <p>{p.summary[locale]}</p>
              <ul className="tech" aria-label={ui.labels.stack[locale]}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div>
                <span className={`pill${inProgress ? " live" : ""}`}>{p.status[locale]}</span>
              </div>
              <span className="text-link more" aria-hidden="true">
                {ui.actions.readCase[locale]} <Arrow />
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
