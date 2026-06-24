import { Helmet } from "react-helmet-async";

const BASE_URL = "https://rebeltalentsystems.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Safe addition — per-page OG image override (filename in /public, e.g. "og-services.png") */
  ogImage?: string;
  schemas?: object[];
  breadcrumbs?: BreadcrumbItem[];
}

function buildBreadcrumbSchema(crumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": c.name,
      "item": c.item,
    })),
  };
}

export default function PageSEO({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage,
  schemas = [],
  breadcrumbs,
}: PageSEOProps) {
  const canonical = `${BASE_URL}${path}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDesc = ogDescription || description;
  // Safe addition — use per-page OG image if provided, otherwise fall back to default
  const resolvedOgImage = ogImage ? `${BASE_URL}/${ogImage}` : OG_IMAGE;

  const allSchemas = [
    ...schemas,
    ...(breadcrumbs ? [buildBreadcrumbSchema(breadcrumbs)] : []),
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Rebel Talent Systems" />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDesc} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDesc} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
