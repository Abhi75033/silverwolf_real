
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import ScrollToTop from "../ScrollToTop"; // Ensure this path is correct based on where ScrollToTop is

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* <ScrollToTop /> */}
            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
