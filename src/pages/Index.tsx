import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";

import SuccessStories from "@/components/sections/SuccessStories";
import Portfolio from "@/components/sections/Portfolio";
import faqSchema from "@/data/faq-schema.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <SEO
        title="Home"
        description="Silver Wolf Technologies - Leading digital solutions provider in India offering expert web development (React, Next.js), mobile app development (Android, iOS), GST registration, tax consulting, video editing, graphic design, CRM solutions, and database management. Serving clients globally with cutting-edge technology."
        keywords="web development India, mobile app development, GST registration online, tax consultant India, React development, Next.js, video editing services, graphic design agency, CRM solutions, database management, Rushabh Pandey, Divakar Prajapati, Sharad Yadav, Swapnali More, Abhishek Kumar, Silver Wolf Technologies"
        canonical="/"
        schema={faqSchema}
      />
      <Navigation />
      <main>
        <Hero />
        <TechStack />
        <SuccessStories />
        <Portfolio />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
