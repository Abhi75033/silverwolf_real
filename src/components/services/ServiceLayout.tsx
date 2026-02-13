
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import SimpleContactForm from "@/components/forms/SimpleContactForm";
import { ReactNode } from "react";

interface ServiceLayoutProps {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    canonical: string;
    children: ReactNode;
}

const ServiceLayout = ({
    title,
    description,
    heroTitle,
    heroSubtitle,
    canonical,
    children
}: ServiceLayoutProps) => {

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "Silver Wolf Technologies",
            "url": "https://silverwolf.tech"
        },
        "serviceType": heroTitle,
        "areaServed": "Global"
    };

    return (
        <Layout>
            <SEO title={title} description={description} canonical={canonical} schema={schema} />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20 blur-[100px]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 text-white leading-tight">
                        {heroTitle}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        {heroSubtitle}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Content Column */}
                        <div className="lg:col-span-2 space-y-12">
                            {children}
                        </div>

                        {/* Sidebar / Contact Form */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <SimpleContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ServiceLayout;
