
import ServiceLayout from "@/components/services/ServiceLayout";
import { Search, Share2, MousePointer, PenTool } from "lucide-react";

const DigitalMarketing = () => {
    return (
        <ServiceLayout
            title="Digital Marketing Agency | SEO, Social Media & Growth Marketing"
            description="Boost your online presence with expert SEO, social media marketing, and paid advertising services designed to generate leads and increase revenue."
            heroTitle="Result-Driven Digital Marketing Services"
            heroSubtitle="We don't just generate traffic; we generate growth. Our data-driven strategies ensure you reach the right audience at the right time."
            canonical="/digital-marketing"
        >
            <div className="space-y-12 text-gray-300">
                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Search className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">SEO Services</h2>
                    </div>
                    <p className="leading-relaxed">
                        Dominate search results and drive organic traffic to your website. Our SEO experts use ethical, white-hat techniques to improve your rankings
                        for high-value keywords, ensuring long-term visibility.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Share2 className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Social Media Marketing</h2>
                    </div>
                    <p className="leading-relaxed">
                        Engage your audience where they spend the most time. We create compelling content and manage your profiles on platforms like Instagram, Facebook,
                        LinkedIn, and Twitter to build a loyal community.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <MousePointer className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">PPC Advertising</h2>
                    </div>
                    <p className="leading-relaxed">
                        Get instant leads with targeted Pay-Per-Click campaigns. We optimize your ad spend on Google Ads and social media to maximize ROI and deliver
                        high-quality prospects.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <PenTool className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Content Marketing</h2>
                    </div>
                    <p className="leading-relaxed">
                        Content is king. We produce high-quality blogs, articles, and videos that educate your audience, establish authority, and drive conversions.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
};

export default DigitalMarketing;
