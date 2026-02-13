
import ServiceLayout from "@/components/services/ServiceLayout";
import { FileText, TrendingUp, ShieldCheck, Briefcase } from "lucide-react";

const BusinessServices = () => {
    return (
        <ServiceLayout
            title="GST Registration & Tax Services in India | Business Compliance"
            description="Professional GST registration, tax filing, and business compliance services to help startups and businesses stay legally compliant."
            heroTitle="Business & Financial Compliance Services"
            heroSubtitle="Navigate the complexities of business compliance with ease. We provide end-to-end financial and legal support for startups and established enterprises."
            canonical="/business-services"
        >
            <div className="space-y-12 text-gray-300">
                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <FileText className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">GST Registration & Filing</h2>
                    </div>
                    <p className="leading-relaxed">
                        Seamless GST registration and timely return filing. We establish your business stays compliant with Indian tax laws, avoiding penalties and ensuring smooth operations.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <TrendingUp className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Tax Consultancy</h2>
                    </div>
                    <p className="leading-relaxed">
                        Expert tax advice to optimize your financial planning. Our consultants help you understand tax implications and identify opportunities for savings.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <Briefcase className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Company Registration</h2>
                    </div>
                    <p className="leading-relaxed">
                        Starting a new venture? We assist with Private Limited, LLP, and Partnership firm registrations, handling all the paperwork so you can focus on your business.
                    </p>
                </section>

                <section>
                    <div className="flex items-center space-x-3 mb-4">
                        <ShieldCheck className="w-8 h-8 text-wolf-purple" />
                        <h2 className="text-3xl font-bold font-heading text-white">Compliance Managment</h2>
                    </div>
                    <p className="leading-relaxed">
                        Ongoing compliance support including annual filings, ROC compliances, and legal documentation to keep your company in good standing.
                    </p>
                </section>
            </div>
        </ServiceLayout>
    );
};

export default BusinessServices;
