import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { experience, ui } from "@/content/site";
import { Arrow } from "@/components/Icons";

/** The internships list, shared by the home page and the Experience page. */
export function ExperienceList({ locale: l }: { locale: Locale }) {
  return (
    <ol className="xp">
      {experience.map((x) => (
        <li key={x.company} data-reveal>
          <div className="xp-side">
            <p className="when">
              {x.period[l]}
              <span>{x.place[l]}</span>
            </p>
            {x.logo && (
              <div className="xp-logo">
                <img src={x.logo.src} alt={`${x.company} logo`} width={x.logo.width} height={x.logo.height} loading="lazy" decoding="async" />
              </div>
            )}
          </div>
          <div>
            <h3>{x.company}</h3>
            <p className="role">{x.role[l]}</p>
            <p className="summary">{x.summary[l]}</p>
            {x.points[l].length > 0 && (
              <ul>
                {x.points[l].map((pt) => (
                  <li key={pt.slice(0, 24)}>{pt}</li>
                ))}
              </ul>
            )}
          </div>
          {x.caseStudy ? (
            <Link className="text-link link" href={href(l, `experience/${x.caseStudy}`)}>
              {ui.actions.readCase[l]} <Arrow />
            </Link>
          ) : (
            <span />
          )}
        </li>
      ))}
    </ol>
  );
}
