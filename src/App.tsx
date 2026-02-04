
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MobileMenuProvider } from "@/components/ui/mobile-menu-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Loader } from "./components/ui/loader";
import BottomNav from "./components/ui/BottomNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

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
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/inquiry" element={<Inquiry />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                )}
              </AnimatePresence>
              <BottomNav />
            </BrowserRouter>
          </MobileMenuProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
