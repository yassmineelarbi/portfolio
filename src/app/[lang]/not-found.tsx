import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display">Page not found</h1>
        <p className="lede">This page does not exist or has moved. · Cette page n&apos;existe pas ou a été déplacée.</p>
        <div className="cta">
          <Link className="btn primary" href="/en/">English</Link>
          <Link className="btn" href="/fr/">Français</Link>
        </div>
      </div>
    </section>
  );
}
