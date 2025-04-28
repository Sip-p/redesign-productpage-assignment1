// components/shared/Navbar.tsx
import React from 'react';

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  featuresRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  aboutRef: React.RefObject<HTMLElement>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, featuresRef, contactRef, aboutRef }) => {
  return (
    <nav className="w-full py-4 px-6 bg-blue-950 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          {/* Logo or Title */}
          AI Front Office
        </div>
        <div className="flex gap-6 text-white font-medium">
          <button onClick={() => scrollToSection(featuresRef)} className="hover:text-primary transition">
            Features
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className="hover:text-primary transition">
            About
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-primary transition">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
