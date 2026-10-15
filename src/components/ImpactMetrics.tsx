import { useEffect, useRef, useState } from "react";
import { photos } from "../lib/site";
import { PalmBunch, FieldRows } from "./PalmMotifs";

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
    <section
      id="impact"
      className="relative border-b-2 border-ink bg-paper-warm bg-grid"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-12 border-b-2 border-ink pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="tag mb-3 inline-block border-2 border-ink bg-paper px-3 py-1.5">
                Impact // 02
              </span>
              <h2 className="headline text-4xl md:text-6xl">
                Socio-Economic
                <br />
                Impact
              </h2>
            </div>
            <p className="serif max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Direct employment, technology deployment, outgrower empowerment
              and short-cycle cash flow — measurable outcomes for investors and
              the host communities of the Akamkpa corridor.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Metric blocks */}
          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>

          {/* Field report photo column */}
          <div className="flex flex-col gap-6">
            <figure className="photo-frame relative rotate-1 bg-paper p-2">
              <img
                src={photos.worker}
                alt="Field operations among the palm rows on the Akamkpa corridor"
                className="photo-duotone block w-full"
                loading="lazy"
              />
              <figcaption className="photo-caption mt-2 flex justify-between px-1">
                <span>Fig. 05 — Field report</span>
                <span>18 direct jobs</span>
              </figcaption>
            </figure>
            <div className="relative flex flex-1 flex-col justify-end border-2 border-ink bg-agri p-6 text-paper shadow-brutal">
              <PalmBunch className="absolute -right-4 -top-10 h-44 w-32 text-paper/15" />
              <span className="tag text-amber-bright">Community Effect</span>
              <p className="serif mt-3 text-sm leading-relaxed text-paper/85">
                Marblediv's mill and RayOils platform serve neighbouring
                smallholders in Akamkpa and Akpabuyo — guaranteed off-take at
                fair market prices for every bunch harvested.
              </p>
              <FieldRows className="mt-5 h-8 w-full text-paper/25" />
            </div>
          </div>
        </div>

        {/* Financial viability strip */}
        <div className="mt-10 grid border-2 border-ink bg-ink text-paper shadow-brutal sm:grid-cols-3">
          {[
            ["₦35,167,900", "3-Year Cumulative Net Profit"],
            ["28.4%", "Internal Rate of Return (IRR)"],
            ["2.8 Years", "Payback Period"],
          ].map(([v, l], i) => (
            <div
              key={l}
              className={`p-6 ${i > 0 ? "border-t-2 border-paper/20 sm:border-t-0 sm:border-l-2" : ""}`}
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
