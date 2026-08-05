"use client";

import { useState } from "react";
import Link from "next/link";
import { Target, Shield, Phone, MessageSquare, LayoutDashboard, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-red-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Military Target Badge */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 bg-red-600 rounded flex items-center justify-center text-white shadow-md shadow-red-600/30 group-hover:scale-105 transition-transform">
            <Target className="w-6 h-6 animate-spin-slow" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900">
                FK <span className="text-red-600">KODANA</span>
              </span>
              <span className="text-[10px] font-mono font-semibold uppercase bg-red-100 text-red-700 px-1.5 py-0.5 rounded border border-red-300">
                PCO #SA0365841
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium tracking-wide">
              TACTIC-GRADE PEST CONTROL SERVICES
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <a href="#hero" className="hover:text-red-600 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-red-600 transition-colors">
            Services & Tech
          </a>
          <a href="#ai-chatbot" className="hover:text-red-600 transition-colors flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            AI Consultation
          </a>
          <a href="#credentials" className="hover:text-red-600 transition-colors">
            Compliance & Coverage
          </a>
          <a href="#contact" className="hover:text-red-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/admin/crm"
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded border border-slate-300 transition-colors"
          >
            <LayoutDashboard className="w-4 h-4 text-red-600" />
            CRM Lead Desk
          </Link>
          
          <a
            href="https://wa.me/60163351984?text=Halo%20FK%20Kodana%20Pest%20Control,%20saya%20nak%20minta%20free%20inspection%20pest%20control"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4" />
            016-335 1984 (Direct)
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-red-600 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-red-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <div className="flex flex-col gap-3 font-medium text-slate-800">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Services & Tech
            </a>
            <a
              href="#ai-chatbot"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 text-red-600 font-semibold flex items-center justify-between"
            >
              AI Consultation & Threat Evaluator
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">3 Panes</span>
            </a>
            <a
              href="#credentials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Compliance & Coverage
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Contact Dispatch
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/admin/crm"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-slate-100 text-slate-900 font-semibold rounded text-sm border border-slate-300"
            >
              Access CRM Dashboard
            </Link>
            <a
              href="https://wa.me/60163351984?text=Halo%20FK%20Kodana,%20nak%20inspection"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-red-600 text-white font-bold text-sm uppercase rounded shadow-md"
            >
              WhatsApp Free Inspection
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
