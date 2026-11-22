import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/site";

/** Visible marker for information that still has to be provided. Search the code for "PLACEHOLDER". */
export function Placeholder({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <span className="placeholder" data-placeholder="true">
      <b>{ui.labels.placeholder[locale]}</b>
      <span>{children}</span>
    </span>
  );
}
