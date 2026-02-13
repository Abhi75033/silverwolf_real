
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { useParams } from "react-router-dom";

const ServicePage = () => {
    const { slug } = useParams();

    // This is a placeholder that will be expanded in Phase 3
    const serviceName = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) : "Service";

    return (
        <Layout>
            <SEO
                title={`${serviceName} | Silver Wolf Technologies`}
                description={`Professional ${serviceName} services by Silver Wolf Technologies.`}
                canonical={`/${slug}`}
            />
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {serviceName}
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Comprehensive {serviceName.toLowerCase()} solutions tailored for your business growth.
                    Detailed page coming soon.
                </p>
            </div>
        </Layout>
    );
};

export default ServicePage;
