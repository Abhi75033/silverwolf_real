
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import faqSchema from "@/data/faq-schema.json";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Silver Wolf Technologies",
      "url": "https://silverwolf.tech",
      "logo": "https://silverwolf.tech/logo.png", // Replace with actual logo URL
      "sameAs": [
        "https://www.linkedin.com/company/silver-wolf-technologies",
        "https://twitter.com/silverwolftech"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6394753801",
        "contactType": "customer service",
        "areaServed": "Global"
      }
    },
    faqSchema // Include FAQ schema
  ]
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Silver Wolf Technologies | Web Development & Digital Solutions Company"
        description="Silver Wolf Technologies provides web development, mobile app development, digital marketing, branding, and business services to help businesses grow online."
        canonical="/"
        schema={schema}
      />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonials />
      <CTABanner />
    </Layout>
  );
};

export default Index;
