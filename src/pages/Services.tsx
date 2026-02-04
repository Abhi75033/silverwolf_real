import Navigation from "@/components/ui/navigation";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <SEO
        title="Our Services"
        description="Comprehensive digital services from Silver Wolf Technologies: Web Development (React, Next.js, Node.js), Mobile App Development (Android, iOS), GST & Tax Registration, Video Editing & Motion Graphics, Graphic Design & Branding, Custom CRM Solutions, Database Management, Website Maintenance & Bug Fixing, and Professional Finance Services. Expert solutions for global businesses."
        keywords="web development services, mobile app development, GST registration India, tax consulting, video editing services, graphic design agency, CRM development, database solutions, website maintenance, finance consulting, React development, Next.js, Android app development"
        canonical="/services"
      />
      <Navigation />
      <main className="pt-16">
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;