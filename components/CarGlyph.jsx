/**
 * Minimal brand car silhouette (navy body, teal motion lines).
 * Used for ambient "journey" animations. Decorative only.
 */
export default function CarGlyph({ width = 56 }) {
  return (
    <svg
      width={width}
      viewBox="0 0 96 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="var(--accent)" strokeWidth="4" strokeLinecap="round">
        <line x1="2" y1="18" x2="14" y2="18" />
        <line x1="0" y1="28" x2="10" y2="28" />
      </g>
      <path
        d="M22 32v-8c0-3 2-5 5.2-5.3l5.6-7c1.5-1.8 3.3-2.7 5.6-2.7h17c2.5 0 4.6 1.1 6.2 3.3L66 18h7c3.8 0 6.3 2.4 6.3 6.3V32c0 1.8-1.4 3.2-3.2 3.2H25.2A3.2 3.2 0 0 1 22 32Z"
        fill="var(--brand)"
      />
      <path d="M37 18l4.6-5.7c.7-.9 1.5-1.3 2.6-1.3h6.3V18H37Z" fill="#dff0f7" />
      <path d="M53.5 11h6.6c1.2 0 2.1.5 2.8 1.5L66.5 18h-13v-7Z" fill="#dff0f7" />
      <circle cx="35" cy="35" r="7" fill="#0c1c30" />
      <circle cx="35" cy="35" r="2.6" fill="#dff0f7" />
      <circle cx="66" cy="35" r="7" fill="#0c1c30" />
      <circle cx="66" cy="35" r="2.6" fill="#dff0f7" />
      <rect x="76.5" y="24" width="5" height="4" rx="2" fill="#dff0f7" />
    </svg>
  );
}
