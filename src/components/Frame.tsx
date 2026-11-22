import type { Img } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

/** Fixed-ratio image frame. Charts and diagrams sit on a paper panel instead of being cropped. */
export function Frame({ img, locale, eager = false, sizes }: { img: Img; locale: Locale; eager?: boolean; sizes?: string }) {
  return (
    <div
      className={`frame${img.paper ? " paper" : ""}${img.fill ? " fill" : ""}`}
      style={img.fill ? { aspectRatio: `${img.width} / ${img.height}` } : undefined}
    >
      <img
        src={img.src}
        alt={img.alt[locale]}
        width={img.width}
        height={img.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
      />
    </div>
  );
}

/** Natural-ratio figure with caption, used in project galleries. */
export function Figure({ img, locale, className = "" }: { img: Img; locale: Locale; className?: string }) {
  return (
    <figure className={className} data-reveal>
      <div className={`figure${img.paper ? " paper" : ""}`}>
        <img src={img.src} alt={img.alt[locale]} width={img.width} height={img.height} loading="lazy" decoding="async" />
      </div>
      {img.caption && <figcaption>{img.caption[locale]}</figcaption>}
    </figure>
  );
}
