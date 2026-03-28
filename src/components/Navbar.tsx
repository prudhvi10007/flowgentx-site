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
    <nav className={`fixed top-0 w-full z-50 transition ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-dark-100 shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className={`text-xl font-bold ${scrolled ? "text-primary-700" : "text-white"}`}>
          Flowgent<span className={scrolled ? "text-dark-800" : "text-primary-400"}>X</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`text-sm transition ${scrolled ? "text-dark-500 hover:text-primary-600" : "text-dark-300 hover:text-white"}`}>Platform</a>
          <a href="#usecases" className={`text-sm transition ${scrolled ? "text-dark-500 hover:text-primary-600" : "text-dark-300 hover:text-white"}`}>Use Cases</a>
          <a href="#pricing" className={`text-sm transition ${scrolled ? "text-dark-500 hover:text-primary-600" : "text-dark-300 hover:text-white"}`}>Pricing</a>
          <a
            href="#demo"
            className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-500 transition"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden ${scrolled ? "text-dark-600" : "text-white"}`} onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-white border-t border-dark-100 px-6 py-4 space-y-3 shadow-lg">
          <a href="#features" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Platform</a>
          <a href="#usecases" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Use Cases</a>
          <a href="#pricing" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#demo" className="block bg-primary-600 text-white text-center px-5 py-2 rounded-lg text-sm font-medium" onClick={() => setOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
