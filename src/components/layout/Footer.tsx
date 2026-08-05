import Link from "next/link";
import { Target, Shield, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t-4 border-red-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Brand & SSM Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  FK <span className="text-red-500">KODANA</span>
                </span>
                <p className="text-[11px] text-slate-400 font-mono">PEST CONTROL SERVICES</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Licensed Malaysian Pest Control Operator providing low-toxicity termite baiting, sub-slab chemical barriers, and HACCP/Halal compliant commercial IPM across Selangor.
            </p>

            <div className="text-xs font-mono text-slate-400 space-y-1 bg-slate-800/60 p-3 rounded border border-slate-700">
              <p><strong className="text-red-400">Sdn Bhd:</strong> 202101026745 (1427045-T)</p>
              <p><strong className="text-red-400">Enterprise:</strong> SA0365841-K</p>
              <p><strong className="text-red-400">DOA e-Lesen:</strong> PCO Form B Registered</p>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-red-600/40">
              Tactic Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Exterra / Sentricon Termite Baiting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Sub-Slab Fipronil Chemical Injection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Commercial HACCP/Halal Food IPM
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Tamper-Resistant Rodent TRBS
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Mosquito ULV Misting & Larviciding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                Bedbug Thermal Steam Remediation
              </li>
            </ul>
          </div>

          {/* Col 3: Coverage Area */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-red-600/40">
              Selangor Coverage Zones
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              {["Sungai Buloh", "Rawang", "Bukit Beruntung", "Bandar Seri Coalfields", "Saujana Utama", "Kota Damansara", "Shah Alam", "Subang Jaya", "Petaling Jaya"].map((zone) => (
                <span key={zone} className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded text-slate-300 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-500" />
                  {zone}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              *Same-day emergency response available in Northern Selangor corridor.
            </p>
          </div>

          {/* Col 4: Contact & Direct Dispatch */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-red-600/40">
              Emergency Dispatch
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500" />
                +6016-335 1984
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                info@fkkodana.my
              </p>
              <p className="flex items-start gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                Sungai Buloh & Rawang Operations HQ, Selangor, Malaysia.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/admin/crm"
                className="inline-flex items-center gap-2 text-xs font-mono bg-red-600 hover:bg-red-700 text-white px-3.5 py-2 rounded font-semibold transition-colors"
              >
                Access CRM Internal Lead Desk
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 FK Kodana Sdn. Bhd. (1427045-T). All Rights Reserved.</p>
          <p className="font-mono text-slate-400">
            Powered by <span className="text-red-500 font-bold">FeraChat AI Engine</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
