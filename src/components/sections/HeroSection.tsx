"use client";

import { Target, ShieldCheck, Crosshair, Phone, ArrowRight, Zap, Award, AlertTriangle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-white border-b border-red-100 py-16 lg:py-24 overflow-hidden bg-hud-grid">
      
      {/* Background Military Target Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-200/40 rounded-full pointer-events-none animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-red-300/30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tactical Status Pill */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-300 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-red-700">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span>DEFENSE MATRIX ACTIVE</span>
              <span className="text-red-300">|</span>
              <span className="text-slate-700">PCO LICENSED (DOA FORM B)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              TACTIC-GRADE <br />
              <span className="text-red-600 underline decoration-red-300 decoration-wavy decoration-2">
                PEST ERADICATION
              </span> <br />
              & SUB-SLAB DEFENSE.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              FK Kodana provides KKM-approved, eco-friendly subterranean termite baiting, post-construction soil injection (up to 3 years warranty), and HACCP/Halal audit-ready commercial pest management across Selangor.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded font-bold text-base uppercase tracking-wider shadow-xl shadow-red-600/30 transition-all hover:scale-[1.02] border-2 border-red-500"
              >
                <Crosshair className="w-5 h-5 animate-pulse" />
                Lock-In Free Inspection
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#ai-chatbot"
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded font-bold text-base uppercase tracking-wider shadow-lg transition-all border-2 border-slate-700"
              >
                <Zap className="w-5 h-5 text-red-500" />
                Launch AI Threat Assessment
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span>3-Year Termite Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Award className="w-4 h-4 text-red-600 shrink-0" />
                <span>KKM & DOA Approved</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span>Same-Day Local Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical HUD Target Lock Visual */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white border-2 border-red-600 p-6 rounded-lg shadow-2xl relative">
              
              {/* Corner Reticles */}
              <div className="reticle-corner-tl absolute top-0 left-0 w-4 h-4" />
              <div className="reticle-corner-tr absolute top-0 right-0 w-4 h-4" />
              <div className="reticle-corner-bl absolute bottom-0 left-0 w-4 h-4" />
              <div className="reticle-corner-br absolute bottom-0 right-0 w-4 h-4" />

              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-red-200 pb-3 mb-4 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-600 animate-spin" />
                  <span className="font-bold text-red-600">HUD THREAT SCANNER v2.6</span>
                </div>
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">LIVE RADAR</span>
              </div>

              {/* Target Lock Screen Graphic */}
              <div className="relative bg-slate-950 rounded p-6 text-white overflow-hidden border border-red-900/50 space-y-4">
                
                {/* Radar Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                <div className="flex items-center justify-between text-xs font-mono text-red-400 border-b border-red-900/40 pb-2">
                  <span>TARGET: SUBTERRANEAN COLONY</span>
                  <span className="text-red-500 font-bold">LOCK 98.4%</span>
                </div>

                {/* Pest Targets Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="bg-red-950/40 border border-red-600/40 p-3 rounded text-center">
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Primary Threat</p>
                    <p className="font-extrabold text-sm text-red-400">Termites (Anai-Anai)</p>
                    <span className="text-[10px] font-mono text-xs bg-red-600/30 text-red-300 px-1.5 py-0.5 rounded mt-1 inline-block">Bait / Soil Barrier</span>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded text-center">
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Vector Threat</p>
                    <p className="font-bold text-sm text-slate-200">Aedes Mosquito</p>
                    <span className="text-[10px] font-mono text-xs bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded mt-1 inline-block">ULV Misting</span>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded text-center">
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Food Threat</p>
                    <p className="font-bold text-sm text-slate-200">German Roaches</p>
                    <span className="text-[10px] font-mono text-xs bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded mt-1 inline-block">HACCP Gel Bait</span>
                  </div>

                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded text-center">
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Rodent Threat</p>
                    <p className="font-bold text-sm text-slate-200">Norway Rats</p>
                    <span className="text-[10px] font-mono text-xs bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded mt-1 inline-block">TRBS Station</span>
                  </div>
                </div>

                {/* Dispatch Status */}
                <div className="pt-2 border-t border-red-900/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">HQ Location:</span>
                  <span className="text-red-400 font-bold">Sungai Buloh / Rawang</span>
                </div>
              </div>

              {/* Counter Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <p className="text-lg font-black text-red-600">3 YRS</p>
                  <p className="text-[10px] text-slate-500 uppercase">Warranty</p>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <p className="text-lg font-black text-slate-900">100%</p>
                  <p className="text-[10px] text-slate-500 uppercase">KKM Safe</p>
                </div>
                <div className="bg-slate-50 p-2 rounded border border-slate-200">
                  <p className="text-lg font-black text-red-600">&lt;30m</p>
                  <p className="text-[10px] text-slate-500 uppercase">Dispatch</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
