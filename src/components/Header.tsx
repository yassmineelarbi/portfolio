"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, locales, switchLocalePath, type Locale } from "@/lib/i18n";
import { profile, ui } from "@/content/site";

export function Header({ locale }: { locale: Locale }) {
  const raw = usePathname() || `/${locale}/`;
  const pathname = raw.endsWith("/") ? raw : `${raw}/`;
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    setOpen(false);
    setHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const t = ui.nav;
  const home = `/${locale}/`;
  const isHome = pathname === home;
  const items = [
    { label: t.about[locale], to: href(locale, "about"), current: pathname.startsWith(`/${locale}/about`) },
    { label: t.projects[locale], to: href(locale, "projects"), current: pathname.startsWith(`/${locale}/projects`) },
    { label: t.experience[locale], to: href(locale, "experience"), current: pathname.startsWith(`/${locale}/experience`) },
    { label: t.leadership[locale], to: href(locale, "leadership"), current: pathname.startsWith(`/${locale}/leadership`) },
    { label: t.contact[locale], to: href(locale, "#contact"), current: false },
  ];

  return (
    <header className="site-header">
      <a className="skip" href="#main">
        {t.skip[locale]}
      </a>
      <div className="wrap bar">
        <Link className="brand" href={home} aria-current={isHome ? "page" : undefined}>
          <span className="mark" aria-hidden="true">
            YE
          </span>
          <span>{profile.name}</span>
        </Link>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? t.close[locale] : t.menu[locale]}
        </button>

        <nav id="site-nav" className={`nav${open ? " open" : ""}`} aria-label={t.primary[locale]}>
          {items.map((it) => (
            <Link key={it.to} href={it.to} aria-current={it.current ? "page" : undefined} onClick={() => setOpen(false)}>
              {it.label}
            </Link>
          ))}
          <div className="lang" role="group" aria-label={t.language[locale]}>
            {locales.map((l) => (
              <a
                key={l}
                href={switchLocalePath(pathname, l) + hash}
                hrefLang={l}
                lang={l}
                aria-current={l === locale ? "true" : undefined}
                onClick={() => {
                  try {
                    localStorage.setItem("lang", l);
                  } catch {
                    /* storage unavailable */
                  }
                }}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
