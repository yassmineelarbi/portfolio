import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { profile, ui } from "@/content/site";
import { Star } from "./Icons";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="wrap bar">
        <span className="motto">
          <Star />
        </span>
        <nav aria-label="Footer">
          <Link href={href(locale, "projects")}>{ui.nav.projects[locale]}</Link>
          <a href={profile.linkedin} rel="me noopener" target="_blank">
            LinkedIn
          </a>
          <a href={profile.github} rel="me noopener" target="_blank">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>{ui.labels.email[locale]}</a>
        </nav>
        <span>
          © {new Date().getFullYear()} {profile.name}. {ui.footer.rights[locale]}
        </span>
      </div>
    </footer>
  );
}
