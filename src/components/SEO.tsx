import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    canonical?: string;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://zeroonedotsai.consulting";

const SEO = ({
    title,
    description,
    keywords = "AI consulting India, business growth, AI automation, margin recovery, zeroone dots, outcome engine",
    image = "/og-image.png",
    url,
    canonical,
    jsonLd,
}: SEOProps) => {
    const siteTitle = "ZeroOne DOTS";
    const fullTitle = `${title} | ${siteTitle}`;
    const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
    const canonicalUrl = canonical || url;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* JSON-LD Structured Data */}
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
