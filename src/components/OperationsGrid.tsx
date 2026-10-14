import { Sprout, Factory, Truck } from "lucide-react";

const operations = [
  {
    id: "A",
    title: "20-Hectare Tenera Estate",
    icon: Sprout,
    accent: "agri" as const,
    summary:
      "A primary cultivation block of high-yield NIFOR Tenera hybrid palms established on 20 hectares of the Akamkpa / Odukpani corridor.",
    specs: [
      ["Total Stands", "2,860 palms"],
      ["Layout", "Equilateral triangular matrix"],
      ["Spacing", "9m × 9m × 9m"],
      ["Density", "143 stands / hectare"],
      ["Buffer", "+5% nursery replacement (3,003 seedlings)"],
      ["Orientation", "North–South row alignment"],
    ],
  },
  {
    id: "B",
    title: "Semi-Automated Milling",
    icon: Factory,
    accent: "amber" as const,
    summary:
      "An on-site hydraulic extraction plant processing Fresh Fruit Bunches (FFB) from the Marblediv estate and accredited outgrower smallholders.",
    specs: [
      ["Capacity", "1.5 tons / hour"],
      ["Process", "Hydraulic extraction & clarification"],
      ["Feedstock", "Estate FFB + outgrower FFB"],
      ["Extraction", "CPO @ 21% mesocarp ratio"],
      ["Yield Basis", "1 MT CPO ≈ 1,087 L (43.5 × 25L kegs)"],
      ["Closure", "Intercropping ceases at canopy close (Yr 3)"],
    ],
  },
  {
    id: "C",
    title: "RayOils Digital Supply Chain",
    icon: Truck,
    accent: "ink" as const,
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
    border: "hover:bg-agri/[0.04]",
    id: "text-agri",
  },
  amber: {
    badge: "bg-amber text-ink",
    border: "hover:bg-amber/[0.06]",
    id: "text-amber",
  },
  ink: {
    badge: "bg-ink text-paper",
    border: "hover:bg-ink/[0.04]",
    id: "text-ink",
  },
};

export function OperationsGrid() {
  return (
    <section
      id="operations"
      className="border-b-2 border-ink bg-paper-dim bg-grid"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 border-b-2 border-ink pb-6 md:flex-row md:items-end md:justify-between">
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
          <p className="max-w-md font-mono text-sm leading-relaxed text-ink-soft">
            Vertical integration from soil preparation to digital distribution —
            eliminating third-party mill markups and securing institutional
            off-take.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {operations.map((op) => {
            const Icon = op.icon;
            const accent = accentClasses[op.accent];
            return (
              <article
                key={op.id}
                className={`flex flex-col border-2 border-ink bg-paper shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm ${accent.border}`}
              >
                <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4">
                  <span
                    className={`grid h-10 w-10 place-items-center ${accent.badge}`}
                  >
                    <Icon size={20} />
                  </span>
                  <span
                    className={`headline text-3xl ${accent.id}`}
                    aria-hidden
                  >
                    {op.id}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="headline text-2xl md:text-3xl">{op.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
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
                    Marblediv · {op.id === "C" ? "Distribution Arm" : op.id === "B" ? "Processing Unit" : "Upstream Unit"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
