export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  location: string;
  pestCategory: 'Termite' | 'Cockroach' | 'Rodent' | 'Mosquito' | 'Bedbug' | 'General';
  propertyType: 'Residential Bungalow' | 'Terrace / Semi-D' | 'Commercial Restaurant' | 'Food Factory' | 'Office / Warehouse';
  urgency: 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'New' | 'Scheduled' | 'Inspected' | 'Quoted' | 'Converted' | 'Lost';
  source: 'Threat Evaluator' | 'AI Consultation Chat' | 'Audit Portal' | 'Contact Form';
  notes?: string;
  createdAt: string;
}

// Initial pre-seeded realistic leads for FK Kodana
let leads: Lead[] = [
  {
    id: "KDN-LEAD-001",
    name: "En. Razak Ibrahim",
    phone: "+6012-3891029",
    email: "razak.ibrahim@mydin.com.my",
    location: "Sungai Buloh (Saujana Utama)",
    pestCategory: "Termite",
    propertyType: "Residential Bungalow",
    urgency: "URGENT",
    status: "New",
    source: "Threat Evaluator",
    notes: "Active mud tubes detected near main door frame. Requests Exterra baiting quote.",
    createdAt: "2026-08-05T09:30:00.000Z",
  },
  {
    id: "KDN-LEAD-002",
    name: "Pn. Noraini Hassan",
    phone: "+6019-4820192",
    email: "noraini@restoranselera.my",
    location: "Rawang (Bukit Beruntung)",
    pestCategory: "Cockroach",
    propertyType: "Commercial Restaurant",
    urgency: "HIGH",
    status: "Scheduled",
    source: "AI Consultation Chat",
    notes: "Requires KKM & JAKIM Halal audit-ready monthly IPM program.",
    createdAt: "2026-08-04T16:15:00.000Z",
  },
  {
    id: "KDN-LEAD-003",
    name: "Mr. Kelvin Tan",
    phone: "+6017-8829103",
    email: "kelvin@coalfields-warehouse.com",
    location: "Bandar Seri Coalfields",
    pestCategory: "Rodent",
    propertyType: "Office / Warehouse",
    urgency: "HIGH",
    status: "Quoted",
    source: "Contact Form",
    notes: "Perimeter TRBS station deployment needed for 15,000 sqft logistics warehouse.",
    createdAt: "2026-08-03T11:45:00.000Z",
  },
  {
    id: "KDN-LEAD-004",
    name: "Datin Hajah Salmah",
    phone: "+6013-2091823",
    email: "salmah.hj@gmail.com",
    location: "Kota Damansara",
    pestCategory: "Termite",
    propertyType: "Terrace / Semi-D",
    urgency: "URGENT",
    status: "Converted",
    source: "Audit Portal",
    notes: "Completed 3-year warranty subterranean soil barrier injection.",
    createdAt: "2026-08-01T14:20:00.000Z",
  },
];

export function getLeads(): Lead[] {
  return [...leads];
}

export function addLead(newLead: Omit<Lead, 'id' | 'createdAt' | 'status'>): Lead {
  const created: Lead = {
    ...newLead,
    id: `KDN-LEAD-${String(leads.length + 1).padStart(3, '0')}`,
    status: 'New',
    createdAt: new Date().toISOString(),
  };
  leads = [created, ...leads];
  return created;
}

export function updateLeadStatus(id: string, status: Lead['status']): Lead | null {
  const leadIndex = leads.findIndex((l) => l.id === id);
  if (leadIndex === -1) return null;
  leads[leadIndex] = { ...leads[leadIndex], status };
  return leads[leadIndex];
}
