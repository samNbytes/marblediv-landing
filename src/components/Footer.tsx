import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { site } from "../lib/site";
import { PalmBunch, PalmFrond } from "./PalmMotifs";

const interests = [
  "Outgrower Program",
  "B2B Supply Platform",
  "Institutional Procurement",
  "Investment / Partnership Inquiry",
];

export function Footer() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    interest: interests[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired yet — placeholder submit handler.
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="relative bg-paper-warm text-ink">
      {/* ghost frond bleeding off the top-right */}
      <PalmFrond
        className="pointer-events-none absolute -right-12 -top-20 hidden h-[26rem] w-auto -rotate-12 text-ink/[0.04] xl:block"
      />

      {/* Contact form block */}
      <div className="relative border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Contact info */}
            <div>
              <span className="tag mb-3 inline-block border-2 border-ink bg-paper px-3 py-1.5">
                Contact // 05
              </span>
              <h2 className="headline text-4xl md:text-6xl">
                Partner With
                <br />
                The Estate
              </h2>
              <p className="serif mt-5 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                Institutional buyers, outgrower smallholders and prospective
                investors — transmit your inquiry below. The RayOils.ng
                dispatch desk responds within one business day.
              </p>

              <dl className="mt-9 space-y-4">
                <div className="flex items-start gap-4 border-2 border-ink bg-paper p-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-amber" />
                  <div>
                    <dt className="tag text-ink-soft">Estate Site</dt>
                    <dd className="mt-1 font-mono text-sm">
                      {site.location.corridor}
                      <br />
                      {site.location.state}, {site.location.country}
                      <br />
                      <span className="text-ink-soft">{site.location.coordinates}</span>
                    </dd>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-3 border-2 border-ink bg-paper p-4 transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Mail size={16} className="shrink-0 text-amber" />
                    <span className="font-mono text-xs break-all">
                      {site.contact.email}
                    </span>
                  </a>
                  <a
                    href={site.contact.phoneHref}
                    className="flex items-center gap-3 border-2 border-ink bg-paper p-4 transition-colors hover:bg-ink hover:text-paper"
                  >
                    <Phone size={16} className="shrink-0 text-amber" />
                    <span className="font-mono text-xs">
                      {site.contact.phone}
                    </span>
                  </a>
                </div>
              </dl>

              {/* mill photo, small, tucked beside contact details */}
              <figure className="photo-frame relative mt-6 hidden rotate-1 bg-paper p-2 lg:block">
                <img
                  src="/img/mill.png"
                  alt="The semi-automated milling plant — 1.5 tons per hour hydraulic extraction"
                  className="photo-duotone block w-full"
                  loading="lazy"
                />
                <figcaption className="photo-caption mt-2 px-1">
                  Fig. 07 — The mill, 1.5 t/hr
                </figcaption>
              </figure>
            </div>

            {/* Form */}
            <div className="relative border-2 border-ink bg-ink text-paper shadow-brutal-lg">
              <PalmBunch className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-28 text-paper/10" />
              <div className="flex items-center justify-between border-b-2 border-paper/25 px-5 py-3">
                <span className="tag text-paper/70">Inquiry Terminal</span>
                <span className="tag text-agri-bright">● Channel Open</span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 p-10 text-center">
                  <span className="headline text-6xl text-agri-bright">
                    Received
                  </span>
                  <p className="max-w-xs font-mono text-sm leading-relaxed text-paper/70">
                    Your inquiry has been logged. The RayOils.ng dispatch desk
                    will respond to{" "}
                    <span className="text-amber-bright">{form.email}</span>{" "}
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="tag mt-2 border-2 border-amber bg-amber px-5 py-3 text-ink transition-transform hover:-translate-y-0.5"
                  >
                    [ Send Another ]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-5 md:p-7">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                    />
                    <Field
                      label="Organization"
                      value={form.organization}
                      onChange={(v) => setForm({ ...form, organization: v })}
                    />
                  </div>
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />

                  <div>
                    <label className="tag mb-2 block text-paper/50">
                      Interest
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) =>
                        setForm({ ...form, interest: e.target.value })
                      }
                      className="w-full rounded-none border-2 border-paper/25 bg-ink px-4 py-3 font-mono text-sm text-paper focus:border-amber focus:outline-none"
                    >
                      {interests.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="tag mb-2 block text-paper/50">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full resize-none rounded-none border-2 border-paper/25 bg-ink px-4 py-3 font-mono text-sm text-paper focus:border-amber focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="tag flex w-full items-center justify-center gap-2 border-2 border-amber bg-amber px-6 py-4 text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    [ Transmit Inquiry ]
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Corporate bar */}
      <div className="relative mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col gap-6 border-t-2 border-ink pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center bg-ink font-display text-xl text-paper"
            >
              M
            </span>
            <div>
              <p className="headline text-xl">{site.company}</p>
              <p className="tag text-ink-soft">{site.tagline}</p>
            </div>
          </div>

          <div className="grid gap-1 font-mono text-xs text-ink-soft sm:grid-cols-2 sm:gap-x-10">
            <p>Corporate Registration: {site.rcNumber}</p>
            <p>Site Coordinates: {site.location.coordinates}</p>
            <p>{site.location.corridor}</p>
            <p>
              {site.location.state}, {site.location.country}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t-2 border-ink/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-ink-soft/80">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
            In technical partnership with{" "}
            <a
              href={site.partner.url}
              target="_blank"
              rel="noreferrer"
              className="text-clay underline underline-offset-4 hover:text-amber"
            >
              {site.partner.name}
            </a>
            .
          </p>
          <p className="tag text-ink-soft/80">
            {site.capital.status} · {site.capital.amount} {site.capital.round}
          </p>
        </div>
      </div>

      <div className="hazard-stripe h-3" aria-hidden />
    </footer>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="tag mb-2 block text-paper/50">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-none border-2 border-paper/25 bg-ink px-4 py-3 font-mono text-sm text-paper focus:border-amber focus:outline-none"
      />
    </div>
  );
}
