import { Sprout, Factory, Truck } from "lucide-react";
import { photos } from "../lib/site";
import { TriangleMatrix, FieldRows } from "./PalmMotifs";

const operations = [
  {
    id: "A",
    title: "20-Hectare Tenera Estate",
    icon: Sprout,
    accent: "agri" as const,
    photo: photos.plantation,
    photoCaption: "Fig. 02 — Estate rows, triangular matrix",
    summary:
      "A capital-funded cultivation block of high-yield NIFOR Tenera hybrid palms on 20 hectares of the Akamkpa / Odukpani corridor — added to 5 hectares already under cultivation for a 25-hectare total estate.",
    specs: [
      ["Total Stands", "2,860 palms"],
      ["Layout", "Equilateral triangular matrix"],
      ["Spacing", "9m × 9m × 9m"],
      ["Density", "143 stands / hectare"],
      ["Existing Block", "5 Ha (~715 stands)"],
      ["Total Estate", "25 Ha"],
      ["Buffer", "+5% nursery (3,003 seedlings)"],
      ["Orientation", "North–South alignment"],
    ],
  },
  {
    id: "B",
    title: "Semi-Automated Milling",
    icon: Factory,
    accent: "amber" as const,
    photo: photos.mill,
    photoCaption: "Fig. 03 — Hydraulic extraction, 1.5 t/hr",
    summary:
      "An on-site hydraulic extraction plant processing Fresh Fruit Bunches (FFB) from the Marblediv estate and accredited outgrower smallholders.",
    specs: [
      ["Capacity", "1.5 tons / hour"],
      ["Process", "Hydraulic extraction & clarification"],
      ["Feedstock", "Estate FFB + outgrower FFB"],
      ["Extraction", "CPO @ 21% mesocarp ratio"],
      ["Yield Basis", "1 MT CPO ≈ 1,087 L (43.5 kegs)"],
      ["Closure", "Intercropping ends at canopy close"],
    ],
  },
  {
    id: "C",
    title: "RayOils Digital Supply Chain",
    icon: Truck,
    accent: "ink" as const,
    photo: photos.fruit,
    photoCaption: "Fig. 04 — Fresh fruit bunches, traceable to stand",
    summary:
      "A WhatsApp-automated B2B distribution engine routing verified, unadulterated palm oil from the mill to institutional kitchens.",
    specs: [
      ["Platform", "RayOils.ng"],
      ["Ordering", "Automated WhatsApp routing"],
      ["Containers", "Branded 25L / 50L industrial kegs"],
      ["Dispatch", "Driver PWA route management"],
      ["Buyers", "Hotels, schools, restaurants, bakeries"],
      ["Markets", "Calabar & Port Harcourt"],
    ],
  },
];

const accentClasses = {
  agri: {
    badge: "bg-agri text-paper",
    hover: "hover:bg-agri/[0.04]",
    id: "text-agri",
  },
  amber: {
    badge: "bg-amber text-ink",
    hover: "hover:bg-amber/[0.06]",
    id: "text-amber",
  },
  ink: {
    badge: "bg-ink text-paper",
    hover: "hover:bg-ink/[0.04]",
    id: "text-ink",
  },
};

const armLabels: Record<string, string> = {
  A: "Upstream Unit",
  B: "Processing Unit",
  C: "Distribution Arm",
};

export function OperationsGrid() {
  return (
    <section
      id="operations"
      className="relative border-b-2 border-ink bg-paper-dim bg-grid"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header — editorial masthead style */}
        <div className="mb-12 border-b-2 border-ink pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="tag mb-3 inline-block border-2 border-ink bg-paper px-3 py-1.5">
                Operations // 01
              </span>
              <h2 className="headline text-4xl md:text-6xl">
                Three Integrated
                <br />
                Business Arms
              </h2>
            </div>
            <p className="serif max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Vertical integration from soil preparation to digital distribution
              — eliminating third-party mill markups and securing institutional
              off-take for every harvest.
            </p>
          </div>
          <FieldRows className="mt-6 h-8 w-full text-ink/20" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {operations.map((op, i) => {
            const Icon = op.icon;
            const accent = accentClasses[op.accent];
            const rotate = i === 1 ? "lg:-rotate-1" : i === 2 ? "lg:rotate-1" : "";
            return (
              <article
                key={op.id}
                className={`flex flex-col border-2 border-ink bg-paper shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm ${accent.hover} ${rotate}`}
              >
                {/* photo header */}
                <figure className="relative border-b-2 border-ink">
                  <img
                    src={op.photo}
                    alt={op.title}
                    className="photo-duotone block h-44 w-full object-cover md:h-52"
                    loading="lazy"
                  />
                  <span
                    className={`absolute left-3 top-3 grid h-10 w-10 place-items-center border-2 border-ink ${accent.badge}`}
                  >
                    <Icon size={20} />
                  </span>
                  <figcaption className="photo-caption absolute bottom-0 left-0 right-0 bg-ink/85 px-3 py-1.5 text-paper/80">
                    {op.photoCaption}
                  </figcaption>
                </figure>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="headline text-2xl md:text-3xl">{op.title}</h3>
                    <span className={`headline text-3xl ${accent.id}`} aria-hidden>
                      {op.id}
                    </span>
                  </div>
                  <p className="serif mt-3 text-sm leading-relaxed text-ink-soft">
                    {op.summary}
                  </p>

                  <dl className="mt-5 flex-1 divide-y-2 divide-ink/15 border-t-2 border-ink pt-1">
                    {op.specs.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-baseline justify-between gap-3 py-2.5"
                      >
                        <dt className="tag shrink-0 text-ink-soft">{k}</dt>
                        <dd className="text-right font-mono text-xs font-bold">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t-2 border-ink bg-ink px-5 py-2.5">
                  <span className="tag text-paper/80">
                    Marblediv · {armLabels[op.id]}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* geometry footnote — diagram inline with editorial note */}
        <div className="mt-10 flex flex-col items-start gap-6 border-2 border-ink bg-paper p-6 shadow-brutal sm:flex-row sm:items-center">
          <TriangleMatrix className="h-20 w-24 shrink-0 text-agri" />
          <div>
            <span className="tag text-agri">Planting Geometry</span>
            <p className="serif mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              An equilateral triangular matrix at 9m × 9m × 9m provides maximum
              canopy exposure to sunlight while maximizing soil-surface
              utilization — 143 stands per hectare, North–South aligned for
              uniform solar exposure across all canopy faces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
