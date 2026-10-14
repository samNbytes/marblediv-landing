/**
 * Central corporate metadata for Marblediv Enterprises.
 * Swap values here — every component reads from this file.
 *
 * NOTE: `rcNumber` is a fill-in placeholder — replace with the real
 * CAC/RC registration number before publishing marblediv.com.
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
  grant: {
    program: "NDDC Agricultural Enterprise Development Facility",
    amount: "₦50,000,000",
    applicant: "Grant Applicant",
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
