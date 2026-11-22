type P = { className?: string };

export function Star({ className = "star" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 1.5l2.6 6.9 7.4.4-5.8 4.6 2 7.1L12 16.4 5.8 20.5l2-7.1L2 8.8l7.4-.4z" />
    </svg>
  );
}

export function Arrow({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowLeft({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 8H3M7 4L3 8l4 4" />
    </svg>
  );
}

export function ArrowUpRight({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function Download({ className }: P) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 2v9M4 7l4 4 4-4M2.5 14h11" />
    </svg>
  );
}
