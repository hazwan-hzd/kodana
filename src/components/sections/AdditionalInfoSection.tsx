"use client";

import { useState } from "react";
import { ShieldCheck, Award, MapPin, ChevronDown, Star, CheckCircle2, Building2, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Adakah ubat/racun yang digunakan selamat untuk anak kecil dan haiwan peliharaan?",
    answer: "Ya, 100% selamat! FK Kodana mengutamakan bahan berkualiti tinggi yang diluluskan oleh Jabatan Pertanian Malaysia & KKM dengan gred ketoksikan rendah (Class IV gel baits & non-repellent termiticides). Bagi rawatan cecair, persekitaran akan selamat untuk dimasuki semula sebaik sahaja cecair kering sepenuhnya (sekitar 30-45 minit).",
  },
  {
    question: "Bagaimana proses dan warranty bagi rawatan anai-anai (termite)?",
    answer: "Kami menawarkan 2 kaedah utama: (1) System Baiting Exterra/Sentricon tanpa tebuk lantai yang membasmi ratu dan seluruh koloni dalam 60-90 hari (Warranty 1-2 tahun). (2) Sub-slab Soil Injection iaitu penebukan 13mm di sekeliling dinding dan suntikan racun Fipronil bagi penghalang jangka panjang (Warranty bertulis 3 hingga 5 tahun).",
  },
  {
    question: "Berapa cepat FK Kodana boleh tiba di premis saya di Rawang / Sungai Buloh?",
    answer: "Pasukan operasi kami berpusat di koridor Sungai Buloh & Rawang. Bagi kes kecemasan seperti sarang tebuan atau wabak lipas/tikus komersial, juruteknik kami boleh tiba dalam masa <30 minit hingga 2 jam.",
  },
  {
    question: "Adakah FK Kodana menyediakan dokumen audit untuk lesen premis makanan KKM & Halal?",
    answer: "Ya! Kami menyediakan Folder Audit Lengkap yang merangkumi: Peta Lokasi Bait Station, MSDS/SDS Helaian Keselamatan Bahan Kimia, Salinan Lesen PCO Form B & Sijil Technicians PAL, serta Laporan Trend Pest Activity Index (PAI) bulanan bagi memenuhi syarat audit KKM & JAKIM Halal.",
  },
];

export default function AdditionalInfoSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeZone, setActiveZone] = useState("Sungai Buloh");

  return (
    <section id="credentials" className="py-20 bg-slate-50 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Sub-Section A: Statutory Credentials & SSM Proof */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-mono font-bold">
              <Award className="w-4 h-4 text-red-600" />
              STATUTORY REGISTRATION & LICENSING
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
              REGISTERED MALAYSIAN PEST CONTROL OPERATOR
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              All operations are executed by licensed Pesticide Applicators (PAL) in strict compliance with the Pesticides Act 1974.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: SSM Entity */}
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3 relative">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">SSM Corporate Entity</h3>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <p><strong>Sdn Bhd:</strong> FK KODANA SDN. BHD. (1427045-T)</p>
                <p><strong>Enterprise:</strong> FK KODANA PEST CONTROL (SA0365841-K)</p>
                <p><strong>Incorporated:</strong> Aug 2021 (Sdn Bhd) / Jan 2016 (Ent)</p>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                SSM REGISTERED ACTIVE
              </span>
            </div>

            {/* Card 2: DOA e-Lesen */}
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3 relative">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">DOA e-Lesen LRMP</h3>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <p><strong>PCO License:</strong> Form B Entity License</p>
                <p><strong>Technicians:</strong> PAL (Form D) Certified</p>
                <p><strong>Pesticides:</strong> Class II, III & IV KKM Approved</p>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                PESTICIDES BOARD COMPLIANT
              </span>
            </div>

            {/* Card 3: Audit Compliance */}
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm space-y-3 relative">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Commercial Food Audits</h3>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <p><strong>Framework:</strong> Food Hygiene Regulations 2009</p>
                <p><strong>Certifications:</strong> HACCP, GMP & JAKIM Halal Ready</p>
                <p><strong>Reporting:</strong> Monthly PAI Trend Graphs</p>
              </div>
              <span className="inline-block text-[10px] font-mono font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">
                AUDIT-READY FOLDER PROVIDED
              </span>
            </div>

          </div>
        </div>

        {/* Sub-Section B: Coverage Zones & Map */}
        <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-mono font-bold">
                <MapPin className="w-4 h-4 text-red-600" />
                OPERATIONAL COVERAGE MATRIX
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                NORTHERN SELANGOR & KLANG VALLEY FOOTPRINT
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated mobile technician teams on standby for fast dispatch. Select your area to verify operational coverage:
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Sungai Buloh", "Rawang", "Bukit Beruntung", "Bandar Seri Coalfields", "Saujana Utama", "Kota Damansara", "Shah Alam"].map((zone) => (
                  <button
                    key={zone}
                    onClick={() => setActiveZone(zone)}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                      activeZone === zone
                        ? "bg-red-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-900 text-white p-6 rounded-lg border border-slate-800 font-mono space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
                <span className="text-red-400 font-bold">ZONE DETAILS: {activeZone.toUpperCase()}</span>
                <span className="text-green-400 font-bold">DISPATCH: ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Estimated Arrival:</span>
                  <strong className="text-white">&lt; 30 - 45 Minutes</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Inspection Fee:</span>
                  <strong className="text-red-400">FREE / ZERO CHARGE</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Active Technicians:</span>
                  <strong className="text-white">PAL Licensed Units On-Duty</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Key Coverage:</span>
                  <strong className="text-white">Residential & Commercial B2B</strong>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/60163351984?text=Halo%20FK%20Kodana,%20saya%20di%20${encodeURIComponent(activeZone)},%20nak%20minta%20free%20inspection`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded text-xs uppercase tracking-wider block"
                >
                  Book Free Inspection in {activeZone}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-Section C: Verified Client Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-black text-slate-900">VERIFIED CLIENT REVIEWS</h3>
            <p className="text-sm text-slate-600 mt-1">Real feedback from property owners and commercial clients in Selangor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 italic">
                &quot;Masalah anai-anai dekat kerangka pintu kayu selesai terus lepas FK Kodana pasang Exterra baiting system. Technician datang pantau tepat masa setiap bulan.&quot;
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-mono">
                <strong className="text-slate-900">En. Haziq Ramli</strong>
                <p className="text-slate-500">Saujana Utama, Sungai Buloh</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 italic">
                &quot;Restoran kami perlukan laporan audit bulanan untuk KKM. FK Kodana sediakan folder audit lengkap siap peta bait station dan MSDS kimia. Lulus audit tanpa masalah!&quot;
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-mono">
                <strong className="text-slate-900">Pn. Mastura Salleh</strong>
                <p className="text-slate-500">Bukit Beruntung, Rawang</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 italic">
                &quot;Servis soil injection sangat kemas. Selepas tebuk lantai sekeliling rumah, diorang tutup balik lubang dengan semen warna sama. Warranty 3 tahun diberi bertulis.&quot;
              </p>
              <div className="pt-2 border-t border-slate-100 text-xs font-mono">
                <strong className="text-slate-900">Mr. Suresh Kumar</strong>
                <p className="text-slate-500">Bandar Seri Coalfields</p>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-Section D: Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-red-600" />
              SOALAN LAZIM (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between hover:text-red-600 transition-colors text-sm"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180 text-red-600" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
