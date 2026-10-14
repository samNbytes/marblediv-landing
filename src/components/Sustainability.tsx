import { Leaf, Flame, Bug, Recycle } from "lucide-react";

const practices = [
  {
    icon: Leaf,
    title: "Canopy Management",
    body:
      "By end of Year 3 the palm canopy closes (>60% shading) and intercropping ceases. Alleyways convert to leguminous cover crop — Mucuna pruens / Pueraria phaseoloides — fixing nitrogen and suppressing weed infestation.",
  },
  {
    icon: Flame,
    title: "Fire Belt Perimeter",
    body:
      "A 10-metre weed-free buffer zone is maintained around the entire 20-hectare boundary to protect the estate during the December–February dry season.",
  },
  {
    icon: Bug,
    title: "Rodent & Pest Protection",
    body:
      "Wire-netting collars (0.4m tall) are secured around every Tenera seedling at planting to prevent grasscutter (Thryonomys swinderianus) damage.",
  },
  {
    icon: Recycle,
    title: "Circular Feedstock",
    body:
      "The mill processes estate FFB alongside outgrower harvests — converting smallholder fruit into branded institutional-grade oil rather than low-margin raw bunches.",
  },
];

const timeline = [
  ["Month 1–2", "Land clearing, stumping & pegging"],
  ["Month 3", "Hole digging (60×60×80cm) & SSP basal dose"],
  ["Month 4", "Field planting of Tenera + collaring"],
  ["Month 5", "TME 419 cassava planted in alleyways"],
  ["Month 15–16", "Cassava harvest — first cash-flow event"],
  ["Month 36", "Final harvest & alley closure"],
  ["Month 36–42", "First commercial FFB harvest"],
];

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="border-b-2 border-ink bg-paper bg-grid"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 border-b-2 border-ink pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="tag mb-3 inline-block border-2 border-agri bg-agri px-3 py-1.5 text-paper">
              Sustainability // 03
            </span>
            <h2 className="headline text-4xl md:text-6xl">
              Agronomic Stewardship
              <br />
              &amp; Risk Control
            </h2>
          </div>
          <p className="max-w-md font-mono text-sm leading-relaxed text-ink-soft">
            Estate management follows NIFOR agronomic standards — protecting the
            ₦50M asset base through the full 20-year production cycle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Practices */}
          <div className="grid gap-6 sm:grid-cols-2">
            {practices.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="border-2 border-ink bg-paper p-6 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm"
                >
                  <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-agri text-paper">
                    <Icon size={18} />
                  </span>
                  <h3 className="headline mt-4 text-2xl">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Planting schedule */}
          <aside className="border-2 border-ink bg-ink text-paper shadow-brutal-lg">
            <div className="border-b-2 border-paper/30 px-5 py-3">
              <span className="tag text-amber-bright">
                Planting Schedule // Years 1–4
              </span>
            </div>
            <ol className="divide-y-2 divide-paper/15">
              {timeline.map(([month, event], i) => (
                <li
                  key={month}
                  className="flex items-baseline gap-4 px-5 py-3.5"
                >
                  <span
                    className={`tag shrink-0 ${
                      i === timeline.length - 1
                        ? "text-amber-bright"
                        : "text-paper/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-28 shrink-0 font-mono text-xs font-bold">
                    {month}
                  </span>
                  <span className="font-mono text-xs leading-relaxed text-paper/70">
                    {event}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
