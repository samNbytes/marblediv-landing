import { ArrowRight, Sprout } from "lucide-react";
import { site } from "../lib/site";
import { cn } from "../lib/utils";

const heroStats = [
  { value: "20 HA", label: "Tenera Estate" },
  { value: "2,860", label: "Palm Stands" },
  { value: "1.5 T/HR", label: "Mill Capacity" },
  { value: "40+", label: "Outgrowers" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-ink bg-paper bg-grid"
    >
      {/* Oversized ghost wordmark */}
      <span
        aria-hidden
        className="headline pointer-events-none absolute -right-6 top-6 hidden select-none text-[22rem] leading-none text-ink/[0.04] xl:block"
      >
        MDV
      </span>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          {/* Headline column */}
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="tag border-2 border-ink bg-paper px-3 py-1.5">
                {site.grant.applicant}
              </span>
              <span className="tag border-2 border-agri bg-agri px-3 py-1.5 text-paper">
                {site.grant.amount} NDDC Facility
              </span>
            </div>

            <h1 className="headline text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Sustainable Palm Oil
              <br />
              Cultivation &amp;{" "}
              <span className="text-agri">Tech-Enabled</span>
              <br />
              Agro-Processing
              <br />
              <span className="text-ink-soft">in the Niger Delta.</span>
            </h1>

            <p className="mt-7 max-w-xl border-l-4 border-amber pl-4 font-sans text-base leading-relaxed text-ink-soft md:text-lg">
              Marblediv Enterprises operates a vertically integrated
              agro-industrial estate in the Akamkpa corridor — connecting
              sustainable Tenera cultivation directly to institutional buyers
              through the proprietary RayOils.ng digital distribution engine.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group flex items-center justify-between gap-4 border-2 border-ink bg-amber px-6 py-4 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <span className="tag text-lg text-ink">
                  [ Outgrower Program ]
                </span>
              </a>
              <a
                href={site.partner.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 border-2 border-ink bg-ink px-6 py-4 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <span className="tag text-lg text-paper">
                  [ B2B Supply Platform
                </span>
                <ArrowRight className="text-amber-bright transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Spec panel */}
          <aside className="border-2 border-ink bg-paper shadow-brutal-lg">
            <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2.5">
              <span className="tag text-paper">Estate Spec Sheet</span>
              <Sprout size={16} className="text-agri-bright" />
            </div>
            <dl className="divide-y-2 divide-ink">
              {[
                ["Location", site.location.corridor],
                ["Coordinates", site.location.coordinates],
                ["Plant Variety", "NIFOR Tenera Hybrid (Dura × Pisifera)"],
                ["Spacing", "Triangular 9m × 9m × 9m"],
                ["Density", "143 stands / ha"],
                ["Intercrop", "TME 419 Cassava (Years 1–3)"],
                ["Extraction", "CPO @ 21% mesocarp ratio"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 px-4 py-3"
                >
                  <dt className="tag shrink-0 text-ink-soft">{k}</dt>
                  <dd className="text-right font-mono text-sm font-bold">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 border-2 border-ink bg-paper shadow-brutal md:mt-20 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "p-5 md:p-6",
                i > 0 && "border-t-2 border-ink lg:border-t-0",
                i > 0 && i % 2 === 0 && "lg:border-l-2 lg:border-ink",
                i > 0 && i % 2 === 1 && "border-l-2 border-ink lg:border-l-2",
              )}
            >
              <p className="headline text-4xl text-agri md:text-5xl">
                {stat.value}
              </p>
              <p className="tag mt-1 text-ink-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hazard-stripe h-3" aria-hidden />
    </section>
  );
}
