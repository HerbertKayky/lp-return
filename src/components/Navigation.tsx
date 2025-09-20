"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-[#CCAF6D]" : "text-[#CCAF6D]"
                }`}
              >
                return
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition-colors duration-300 hover:text-gray-900 ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-medium transition-colors duration-300 hover:text-gray-900 ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-medium transition-colors duration-300 hover:text-gray-900 ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`font-medium transition-colors duration-300 hover:text-gray-900 ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gray-900 text-[#CCAF6D] px-6 py-2 font-medium hover:bg-gray-800 transition-colors duration-300 border border-[#CCAF6D]"
            >
              Contato
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 bg-gray-900 text-[#CCAF6D] font-medium mx-4 hover:bg-gray-800 transition-colors duration-300 border border-[#CCAF6D]"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
