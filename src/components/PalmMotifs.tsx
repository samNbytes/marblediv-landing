/**
 * Hand-drawn palm motifs — the organic counterpoint to the brutalist grid.
 * All strokes use currentColor so they inherit section context.
 */

/** Single palm frond with a slightly hand-drawn wobble. */
export function PalmFrond({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* central stem — slightly curved, like a real rachis */}
      <path
        d="M100 258 C 96 200, 98 140, 104 78 C 107 48, 110 24, 112 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* leaflets — alternating, hand-drawn angle variation */}
      {[
        [0, 26, -58, -34],
        [8, 52, -64, -46],
        [16, 80, -68, -58],
        [24, 110, -70, -70],
        [34, 142, -66, -76],
        [46, 172, -60, -80],
        [60, 198, -50, -78],
      ].map(([y, y2, x1, x2], i) => (
        <path
          key={`l${i}`}
          d={`M100 ${y} C ${x1 * 0.6 + 100} ${y2 * 0.55}, ${x1 + 100} ${y2 * 0.8}, ${x2 + 100} ${y2}`}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
      {[
        [4, 30, 56, 30],
        [12, 58, 62, 44],
        [20, 86, 66, 56],
        [28, 116, 68, 68],
        [38, 148, 64, 74],
        [50, 178, 58, 78],
        [64, 204, 48, 76],
      ].map(([y, y2, x1, x2], i) => (
        <path
          key={`r${i}`}
          d={`M100 ${y} C ${x1 * 0.6 + 100} ${y2 * 0.55}, ${x1 + 100} ${y2 * 0.8}, ${x2 + 100} ${y2}`}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/** Palm fruit bunch — the business, drawn. */
export function PalmBunch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* stalk */}
      <path
        d="M80 12 L 80 60"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* bunch body — cluster of fruitlets */}
      <ellipse cx="80" cy="120" rx="46" ry="78" stroke="currentColor" strokeWidth="2.5" />
      {[
        [80, 58], [62, 70], [98, 70], [56, 88], [104, 88], [50, 106], [110, 106],
        [52, 126], [108, 126], [58, 146], [102, 146], [64, 164], [96, 164],
        [70, 182], [90, 182], [80, 196],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="9" fill="currentColor" opacity="0.85" />
      ))}
      {/* a couple of bracts */}
      <path d="M66 44 L 52 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M94 44 L 108 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Triangular 9m planting matrix — the estate geometry as ornament. */
export function TriangleMatrix({ className = "" }: { className?: string }) {
  const pts = [
    [20, 20], [60, 20], [100, 20],
    [40, 50], [80, 50], [120, 50],
    [20, 80], [60, 80], [100, 80],
    [40, 110], [80, 110],
  ];
  return (
    <svg
      viewBox="0 0 140 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {pts.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="currentColor" />
      ))}
      <path d="M20 20 L40 50 L20 80 Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M60 20 L80 50 L60 80 Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M100 20 L120 50 L100 80 Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
    </svg>
  );
}

/** Wavy field-row divider — organic section break. */
export function FieldRows({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {[14, 26, 38, 50].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} C 200 ${y - 8}, 400 ${y + 8}, 600 ${y - 4} S 1000 ${y + 10}, 1200 ${y - 6}`}
          stroke="currentColor"
          strokeWidth="1.6"
          opacity={0.35 + i * 0.15}
        />
      ))}
    </svg>
  );
}

/** Small sprout mark for list bullets. */
export function Sprout({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path d="M12 22 V 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 12 C 8 12, 5 9, 5 5 C 9 5, 12 8, 12 12 Z" fill="currentColor" />
      <path d="M12 14 C 16 14, 19 11, 19 7 C 15 7, 12 10, 12 14 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
