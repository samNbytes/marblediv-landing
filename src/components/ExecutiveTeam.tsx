import { PalmFrond } from "./PalmMotifs";

const team = [
  {
    initials: "EOR",
    name: "Epal Ofem Raymond",
    role: "Managing Director",
    roleNote: "Principal Applicant · Marblediv Enterprises",
    bio: "Directs the Marblediv integrated agro-industrial estate — land acquisition, estate management, intercropping operations and the ₦50M NDDC facility deployment across the Akamkpa corridor.",
    credentials: [
      "Managing Director, Marblediv Enterprises",
      "Principal Applicant, NDDC Agricultural Enterprise Facility",
    ],
    accent: "agri" as const,
  },
  {
    initials: "DR",
    name: "Divine Raymond",
    role: "Technical Director",
    roleNote: "Lead Systems Architect & Founder, RayOils.ng",
    bio: "Architects the RayOils.ng digital distribution engine — WhatsApp-automated B2B order routing, branded keg tracking and driver PWA dispatch connecting the mill to institutional buyers.",
    credentials: [
      "Lead Systems Architect, RayOils.ng",
      "Technical Director, Marblediv Enterprises",
    ],
    accent: "amber" as const,
  },
];

const accentMap = {
  agri: { block: "bg-agri text-paper", quote: "text-agri" },
  amber: { block: "bg-amber text-ink", quote: "text-amber" },
};

export function ExecutiveTeam() {
  return (
    <section id="leadership" className="relative border-b-2 border-ink bg-paper-dim">
      {/* ghost frond left */}
      <PalmFrond
        className="pointer-events-none absolute -left-20 top-1/3 hidden h-[24rem] w-auto rotate-6 text-ink/[0.04] xl:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        {/* Section header */}
        <div className="mb-12 border-b-2 border-ink pb-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="tag mb-3 inline-block border-2 border-ink bg-paper px-3 py-1.5">
                Leadership // 04
              </span>
              <h2 className="headline text-4xl md:text-6xl">
                Executive
                <br />
                Leadership
              </h2>
            </div>
            <p className="serif max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Agricultural operations paired with proprietary distribution
              technology — one vertically integrated command structure.
            </p>
          </div>
        </div>

        {/* Profiles */}
        <div className="grid gap-8 md:grid-cols-2">
          {team.map((member) => {
            const accent = accentMap[member.accent];
            return (
              <article
                key={member.name}
                className="flex flex-col border-2 border-ink bg-paper shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm sm:flex-row"
              >
                {/* Monogram block */}
                <div
                  className={`flex shrink-0 items-center justify-center border-b-2 border-ink sm:w-40 sm:border-b-0 sm:border-r-2 ${accent.block}`}
                >
                  <span className="headline py-8 text-5xl sm:py-0">
                    {member.initials}
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="headline text-3xl">{member.name}</h3>
                  <p className={`tag mt-2 ${accent.quote}`}>{member.role}</p>
                  <p className="mt-1 font-mono text-xs text-ink-soft">
                    {member.roleNote}
                  </p>
                  <p className="serif mt-4 text-sm leading-relaxed text-ink-soft">
                    {member.bio}
                  </p>
                  <ul className="mt-5 space-y-2 border-t-2 border-ink pt-4">
                    {member.credentials.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 font-mono text-xs"
                      >
                        <span aria-hidden className="text-amber">
                          ▸
                        </span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
