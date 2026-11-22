import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yassmine El Arbi",
  description: "AI engineering student at SUP'COM · Élève ingénieure en IA à SUP'COM",
  robots: { index: false },
};

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0d0b24", color: "#ffffff", fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
