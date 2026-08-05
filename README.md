# FK Kodana Pest Control Web Application & AI Lead Engine

Official web application and AI-powered lead capture platform for **FK Kodana Pest Control Services** (`FK Kodana Sdn. Bhd.` - Co. No. 202101026745 / 1427045-T).

## 🚀 Overview

Built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion, featuring a high-contrast modern design (White background with heavy Red accents and tactical military reticle target HUD visuals).

### 📐 5 Core Website Sections
1. **Hero Section:** Tactical target lock-on graphic, live HUD threat scanner, and instant booking CTAs.
2. **Services Info:** 6 technical service cards (Termite Baiting, Soil Injection, HACCP/Halal IPM, Rodent Lock-Down, Mosquito ULV, Bed Bug Steam) with interactive detail modals and warranty badges.
3. **AI Chatbot Experience (3-Pane FeraChat Engine):**
   * *Pane 3A (Threat Evaluator):* Interactive pest threat selector + risk score meter.
   * *Pane 3B (Live AI Consultation Console):* Conversational AI pest consultant for treatment options, DOA safety, and pricing.
   * *Pane 3C (Audit & Warranty Portal):* KKM/DOA PCO Form B & PAL credential verifier.
4. **Additional Info:** SSM corporate identity, DOA e-Lesen LRMP details, interactive Selangor coverage zone selector (Sungai Buloh, Rawang, Coalfields, etc.), client testimonials, and FAQ accordion.
5. **Tactical Contact Form:** Real-time validated booking requisition form with direct WhatsApp dispatch.

### 📊 Built-in Lead Capture CRM Dashboard (`/admin/crm`)
- Real-time lead tracking Kanban & Table view.
- Lead status pipeline (`New`, `Scheduled`, `Inspected`, `Quoted`, `Converted`, `Lost`).
- Lead source attribution & priority matrix.
- Direct WhatsApp action buttons and CSV export utility.

## 🛠️ Local Setup

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the application, or [http://localhost:3000/admin/crm](http://localhost:3000/admin/crm) for the CRM dashboard.
