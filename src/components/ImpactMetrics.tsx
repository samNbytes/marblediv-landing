import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `target` once the element scrolls into view.
 * Respects prefers-reduced-motion by jumping straight to the target.
 */
function useCountUp(target: number, suffix: string) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (reduced) {
        setDisplay(`${target}${suffix}`);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(target * eased)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return { ref, display };
}

const metrics = [
  {
    target: 18,
    suffix: "",
    label: "Direct Farm Jobs",
    detail: "Permanent estate & mill employment",
  },
  {
    target: 8,
    suffix: "",
    label: "Tech Roles",
    detail: "Logistics, platform & dispatch positions",
  },
  {
    target: 40,
    suffix: "+",
    label: "Outgrowers Supported",
    detail: "Guaranteed off-take at fair market prices",
  },
  {
    target: 360,
    suffix: "+",
    label: "Tons Annual Intercrop",
    detail: "Cassava capacity during palm gestation",
  },
];

function MetricCard({
  target,
  suffix,
  label,
  detail,
}: (typeof metrics)[number]) {
  const { ref, display } = useCountUp(target, suffix);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col justify-between border-2 border-ink bg-paper p-6 shadow-brutal transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal-lg md:p-8"
    >
      <span
        aria-hidden
        className="headline absolute right-3 top-2 text-6xl text-ink/[0.05] transition-colors group-hover:text-amber/20"
      >
        ●
      </span>
      <p className="headline text-6xl leading-none text-ink md:text-7xl">
        {display}
      </p>
      <div className="mt-6 border-t-2 border-ink pt-4">
        <p className="tag text-agri">{label}</p>
        <p className="mt-1.5 font-mono text-xs leading-relaxed text-ink-soft">
          {detail}
        </p>
      </div>
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section id="impact" className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 border-b-2 border-paper/30 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="tag mb-3 inline-block border-2 border-amber bg-amber px-3 py-1.5 text-ink">
              Impact // 02
            </span>
            <h2 className="headline text-4xl md:text-6xl">
              NDDC Socio-Economic
              <br />
              Impact Counter
            </h2>
          </div>
          <p className="max-w-md font-mono text-sm leading-relaxed text-paper/60">
            Direct employment, technology deployment, outgrower empowerment and
            short-cycle cash flow — aligned with the Commission's rural youth
            empowerment mandate.
          </p>
        </div>

        {/* Metric blocks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Financial viability strip */}
        <div className="mt-10 grid border-2 border-paper/30 bg-ink-soft sm:grid-cols-3">
          {[
            ["₦35,167,900", "3-Year Cumulative Net Profit"],
            ["28.4%", "Internal Rate of Return (IRR)"],
            ["2.8 Years", "Payback Period"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="border-paper/20 p-6 not-last:border-b-2 sm:not-last:border-b-0 sm:[&:not(:first-child)]:border-l-2"
            >
              <p className="headline text-4xl text-amber-bright md:text-5xl">
                {v}
              </p>
              <p className="tag mt-2 text-paper/60">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
