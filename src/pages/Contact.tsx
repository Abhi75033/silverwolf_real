import Navigation from "@/components/ui/navigation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Silver Wolf Technologies for your next web development or creative project. We offer expert consulting and professional digital solutions." 
        canonical="/contact"
      />
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;