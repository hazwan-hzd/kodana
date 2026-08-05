"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, Target, Phone, Download, Filter, Search, RefreshCw, ArrowLeft, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Lead } from "@/lib/leads-store";

export default function CrmDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [pestFilter, setPestFilter] = useState("ALL");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Lead['status']) => {
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["Lead ID", "Name", "Phone", "Location", "Pest Category", "Property Type", "Urgency", "Status", "Source", "Created At"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      l.phone,
      `"${l.location}"`,
      l.pestCategory,
      `"${l.propertyType}"`,
      l.urgency,
      l.status,
      l.source,
      l.createdAt,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `fk_kodana_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || lead.status === statusFilter;
    const matchesPest = pestFilter === "ALL" || lead.pestCategory === pestFilter;

    return matchesSearch && matchesStatus && matchesPest;
  });

  const totalLeads = leads.length;
  const urgentCount = leads.filter((l) => l.urgency === "URGENT").length;
  const convertedCount = leads.filter((l) => l.status === "Converted").length;
  const newCount = leads.filter((l) => l.status === "New").length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      
      {/* Top Bar */}
      <header className="bg-slate-900 text-white border-b-2 border-red-600 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-white flex items-center gap-1 text-xs font-mono">
              <ArrowLeft className="w-4 h-4" />
              Main Website
            </Link>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h1 className="font-extrabold text-lg tracking-tight">
                FK KODANA <span className="text-red-500 font-mono">LEAD CAPTURE CRM</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded text-xs font-mono flex items-center gap-1"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>

            <button
              onClick={handleExportCSV}
              className="bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold px-3.5 py-2 rounded flex items-center gap-1.5 shadow"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono font-bold text-slate-500 uppercase">Total Captured Leads</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">{totalLeads}</h3>
            </div>
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono font-bold text-slate-500 uppercase">New Pending Action</p>
              <h3 className="text-3xl font-black text-red-600 mt-1">{newCount}</h3>
            </div>
            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono font-bold text-slate-500 uppercase">Urgent Infestations</p>
              <h3 className="text-3xl font-black text-amber-600 mt-1">{urgentCount}</h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-mono font-bold text-slate-500 uppercase">Converted Jobs</p>
              <h3 className="text-3xl font-black text-green-600 mt-1">{convertedCount}</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama, lokasi atau Lead ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded pl-9 pr-3 py-2 text-xs font-mono focus:outline-none focus:border-red-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs font-mono">
            <div className="flex items-center gap-1 text-slate-500">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 font-bold focus:outline-none"
            >
              <option value="ALL">All Statuses</option>
              <option value="New">New</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Inspected">Inspected</option>
              <option value="Quoted">Quoted</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </select>

            <div className="flex items-center gap-1 text-slate-500">
              <span>Pest:</span>
            </div>
            <select
              value={pestFilter}
              onChange={(e) => setPestFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 font-bold focus:outline-none"
            >
              <option value="ALL">All Pests</option>
              <option value="Termite">Termite</option>
              <option value="Cockroach">Cockroach</option>
              <option value="Rodent">Rodent</option>
              <option value="Mosquito">Mosquito</option>
              <option value="Bedbug">Bedbug</option>
            </select>
          </div>
        </div>

        {/* Lead Table Container */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[11px] border-b border-red-600">
                  <th className="p-3">ID & Date</th>
                  <th className="p-3">Client Contact</th>
                  <th className="p-3">Location & Premise</th>
                  <th className="p-3">Pest Threat</th>
                  <th className="p-3">Lead Source</th>
                  <th className="p-3">Urgency</th>
                  <th className="p-3">Status Pipeline</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                      
                      {/* ID & Date */}
                      <td className="p-3 font-mono">
                        <span className="font-bold text-red-600 block">{lead.id}</span>
                        <span className="text-[10px] text-slate-400">
                          {new Date(lead.createdAt).toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </td>

                      {/* Contact Info */}
                      <td className="p-3">
                        <strong className="text-slate-900 block text-sm">{lead.name}</strong>
                        <span className="font-mono text-slate-600">{lead.phone}</span>
                      </td>

                      {/* Location & Premise */}
                      <td className="p-3">
                        <span className="font-bold text-slate-800 block">{lead.location}</span>
                        <span className="text-[10px] text-slate-500 font-mono">{lead.propertyType}</span>
                      </td>

                      {/* Pest Category */}
                      <td className="p-3">
                        <span className="inline-block bg-red-50 text-red-700 font-mono font-bold px-2 py-0.5 rounded border border-red-200">
                          {lead.pestCategory}
                        </span>
                      </td>

                      {/* Source */}
                      <td className="p-3 font-mono text-[11px]">
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {lead.source}
                        </span>
                      </td>

                      {/* Urgency Pill */}
                      <td className="p-3 font-mono font-bold">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            lead.urgency === "URGENT"
                              ? "bg-red-600 text-white animate-pulse"
                              : lead.urgency === "HIGH"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {lead.urgency}
                        </span>
                      </td>

                      {/* Status Dropdown */}
                      <td className="p-3 font-mono">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                          className={`text-xs font-bold rounded px-2 py-1 border focus:outline-none ${
                            lead.status === "New"
                              ? "bg-red-50 text-red-700 border-red-300"
                              : lead.status === "Converted"
                              ? "bg-green-50 text-green-700 border-green-300"
                              : "bg-slate-100 text-slate-800 border-slate-300"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Inspected">Inspected</option>
                          <option value="Quoted">Quoted</option>
                          <option value="Converted">Converted</option>
                          <option value="Lost">Lost</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="p-3 text-right">
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}?text=Halo%20${encodeURIComponent(lead.name)},%20saya%20dari%20FK%20Kodana%20Pest%20Control%20merujuk%20permohonan%20${encodeURIComponent(lead.pestCategory)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-mono text-[11px] font-bold px-2.5 py-1.5 rounded shadow transition-colors"
                        >
                          <Phone className="w-3 h-3" />
                          WhatsApp
                        </a>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-slate-500 font-mono">
                      Tiada data lead dijumpai bagi carian ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
