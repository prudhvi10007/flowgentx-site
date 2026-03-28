"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-dark-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary-700">
          Flowgent<span className="text-dark-800">X</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-dark-500 hover:text-primary-600 transition">Why FlowgentX</a>
          <a href="#features" className="text-sm text-dark-500 hover:text-primary-600 transition">Features</a>
          <a href="#usecases" className="text-sm text-dark-500 hover:text-primary-600 transition">Use Cases</a>
          <a href="#how" className="text-sm text-dark-500 hover:text-primary-600 transition">How It Works</a>
          <a
            href="#demo"
            className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-dark-600" onClick={() => setOpen(!open)}>
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
        <div className="md:hidden bg-white border-t border-dark-100 px-6 py-4 space-y-3">
          <a href="#problem" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Why FlowgentX</a>
          <a href="#features" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Features</a>
          <a href="#usecases" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>Use Cases</a>
          <a href="#how" className="block text-sm text-dark-500" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#demo" className="block bg-primary-600 text-white text-center px-5 py-2 rounded-lg text-sm font-medium" onClick={() => setOpen(false)}>
            Request Demo
          </a>
        </div>
      )}
    </nav>
  );
}
