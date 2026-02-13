
import ServiceLayout from "@/components/services/ServiceLayout";
import { Palette, Layers, Image, Layout } from "lucide-react";

const DesignBranding = () => {
    return (
        <ServiceLayout
            title="Branding & UI UX Design Services | Logo & Creative Design"
            description="Creative branding and UI/UX design services including logo design, social media creatives, and website interface design."
            heroTitle="Creative Design & Branding Solutions"
            heroSubtitle="We craft visual identities that tell your story. From logos to complete brand systems, we ensure your business looks as professional as it performs."
            canonical="/design-branding"
        >
            <div className="space-y-12 text-gray-300">
                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Palette className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Brand Identity Design</h2>
                    </div>
                    <p className="leading-relaxed">
                        Your brand is more than just a logo. We create comprehensive brand identity systems including color palettes, typography, and voice guidelines
                        that resonate with your target audience.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Layout className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">UI/UX Design</h2>
                    </div>
                    <p className="leading-relaxed">
                        User experience is at the heart of our design process. We build intuitive, accessible, and beautiful interfaces for websites and mobile apps
                        that keep users engaged.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Image className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Graphic Design</h2>
                    </div>
                    <p className="leading-relaxed">
                        From social media creatives to marketing collateral, our graphic design services verify your marketing materials are visually stunning and on-brand.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
};

export default DesignBranding;
