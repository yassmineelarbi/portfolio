export function Eyebrow({ n, children }: { n?: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      {n && <span className="n">{n}</span>}
      <span>{children}</span>
    </p>
  );
}
