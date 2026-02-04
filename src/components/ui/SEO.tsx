import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  schema?: object | object[]; // Add schema support
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO = ({
  title,
  description = "Silver Wolf Technologies provides expert web development, mobile apps, GST registration, tax audits, and creative design services for global business growth.",
  keywords = "GST registration, tax audits, mobile app development, web development, React.js, Node.js, graphic design, video editing, Silver Wolf Technologies, Devakar Prajapati, Rushabh Pandey, Sharad Yadav, Swapnali More, Abhishek Kumar",
  canonical,
  image = "/lovable-uploads/3e894869-f929-465a-a9e3-b4d19a94be22.png",
  type = "website",
  schema,
  author = "Silver Wolf Technologies",
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const siteTitle = "Silver Wolf Technologies";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const url = "https://silverwolftechnologies.com" + (canonical || "");
  const fullImageUrl = image.startsWith('http') ? image : `https://silverwolftechnologies.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      {canonical && <link rel="canonical" href={url} />}

      {/* Mobile & Theme Meta Tags */}
      <meta name="theme-color" content="#D4FF33" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@silverwolftech" />

      {/* Additional SEO Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
