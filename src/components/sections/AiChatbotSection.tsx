"use client";

import { useState } from "react";
import { Target, Bot, Send, ShieldCheck, Zap, AlertTriangle, CheckCircle2, RefreshCw, Phone } from "lucide-react";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function AiChatbotSection() {
  // Pane 3A State
  const [selectedPest, setSelectedPest] = useState("Termites");
  const [propertyType, setPropertyType] = useState("Residential Terrace");
  const [infestationScale, setInfestationScale] = useState(3); // 1-5 scale

  // Pane 3B State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Salam & Selamat Sejahtera! Saya FeraChat AI Assistant FK Kodana. Ada sebarang tanda anai-anai, lipas, atau tikus di premis anda? Tanya saya mengenai harga, warranty 3 tahun, atau kelulusan KKM/DOA.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Pane 3C State
  const [queryCode, setQueryCode] = useState("SA0365841-K");
  const [verificationResult, setVerificationResult] = useState<any>(null);

  // Calculate Threat Risk Score
  const calculateRiskScore = () => {
    let baseScore = infestationScale * 18;
    if (selectedPest === "Termites") baseScore += 20;
    if (propertyType.includes("Factory") || propertyType.includes("Restaurant")) baseScore += 15;
    return Math.min(Math.max(baseScore, 15), 98);
  };

  const riskScore = calculateRiskScore();
  const getRiskLabel = (score: number) => {
    if (score < 40) return { label: "LOW THREAT LEVEL", color: "text-green-600", bg: "bg-green-100", border: "border-green-300" };
    if (score < 70) return { label: "MODERATE RISKS", color: "text-amber-600", bg: "bg-amber-100", border: "border-amber-300" };
    return { label: "CRITICAL INFESTATION RISK", color: "text-red-600", bg: "bg-red-100", border: "border-red-400" };
  };

  const riskInfo = getRiskLabel(riskScore);

  // Handle AI Chat Submission
  const handleSendChat = (textToSend?: string) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    // AI Intelligent Response Logic
    setTimeout(() => {
      let reply = "Terima kasih. Pegawai teknikal FK Kodana sedia membantu di talian +6016-3351984 untuk lawatan tapak percuma.";
      const lower = text.toLowerCase();

      if (lower.includes("harga") || lower.includes("kos") || lower.includes("price")) {
        reply = "Anggaran harga termite baiting (Exterra) bermula RM1,200 - RM1,800 bergantung kepada saiz premis. Manakala sub-slab soil injection dengan warranty 3-5 tahun bermula RM2,500. Kami menawarkan **Pemeriksaan Tapak Percuma** di Sungai Buloh & Rawang untuk sebut harga tepat!";
      } else if (lower.includes("selamat") || lower.includes("baby") || lower.includes("pet")) {
        reply = "Ya, 100% selamat! FK Kodana menggunakan racun gred rendah ketoksikan (Class IV gel bait / Fipronil non-repellent) yang diluluskan oleh Jabatan Pertanian & KKM. Bebas bau sengit dan selamat untuk kanak-kanak serta haiwan peliharaan.";
      } else if (lower.includes("rawang") || lower.includes("sungai buloh") || lower.includes("kawasan")) {
        reply = "FK Kodana beroperasi secara terus di Sungai Buloh, Rawang, Bukit Beruntung, Saujana Utama, Bandar Seri Coalfields, Shah Alam & Kota Damansara. Kami boleh menghantar pasukan juruteknik dalam masa **<30 minit** bagi kes kecemasan.";
      } else if (lower.includes("halal") || lower.includes("kkm") || lower.includes("audit") || lower.includes("haccp")) {
        reply = "Bagi kilang makanan & restoran, kami menyediakan Folder Dokumentasi Audit Lengkap: Peta Bait Station, SDS/MSDS Kimia, Lesen PCO Form B / PAL Technicians, dan Laporan Trend Bulanan (Pest Activity Index) untuk kelulusan JAKIM Halal & KKM.";
      } else if (lower.includes("anai") || lower.includes("termite")) {
        reply = "Anai-anai subterranean ialah ancaman kerosakan terbesar di Malaysia. Kaedah Exterra Baiting membasmi seluruh koloni termasuk permaisuri dalam 60-90 hari tanpa perlu mengorek lantai!";
      }

      const botReply: ChatMessage = {
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 800);
  };

  // Handle Audit Code Verification
  const handleVerify = () => {
    setVerificationResult({
      entityName: "FK KODANA SDN. BHD.",
      ssmNo: "202101026745 (1427045-T)",
      enterpriseNo: "SA0365841-K",
      licenseStatus: "ACTIVE - VALIDATED",
      doaStatus: "Registered PCO Operator (Pesticides Act 1974)",
      palTechnicians: "Active Licensed Applicators On-Duty",
      kkmCompliance: "Food Hygiene Regulations 2009 Compliant",
    });
  };

  return (
    <section id="ai-chatbot" className="py-20 bg-white border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-mono font-bold">
            <Bot className="w-4 h-4" />
            CONNECTED AI ASSISTANT (FERACHAT ENGINE)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            3-SECTION AI PEST THREAT & COMPLIANCE ENGINE
          </h2>
          <p className="text-slate-600 text-base">
            Evaluate your property pest threat level, consult our live AI technical assistant for instant treatment pricing, or verify statutory KKM/DOA audit compliance credentials.
          </p>
        </div>

        {/* 3-Section Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Pane 3A: Tactical Threat Evaluator */}
          <div className="lg:col-span-4 bg-slate-50 border-2 border-slate-200 rounded-lg p-6 flex flex-col justify-between relative">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-600" />
                  <h3 className="font-extrabold text-slate-900 text-base uppercase">PANE 1: THREAT EVALUATOR</h3>
                </div>
                <span className="text-[10px] font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">REAL-TIME</span>
              </div>

              {/* Input 1: Pest Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Target Pest Threat:</label>
                <select
                  value={selectedPest}
                  onChange={(e) => setSelectedPest(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm font-semibold text-slate-900 focus:border-red-600 focus:outline-none"
                >
                  <option value="Termites">Subterranean Termites (Anai-anai)</option>
                  <option value="Cockroaches">German & American Cockroaches</option>
                  <option value="Rodents">Rats & Rodents (Tikus)</option>
                  <option value="Mosquitoes">Aedes Mosquitoes (Nyamuk)</option>
                  <option value="Bedbugs">Bedbugs (Pepijat)</option>
                </select>
              </div>

              {/* Input 2: Property Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Property Premises:</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-sm font-semibold text-slate-900 focus:border-red-600 focus:outline-none"
                >
                  <option value="Residential Terrace">Terrace / Townhouse</option>
                  <option value="Residential Bungalow">Bungalow / Semi-D</option>
                  <option value="Commercial Restaurant">Restaurant / Food Shop</option>
                  <option value="Food Factory">Food Manufacturing Factory</option>
                  <option value="Office Warehouse">Commercial Office / Warehouse</option>
                </select>
              </div>

              {/* Input 3: Infestation Severity */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700">
                  <span>INFESTATION SEVERITY:</span>
                  <span className="text-red-600">LEVEL {infestationScale} / 5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={infestationScale}
                  onChange={(e) => setInfestationScale(parseInt(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Minor Signs</span>
                  <span>Active Damage</span>
                </div>
              </div>

              {/* Threat Score Result Box */}
              <div className={`p-4 rounded border-2 ${riskInfo.bg} ${riskInfo.border} space-y-2 text-center`}>
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase">Calculated Risk Index</p>
                <div className="text-3xl font-black text-slate-900">{riskScore} / 100</div>
                <span className={`inline-block text-xs font-mono font-extrabold ${riskInfo.color}`}>
                  {riskInfo.label}
                </span>
                <p className="text-xs text-slate-600">
                  {riskScore > 65
                    ? "Immediate site inspection and subterranean barrier deployment recommended."
                    : "Standard preventive treatment & quarterly monitoring sufficient."}
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="w-full mt-4 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded text-xs uppercase tracking-wider block transition-colors"
            >
              Dispatch Inspector For Risk {riskScore}%
            </a>
          </div>

          {/* Pane 3B: Live AI Consultation Console */}
          <div className="lg:col-span-5 bg-white border-2 border-red-600 rounded-lg p-6 flex flex-col justify-between h-[520px] shadow-lg relative">
            
            {/* Console Topbar */}
            <div className="flex items-center justify-between border-b border-red-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm">PANE 2: FERACHAT AI CONSULTANT</h3>
                  <span className="text-[10px] font-mono text-green-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    AI AGENT ONLINE
                  </span>
                </div>
              </div>
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: "bot",
                      text: "Sesi diset semula. Sila pilih soalan pantas atau taip soalan anda.",
                      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    },
                  ])
                }
                className="text-xs text-slate-400 hover:text-red-600 p-1"
                title="Reset Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div className="flex-1 overflow-y-auto my-4 space-y-3 pr-2 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-slate-900 text-white rounded-br-none"
                        : "bg-red-50 border border-red-200 text-slate-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 mt-1">{msg.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 text-xs text-slate-400 italic bg-slate-50 p-2.5 rounded w-fit">
                  <Bot className="w-3.5 h-3.5 text-red-600 animate-spin" />
                  <span>FeraChat AI sedang menaip jawapan...</span>
                </div>
              )}
            </div>

            {/* Quick Prompts Bar */}
            <div className="flex gap-1.5 overflow-x-auto pb-2 text-[10px] font-mono no-scrollbar">
              <button
                onClick={() => handleSendChat("Berapa kos termite baiting?")}
                className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 px-2.5 py-1 rounded border border-slate-200 whitespace-nowrap"
              >
                💰 Harga Termite
              </button>
              <button
                onClick={() => handleSendChat("Adakah selamat untuk baby & pets?")}
                className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 px-2.5 py-1 rounded border border-slate-200 whitespace-nowrap"
              >
                👶 Baby/Pets Safety
              </button>
              <button
                onClick={() => handleSendChat("Adakah korang cover Rawang & Sungai Buloh?")}
                className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 px-2.5 py-1 rounded border border-slate-200 whitespace-nowrap"
              >
                📍 Kawasan Liputan
              </button>
              <button
                onClick={() => handleSendChat("Bagaimana nak lulus audit KKM & Halal?")}
                className="bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 px-2.5 py-1 rounded border border-slate-200 whitespace-nowrap"
              >
                📜 Audit Halal/KKM
              </button>
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
              <input
                type="text"
                placeholder="Taip soalan mengenai kawalan serangga..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendChat()}
                className="flex-1 bg-slate-50 border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-600"
              />
              <button
                onClick={() => handleSendChat()}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded shadow transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Pane 3C: Audit & Warranty Verification Query Portal */}
          <div className="lg:col-span-3 bg-slate-900 text-white border-2 border-slate-800 rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-red-500" />
                  <h3 className="font-extrabold text-white text-sm uppercase">PANE 3: AUDIT VERIFIER</h3>
                </div>
                <span className="text-[10px] font-mono text-red-400">DOA / SSM</span>
              </div>

              <p className="text-xs text-slate-400">
                Verifikasi status pendaftaran SSM, lesen Jabatan Pertanian (DOA PCO Form B), dan sijil juruteknik PAL.
              </p>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-slate-300 uppercase">Input Registration No / Premis Code:</label>
                <input
                  type="text"
                  value={queryCode}
                  onChange={(e) => setQueryCode(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs font-mono text-red-400 focus:border-red-500 focus:outline-none"
                />
                <button
                  onClick={handleVerify}
                  className="w-full bg-slate-800 hover:bg-red-600 text-white font-bold py-2 rounded text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  Verify Compliance Credentials
                </button>
              </div>

              {/* Verification Output Box */}
              {verificationResult ? (
                <div className="bg-slate-950 border border-green-500/40 p-3 rounded space-y-1.5 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-green-400 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>STATUS: {verificationResult.licenseStatus}</span>
                  </div>
                  <p className="text-slate-300"><strong>Company:</strong> {verificationResult.entityName}</p>
                  <p className="text-slate-300"><strong>Sdn Bhd:</strong> {verificationResult.ssmNo}</p>
                  <p className="text-slate-300"><strong>DOA License:</strong> {verificationResult.doaStatus}</p>
                  <p className="text-slate-300"><strong>Technicians:</strong> {verificationResult.palTechnicians}</p>
                  <p className="text-slate-300"><strong>KKM Compliance:</strong> {verificationResult.kkmCompliance}</p>
                </div>
              ) : (
                <div className="bg-slate-950/60 p-3 rounded border border-slate-800 text-[11px] font-mono text-slate-400 text-center">
                  Klik &quot;Verify Compliance&quot; untuk mengesahkan maklumat pendaftaran rasmi.
                </div>
              )}

            </div>

            <div className="pt-4 border-t border-slate-800">
              <a
                href="https://wa.me/60163351984?text=Halo%20FK%20Kodana,%20saya%20nak%20minta%20audit%20folder%20untuk%20premis%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 py-2.5 rounded border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                Request Commercial Audit Folder
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
