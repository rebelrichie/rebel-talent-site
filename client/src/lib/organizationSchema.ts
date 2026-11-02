export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rebeltalentsystems.com/#organization",
  name: "Rebel Talent Systems",
  url: "https://rebeltalentsystems.com",
  logo: "https://rebeltalentsystems.com/logo.png",
  description:
    "Rebel Talent Systems recruits for startups and defense contractors. Contingent search, an embedded desk, and cleared searches.",
  founder: { "@type": "Person", name: "Richie Lampani" },
  telephone: "+1-202-524-0255",
  email: "richie@rebeltalentsystems.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roswell",
    addressRegion: "GA",
    addressCountry: "US",
  },
  sameAs: ["https://linkedin.com/in/richielampani"],
};

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
