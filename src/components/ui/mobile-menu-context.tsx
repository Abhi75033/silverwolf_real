
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MobileMenuContextType {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen, openMenu, closeMenu, toggleMenu }}>
            {children}
        </MobileMenuContext.Provider>
    );
};

export const useMobileMenu = () => {
    const context = useContext(MobileMenuContext);
    if (context === undefined) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }
    return context;
};
