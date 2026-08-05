"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, ShieldCheck, MapPin, Target, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Sungai Buloh",
    pestCategory: "Termite",
    propertyType: "Terrace / Semi-D",
    urgency: "HIGH",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Sila isi nama dan nombor telefon WhatsApp anda.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Contact Form",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedLead(data.data);
      } else {
        setErrorMsg(data.error || "Gagal menghantar permohonan.");
      }
    } catch (err) {
      setErrorMsg("Ralat rangkaian. Sila cuba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-red-100 bg-hud-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dispatch Briefing */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
              <Target className="w-4 h-4" />
              LOCK-IN DISPATCH REQUISITION
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              REQUEST FREE SITE INSPECTION & SEBUT HARGA
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Pegawai teknikal berlesen FK Kodana sedia menjalankan pemeriksaan tapak secara percuma di sekitar Selangor. Borang ini dihantar secara langsung ke CRM Lead Desk kami.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Pemeriksaan Tanpa Obligasi</h4>
                  <p className="text-xs text-slate-600">Pemeriksaan tapak dan sebut harga disediakan secara percuma tanpa sebarang caj tersembunyi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded border border-slate-200">
                <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Hotline Kecemasan Direct</h4>
                  <p className="text-xs text-slate-600">Hubungi terus <strong>+6016-335 1984</strong> untuk kes kecemasan sarang tebuan atau wabak segera.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-4 rounded border border-slate-200">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Pusat Operasi Tempatan</h4>
                  <p className="text-xs text-slate-600">Sungai Buloh, Rawang, Bukit Beruntung, Saujana Utama, Bandar Seri Coalfields & Shah Alam.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Tactical Lead Form / Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-red-600 p-8 rounded-lg shadow-2xl relative">
              
              {/* Corner Reticles */}
              <div className="reticle-corner-tl absolute top-0 left-0 w-4 h-4" />
              <div className="reticle-corner-tr absolute top-0 right-0 w-4 h-4" />
              <div className="reticle-corner-bl absolute bottom-0 left-0 w-4 h-4" />
              <div className="reticle-corner-br absolute bottom-0 right-0 w-4 h-4" />

              {!submittedLead ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-red-200 pb-3 mb-2 font-mono text-xs">
                    <span className="font-bold text-slate-900 uppercase">BORANG PERMOHONAN INSPEKSI PEST</span>
                    <span className="text-red-600 font-bold">STATUS: READY</span>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">Nama Penuh *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: En. Razak Ibrahim"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">No. WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Contoh: 012-3456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">Lokasi / Kawasan</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Sungai Buloh">Sungai Buloh</option>
                        <option value="Rawang">Rawang</option>
                        <option value="Bukit Beruntung">Bukit Beruntung</option>
                        <option value="Bandar Seri Coalfields">Bandar Seri Coalfields</option>
                        <option value="Saujana Utama">Saujana Utama</option>
                        <option value="Kota Damansara">Kota Damansara</option>
                        <option value="Shah Alam">Shah Alam</option>
                        <option value="Kawasan Lain (Selangor)">Kawasan Lain (Selangor)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">Jenis Perosak (Pest)</label>
                      <select
                        value={formData.pestCategory}
                        onChange={(e) => setFormData({ ...formData, pestCategory: e.target.value as any })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Termite">Anai-Anai (Subterranean Termite)</option>
                        <option value="Cockroach">Lipas (Cockroach)</option>
                        <option value="Rodent">Tikus (Rodent / Rat)</option>
                        <option value="Mosquito">Nyamuk Aedes (Mosquito)</option>
                        <option value="Bedbug">Pepijat (Bedbug)</option>
                        <option value="General">Perosak Umum (General IPM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">Jenis Premis</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="Terrace / Semi-D">Rumah Teres / Semi-D</option>
                        <option value="Residential Bungalow">Rumah Banglo</option>
                        <option value="Commercial Restaurant">Restoran / Kedai Makanan</option>
                        <option value="Food Factory">Kilang Makanan / Gudang</option>
                        <option value="Office / Warehouse">Pejabat / Komersial</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase">Tahap Keterukan</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                        className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                      >
                        <option value="URGENT">KECEMASAN (Tanda Kerosakan Aktif)</option>
                        <option value="HIGH">TINGGI (Timbul Tanda Baru)</option>
                        <option value="MEDIUM">SEDERHANA (Tindakan Pencegahan)</option>
                        <option value="LOW">ENQUIRY SAHAJA</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold text-slate-700 uppercase">Nota Tambahan / Alamat Premis</label>
                    <textarea
                      rows={3}
                      placeholder="Terangkan masalah atau masukkan alamat lokasi..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span>MENGHANTAR PERMOHONAN...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>HANTAR REQUISITION INSPEKSI PERCUMA</span>
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 space-y-4 font-mono">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">REQUISITION BERJAYA!</h3>
                  
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded text-xs space-y-1 text-slate-700">
                    <p><strong>LEAD ID:</strong> <span className="text-red-600 font-bold">{submittedLead.id}</span></p>
                    <p><strong>NAMA:</strong> {submittedLead.name}</p>
                    <p><strong>LOKASI:</strong> {submittedLead.location}</p>
                    <p><strong>PEROSAK:</strong> {submittedLead.pestCategory}</p>
                  </div>

                  <p className="text-xs text-slate-600">
                    Permohonan anda telah didaftarkan dalam CRM Lead Desk FK Kodana. Juruteknik kami akan menghubungi anda sebentar lagi.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={`https://wa.me/60163351984?text=Halo%20FK%20Kodana,%20saya%20sudah%20hantar%20form%20Lead%20ID:%20${submittedLead.id}%20(${submittedLead.name})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      LANCARKAN WHATSAPP CHAT SEGERA
                    </a>

                    <button
                      onClick={() => setSubmittedLead(null)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-3 rounded text-xs"
                    >
                      Hantar Borang Baharu
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
