
import Navigation from "@/components/ui/navigation";
import InquiryForm from "@/components/sections/InquiryForm";
import Portfolio from "@/components/sections/Portfolio";
import SuccessStories from "@/components/sections/SuccessStories";
import Footer from "@/components/ui/footer";
import SEO from "@/components/ui/SEO";

const Inquiry = () => {
    return (
        <div className="min-h-screen bg-black">
            <SEO
                title="Start a Project | Silver Wolf Technologies"
                description="Inquire about our services. Let's build something amazing together."
                canonical="/inquiry"
            />
            <Navigation />
            <main className="pt-16">
                <InquiryForm />
                <Portfolio />
                <SuccessStories />
            </main>
            <Footer />
        </div>
    );
};

export default Inquiry;
