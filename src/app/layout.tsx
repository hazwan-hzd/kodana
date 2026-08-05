import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FK Kodana Pest Control Services | Tactic-Grade Termite & Pest Defense",
  description:
    "Licensed Malaysian Pest Control Operator (PCO #SA0365841-K / Co. 1427045-T). Exterra termite baiting, Fipronil sub-slab chemical barrier, HACCP/Halal compliant commercial IPM across Selangor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
