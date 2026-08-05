import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AiChatbotSection from "@/components/sections/AiChatbotSection";
import AdditionalInfoSection from "@/components/sections/AdditionalInfoSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Services Info */}
        <ServicesSection />

        {/* Section 3: AI Chatbot Experience (3 Panes) */}
        <AiChatbotSection />

        {/* Section 4: Additional Info & FAQs */}
        <AdditionalInfoSection />

        {/* Section 5: Contact & Lead Dispatch Form */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
