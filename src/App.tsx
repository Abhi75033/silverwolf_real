
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileMenuProvider } from "@/components/ui/mobile-menu-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useState, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import { Loader } from "./components/ui/loader";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail")); // Legacy/Fallback
const Team = lazy(() => import("./pages/Team"));
const Contact = lazy(() => import("./pages/Contact"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));

// Service Pages
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/services/MobileAppDevelopment"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const DesignBranding = lazy(() => import("./pages/services/DesignBranding"));
const BusinessServices = lazy(() => import("./pages/services/BusinessServices"));

// Admin
const AdminLogin = lazy(() => import("./pages/Admin/Login"));
const AdminDashboard = lazy(() => import("./pages/Admin/Dashboard"));

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <MobileMenuProvider>
            <BrowserRouter>
              <Toaster />
              <Sonner />
              <ScrollToTop />
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <Loader key="loader" onComplete={() => setIsLoading(false)} />
                ) : (
                  <Suspense fallback={<div className="min-h-screen bg-black" />}>
                    <Routes>
                      <Route path="/" element={<Index />} />

                      {/* Core Pages */}
                      <Route path="/about-us" element={<About />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/inquiry" element={<Inquiry />} />

                      {/* Service Landing Pages */}
                      <Route path="/web-development" element={<WebDevelopment />} />
                      <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
                      <Route path="/digital-marketing" element={<DigitalMarketing />} />
                      <Route path="/design-branding" element={<DesignBranding />} />
                      <Route path="/business-services" element={<BusinessServices />} />

                      {/* Legacy/Fallback Service Route */}
                      <Route path="/services/:slug" element={<ServiceDetail />} />

                      {/* Team */}
                      <Route path="/team" element={<Team />} />

                      {/* Admin */}
                      <Route path="/admin" element={<AdminLogin />} />
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route path="/admin/dashboard" element={<AdminDashboard />} />

                      {/* 404 */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                )}
              </AnimatePresence>
            </BrowserRouter>
          </MobileMenuProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
