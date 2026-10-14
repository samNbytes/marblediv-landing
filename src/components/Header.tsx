import { useState } from "react";
import { Menu, X, Radio } from "lucide-react";
import { site, navLinks } from "../lib/site";
import { cn } from "../lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b-2 border-ink">
      {/* Utility ticker bar */}
      <div className="bg-ink text-paper overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap py-1">
          {[0, 1].map((i) => (
            <div key={i} className="flex shrink-0 items-center">
              {[
                `${site.company.toUpperCase()} — ${site.tagline.toUpperCase()}`,
                `NDDC FACILITY APPLICANT — ${site.grant.amount}`,
                `${site.location.corridor.toUpperCase()} — ${site.location.coordinates}`,
                "TENERA HYBRID · TME 419 INTERCROP · SEMI-AUTOMATED MILLING",
              ].map((item) => (
                <span
                  key={item}
                  className="tag px-6 text-paper/80 flex items-center gap-6"
                >
                  {item}
                  <span aria-hidden className="text-amber-bright">
                    //
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-stretch justify-between">
        {/* Logo block */}
        <a
          href="#top"
          className="flex items-center gap-3 border-r-2 border-ink px-4 py-3 md:px-6"
        >
          <span
            aria-hidden
            className="grid h-10 w-10 place-items-center bg-ink font-display text-2xl leading-none text-paper"
          >
            M
          </span>
          <span className="flex flex-col">
            <span className="headline text-xl leading-none md:text-2xl">
              Marblediv
            </span>
            <span className="tag text-[0.6rem] text-ink-soft">
              Enterprises · Est. {site.founded}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-stretch lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tag flex items-center border-l-2 border-ink px-5 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.partner.url}
            target="_blank"
            rel="noreferrer"
            className="tag flex items-center border-l-2 border-ink bg-agri px-5 text-paper transition-colors hover:bg-amber hover:text-ink"
          >
            {site.partner.name} ↗
          </a>
        </nav>

        {/* Status + mobile toggle */}
        <div className="flex items-stretch">
          <div className="hidden items-center gap-2 border-l-2 border-ink px-5 sm:flex">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-agri-bright opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-agri" />
            </span>
            <span className="tag text-agri">Estate Online</span>
          </div>
          <span className="hidden items-center border-l-2 border-ink bg-amber px-5 tag text-ink md:flex">
            {site.grant.applicant}
          </span>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex items-center border-l-2 border-ink px-4 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "grid overflow-hidden border-t-2 border-ink transition-all duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <nav className="min-h-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="tag block border-b-2 border-ink px-5 py-4 text-ink hover:bg-paper-dim"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.partner.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="tag flex items-center gap-2 bg-agri px-5 py-4 text-paper"
          >
            <Radio size={14} /> {site.partner.name} ↗
          </a>
          <div className="tag flex items-center justify-between gap-2 bg-amber px-5 py-3 text-ink">
            <span>● {site.grant.applicant}</span>
            <span className="text-ink/70">{site.location.coordinates}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
