import Navigation from "@/components/ui/navigation";
import TeamSection from "@/components/sections/Team";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <SEO
        title="Our Team - Expert Professionals"
        description="Meet the expert team at Silver Wolf Technologies: Rushabh Pandey (Strategic Finance Lead & Tax Consultant), Divakar Prajapati (Lead Creative Director), Sharad Yadav (Chief Technology Officer), Swapnali More (Lead Systems Engineer), and Abhishek Kumar (Lead Web Developer). Skilled professionals dedicated to delivering exceptional digital solutions and business growth."
        keywords="Rushabh Pandey, Divakar Prajapati, Sharad Yadav, Swapnali More, Abhishek Kumar, Silver Wolf Technologies team, web developers India, tax consultants, creative directors, technology experts"
        canonical="/team"
      />
      <Navigation />
      <main className="pt-24 md:pt-32">
        <TeamSection isCarousel={false} animate={true} />
      </main>
      <Footer />
    </div>
  );
};

export default Team;
