"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-dark-200/50" : "bg-transparent"}`}>
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <a href="#" className={`text-xl font-semibold tracking-tight ${scrolled ? "text-dark-800" : "text-white"}`}>
          Flowgent<span className={scrolled ? "text-primary-600" : "text-primary-300"}>X</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? "text-dark-500 hover:text-dark-800" : "text-white/70 hover:text-white"}`}>Platform</a>
          <a href="#usecases" className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? "text-dark-500 hover:text-dark-800" : "text-white/70 hover:text-white"}`}>Use Cases</a>
          <a href="#pricing" className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? "text-dark-500 hover:text-dark-800" : "text-white/70 hover:text-white"}`}>Pricing</a>
          <a
            href="#demo"
            className="bg-primary-600 text-white px-5 py-1.5 rounded-full text-xs font-medium hover:bg-primary-700 transition-all"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden ${scrolled ? "text-dark-600" : "text-white"}`} onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 py-5 space-y-4">
          <a href="#features" className="block text-sm text-dark-500 font-medium" onClick={() => setOpen(false)}>Platform</a>
          <a href="#usecases" className="block text-sm text-dark-500 font-medium" onClick={() => setOpen(false)}>Use Cases</a>
          <a href="#pricing" className="block text-sm text-dark-500 font-medium" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#demo" className="block bg-primary-600 text-white text-center px-5 py-2.5 rounded-full text-sm font-medium" onClick={() => setOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
