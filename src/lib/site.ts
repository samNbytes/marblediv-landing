/**
 * Central corporate metadata for Marblediv Enterprises.
 * Swap values here — every component reads from this file.
 *
 * NOTE: `rcNumber` is a fill-in placeholder — replace with the real
 * CAC/RC registration number before publishing marblediv.com.
 *
 * Framing: investor-neutral. The ₦50M is a capital round open to any
 * investor (NDDC, DFIs, private); it funds a NEW 20-hectare block on
 * top of the 5 hectares already under cultivation — 25 Ha total.
 */

export const site = {
  company: "Marblediv Enterprises",
  tagline: "Vertically Integrated Agro-Industrial Estate",
  domain: "marblediv.com",
  partner: {
    name: "RayOils.ng",
    role: "Proprietary Digital Distribution & Technology Arm",
    url: "https://rayoils.ng",
  },
  capital: {
    amount: "₦50,000,000",
    round: "Capital Round",
    status: "Now Raising",
  },
  estate: {
    /** Hectares already under cultivation today */
    existingHa: 5,
    existingStands: 715,
    /** Hectares the ₦50M capital round funds (new block) */
    fundedHa: 20,
    fundedStands: 2860,
    /** 5 existing + 20 funded */
    totalHa: 25,
    totalStands: 3575,
  },
  location: {
    corridor: "Akamkpa / Odukpani Agricultural Corridor",
    state: "Cross River State",
    country: "Nigeria",
    lat: "5.3125° N",
    lng: "8.3552° E",
    coordinates: "5.3125° N / 8.3552° E",
  },
  contact: {
    phone: "+234 (0) 707 106 1072",
    phoneHref: "tel:+2347071061072",
    email: "contact@marblediv.com",
  },
  /** Fill in the real CAC registration number. */
  rcNumber: "[ RC NUMBER ]",
  founded: "2024",
} as const;

export const navLinks = [
  { label: "Operations", href: "#operations" },
  { label: "Impact", href: "#impact" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;

export const photos = {
  plantation: "/img/plantation-aerial.png",
  fruit: "/img/fruit-bunches.png",
  mill: "/img/mill.png",
  cassava: "/img/cassava.png",
  worker: "/img/worker.png",
} as const;
