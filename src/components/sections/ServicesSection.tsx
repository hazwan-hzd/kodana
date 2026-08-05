"use client";

import { useState } from "react";
import { Target, Bug, ShieldCheck, Flame, Droplets, Crosshair, CheckCircle2, ArrowRight, X, AlertCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  icon: any;
  shortDesc: string;
  warranty: string;
  chemicalClass: string;
  methodology: string;
  targetPest: string;
  fullSpecs: string[];
  recommendedFor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "termite-defense",
    title: "Subterranean Termite Eradication",
    category: "Structural Protection",
    icon: Target,
    shortDesc: "Colony elimination via Exterra/Sentricon baiting or post-construction Fipronil sub-slab chemical barrier injection.",
    warranty: "1 to 3 Years Written Warranty",
    chemicalClass: "Class II / Class III Non-Repellent",
    methodology: "Dual-Action Trophallaxis Baiting & 30cm Sub-Slab Drill Injection",
    targetPest: "Coptotermes gestroi & Macrotermes (Anai-anai)",
    recommendedFor: "Residential Bungalows, Terraces, Commercial Properties & Wooden Structures",
    fullSpecs: [
      "In-ground & above-ground baiting stations using Chlorfluazuron Insect Growth Regulator (IGR).",
      "Sub-slab chemical injection: 13-16mm holes drilled at 30-45cm intervals along foundation walls.",
      "Application rate: 5 Liters per linear meter of wall foundation using Fipronil or Imidacloprid working solution.",
      "Zero destruction baiting options for high-end residential interiors.",
      "Includes quarterly maintenance inspections and written warranty certificate.",
    ],
  },
  {
    id: "haccp-ipm",
    title: "Commercial & Food Premises IPM",
    category: "Audit-Ready Commercial",
    icon: ShieldCheck,
    shortDesc: "Complete Integrated Pest Management designed for HACCP, GMP, and JAKIM Halal audit compliance in food production.",
    warranty: "Monthly Contract Assurance",
    chemicalClass: "Class IV Food-Grade Gel Baits",
    methodology: "Non-Contaminating Trap Layout, Trend Logging & Chemical Register",
    targetPest: "German Cockroaches, Flies, Pantry Pests, Rats",
    recommendedFor: "Restaurants, Central Kitchens, Food Factories, Supermarkets & Bakeries",
    fullSpecs: [
      "Audit-Ready Documentation Folder: Station Layout Maps, MSDS/SDS sheets, and Pesticide Register.",
      "Food-grade gel baiting (Indoxacarb/Fipronil) in electrical boxes and food prep zones.",
      "Non-toxic sticky monitors and UV fly light catchers to prevent chemical food contamination.",
      "Monthly Pest Activity Index (PAI) trend analysis reports for KKM & Halal auditors.",
      "Schedule treatments around production shifts for zero facility downtime.",
    ],
  },
  {
    id: "rodent-lockdown",
    title: "Rodent Lock-Down Protocol",
    category: "Perimeter Exclusion",
    icon: Crosshair,
    shortDesc: "Tamper-Resistant Rodent Bait Stations (TRBS) and structural proofing for total rat eradication.",
    warranty: "Ongoing Perimeter Guarantee",
    chemicalClass: "Class III Second-Gen Rodenticide",
    methodology: "Tamper-Proof Station Anchoring & Structural Entry Sealing",
    targetPest: "Rattus norvegicus (Sewage Rat) & Rattus ratti (Roof Rat)",
    recommendedFor: "Logistics Warehouses, Food Outlets, Commercial Complexes & Estates",
    fullSpecs: [
      "Heavy-duty tamper-resistant TRBS stations anchored directly to wall/floor foundations.",
      "Single-feed anticoagulant baits (Brodifacoum/Bromadiolone) for rapid colony knockdown.",
      "Structural entry proofing: Sealing wall gaps, pipe penetrations, and cable trays with steel mesh.",
      "Routine station inspections, sanitation feedback, and carcass removal SOPs.",
    ],
  },
  {
    id: "mosquito-vector",
    title: "Mosquito & Vector Defense",
    category: "Public Health",
    icon: Droplets,
    shortDesc: "Thermal fogging, Ultra-Low Volume (ULV) cold misting, and BTI larviciding for Dengue outbreak control.",
    warranty: "Ad-hoc / Scheduled Cycles",
    chemicalClass: "Class III Synthetic Pyrethroid",
    methodology: "VMD 5-15 Micron Cold Misting & BTI Larvicide Application",
    targetPest: "Aedes aegypti & Aedes albopictus (Nyamuk Aedes)",
    recommendedFor: "Housing Estates, Construction Sites, Schools, Factories & Resorts",
    fullSpecs: [
      "ULV cold misting delivering 5-15 micron droplets for extended airborne suspension in rest zones.",
      "Outdoor thermal fogging using synthetic pyrethroids during peak biting hours (06:00-08:00 / 17:30-19:30).",
      "Biological larviciding using Bacillus thuringiensis israelensis (BTI) in standing water bodies.",
      "Breeding site detection and destruction SOP compliant with KKM vector guidelines.",
    ],
  },
  {
    id: "bedbug-steam",
    title: "Bed Bug Thermal Remediation",
    category: "Specialized Eradication",
    icon: Flame,
    shortDesc: "Dual thermal dry steam remediation combined with micro-encapsulated spray for complete bedbug eradication.",
    warranty: "180-Day Guarantee Package",
    chemicalClass: "Class III Micro-Encapsulated",
    methodology: "180°C Superheated Dry Steam + Residual Barrier Spray",
    targetPest: "Cimex lectularius (Pepijat / Pijat)",
    recommendedFor: "Hotels, Hostels, Dormitories, Residential Bedrooms & Staff Quarters",
    fullSpecs: [
      "180°C dry thermal steam treatment penetrating mattress seams, bed frames, and baseboards to instantly destroy eggs and adults.",
      "Application of micro-encapsulated pyrethroid spray for 60-day residual barrier protection.",
      "Two-phase treatment protocol executed 10-14 days apart to break the egg hatch cycle.",
      "Non-staining, low-odor formulation safe for immediate room re-entry after drying.",
    ],
  },
  {
    id: "emergency-response",
    title: "Emergency Outbreak Response",
    category: "Rapid Rapid Deployment",
    icon: Bug,
    shortDesc: "Priority rapid-dispatch team deployed within 2 hours for urgent pest infestations in Northern Selangor.",
    warranty: "Immediate Action Guarantee",
    chemicalClass: "Multi-Spectrum Targeted",
    methodology: "Rapid Site Assessment, Knockdown Spraying & Barrier Setup",
    targetPest: "Hornet Nests, Heavy Roach Outbreaks, Flea Infestations",
    recommendedFor: "Urgent Residential & Commercial Outbreak Emergencies",
    fullSpecs: [
      "Direct 24/7 hotline dispatch for Rawang, Sungai Buloh, Bukit Beruntung & Shah Alam.",
      "Specialized protective suits and equipment for hornet/wasp nest removal.",
      "Heavy knockdown space spraying for sudden commercial kitchen cockroach swarms.",
      "Immediate show-cause defense documentation for premises facing KKM inspection warnings.",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Target className="w-4 h-4 text-red-600 animate-pulse" />
            SPECTRUM OF TACTICAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PROVEN PEST ELIMINATION & AUDIT-READY SERVICES
          </h2>
          <p className="text-slate-600 text-base">
            Engineered to statutory Jabatan Pertanian (DOA) & KKM standards. Select a service card to inspect technical specifications, chemical classifications, and warranty terms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white border border-slate-200 hover:border-red-600 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all cursor-pointer relative flex flex-col justify-between"
              >
                {/* Corner reticle on hover */}
                <div className="reticle-corner-tl absolute top-0 left-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="reticle-corner-tr absolute top-0 right-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 group-hover:bg-red-100 group-hover:text-red-800 px-2.5 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Warranty:</span>
                    <span className="font-bold text-red-600">{service.warranty}</span>
                  </div>

                  <div className="flex items-center text-xs font-semibold text-red-600 group-hover:translate-x-1 transition-transform">
                    Inspect Technical Specs
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border-2 border-red-600 w-full max-w-2xl rounded-lg shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-red-600 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 text-white rounded flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-red-600 font-bold uppercase">{selectedService.category}</span>
                  <h3 className="text-2xl font-black text-slate-900">{selectedService.title}</h3>
                </div>
              </div>

              <div className="space-y-4 my-6 text-sm">
                
                <div className="bg-slate-50 p-4 rounded border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 block">Target Organism:</span>
                    <strong className="text-slate-900">{selectedService.targetPest}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Warranty Period:</span>
                    <strong className="text-red-600">{selectedService.warranty}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Chemical Grade:</span>
                    <strong className="text-slate-900">{selectedService.chemicalClass}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Execution SOP:</span>
                    <strong className="text-slate-900">{selectedService.methodology}</strong>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wider">Technical Specifications & SOP:</h4>
                  <ul className="space-y-2">
                    {selectedService.fullSpecs.map((spec, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-3 rounded text-xs text-red-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Recommended Premises:</strong> {selectedService.recommendedFor}
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  Close Specs
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded shadow-md text-center"
                >
                  Book Service Inspection
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
