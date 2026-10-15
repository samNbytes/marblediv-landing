import { ArrowRight } from "lucide-react";
import { site, photos } from "../lib/site";
import { PalmFrond, TriangleMatrix } from "./PalmMotifs";

const heroStats = [
  { value: "25 HA", label: "Total Estate" },
  { value: "2,860", label: "New Palm Stands" },
  { value: "1.5 T/HR", label: "Mill Capacity" },
  { value: "40+", label: "Outgrowers" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-ink bg-paper bg-grid"
    >
      {/* oversized ghost frond, bottom-left, bleeding off-canvas */}
      <PalmFrond
        className="pointer-events-none absolute -bottom-24 -left-16 hidden h-[30rem] w-auto rotate-12 text-ink/[0.045] lg:block"
      />
      <TriangleMatrix
        className="pointer-events-none absolute right-8 top-10 hidden h-40 w-auto text-ink/[0.07] xl:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16">
        {/* kicker row */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="tag border-2 border-ink bg-paper px-3 py-1.5">
            {site.capital.status}
          </span>
          <span className="tag border-2 border-agri bg-agri px-3 py-1.5 text-paper">
            {site.capital.amount} {site.capital.round}
          </span>
          <span className="tag text-ink-soft hidden sm:inline">
            No. 01 / The Estate
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          {/* headline column */}
          <div>
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

            {/* editorial intro: drop cap + serif — reads like a report, not a template */}
            <div className="mt-8 max-w-xl border-l-4 border-amber pl-5">
              <p className="serif text-base leading-relaxed text-ink-soft md:text-lg drop-cap">
                Marblediv Enterprises operates a vertically integrated
                agro-industrial estate in the Akamkpa corridor — connecting
                sustainable Tenera cultivation directly to institutional buyers
                through the proprietary RayOils.ng digital distribution engine.
                Twenty hectares of soil, a semi-automated mill, and a
                WhatsApp-routed supply chain under one roof.
              </p>
            </div>

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

          {/* photo column — pinned print + spec sheet */}
          <div className="flex flex-col gap-5">
            <figure className="photo-frame relative -rotate-1 bg-paper p-2">
              <img
                src={photos.plantation}
                alt="Aerial view of the Marblediv Tenera estate — triangular palm rows on the Akamkpa corridor"
                className="photo-duotone block w-full"
                loading="eager"
              />
              <figcaption className="photo-caption mt-2 flex justify-between px-1">
                <span>Fig. 01 — Estate aerial</span>
                <span>Akamkpa corridor</span>
              </figcaption>
            </figure>

            {/* spec sheet */}
            <aside className="border-2 border-ink bg-paper shadow-brutal">
              <div className="flex items-center justify-between border-b-2 border-ink bg-ink px-4 py-2.5">
                <span className="tag text-paper">Estate Spec Sheet</span>
                <TriangleMatrix className="h-5 w-6 text-paper/50" />
              </div>
              <dl className="divide-y-2 divide-ink">
                {[
                  ["Location", site.location.corridor],
                  ["Coordinates", site.location.coordinates],
                  ["Plant Variety", "NIFOR Tenera Hybrid (Dura × Pisifera)"],
                  ["Funded Block", `${site.estate.fundedHa} Ha — 2,860 stands`],
                  ["Existing Block", `${site.estate.existingHa} Ha — ~715 stands`],
                  ["Total Estate", `${site.estate.totalHa} Ha`],
                  ["Spacing", "Triangular 9m × 9m × 9m"],
                  ["Intercrop", "TME 419 Cassava (Years 1–3)"],
                  ["Extraction", "CPO @ 21% mesocarp ratio"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 px-4 py-2.5"
                  >
                    <dt className="tag shrink-0 text-ink-soft">{k}</dt>
                    <dd className="text-right font-mono text-xs font-bold md:text-sm">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>

        {/* stat strip */}
        <div className="mt-12 grid grid-cols-2 border-2 border-ink bg-paper shadow-brutal md:mt-16 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-5 md:p-6 ${
                i > 0 ? "border-t-2 border-ink lg:border-t-0" : ""
              } ${i > 0 && i % 2 === 1 ? "border-l-2 border-ink lg:border-l-2" : ""} ${
                i > 0 && i % 2 === 0 ? "lg:border-l-2 lg:border-ink" : ""
              }`}
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
