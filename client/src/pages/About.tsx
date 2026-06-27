import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Truck, Zap, Phone, Wheat } from "lucide-react";

export default function About() {

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg">
      <Navbar />

      {/* About Us Section */}
      <section className="py-20 bg-[#F6F1E7] text-[#1C1A17] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] block mb-3">ESTABLISHED TRADING HOUSE</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1C1A17] tracking-tight mb-4">Three Generations of Trust</h2>
            <div className="w-20 h-[1px] bg-[#B89656] mx-auto mb-6"></div>
            <p className="text-base text-[#6B6458] max-w-2xl mx-auto leading-relaxed">
              Your premier sourcing partner supplying commercial food staples, grains, and wholesale necessities across southern India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">Our Heritage &amp; Mission</h3>
              <p className="text-sm text-[#6B6458] leading-relaxed">
                Serving wholesale distributors and retail outlets with consistent quality grades, maintaining continuous supply standards for over two decades. We maintain direct connections with millers and agricultural hubs across India to guarantee steady, cost-effective wholesale channels for key grocery commodities.
              </p>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-[#B89656]/30 md:pl-12 pt-8 md:pt-0 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#1C1A17]">Our Modern Scale</h3>
              <p className="text-sm text-[#6B6458] leading-relaxed">
                Adapting traditional mercantile trust to high-capacity warehousing, scheduling logistics across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu. Equipped with strict hygiene certifications, spec-grade products, and custom wholesale invoice processing.
              </p>
            </div>
          </div>

          {/* Horizontal Milestones Timeline */}
          <div className="mt-16 pt-8 border-t border-[#B89656]/20">
            <h4 className="text-center text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] mb-12">Our Mercantile Journey</h4>
            <div className="relative">
              <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-[#B89656]/40 -translate-y-1/2"></div>
              <div className="relative grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 rounded-full bg-[#C5572D] border border-[#B89656] z-10 mb-4"></div>
                  <span className="font-serif text-lg font-bold text-[#1C1A17]">2006</span>
                  <span className="text-[10px] uppercase text-[#6B6458] tracking-wider mt-1 font-bold">Founded in Punganur</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 rounded-full bg-[#C5572D] border border-[#B89656] z-10 mb-4"></div>
                  <span className="font-serif text-lg font-bold text-[#1C1A17]">2015</span>
                  <span className="text-[10px] uppercase text-[#6B6458] tracking-wider mt-1 font-bold">Regional Expansion</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-3 h-3 rounded-full bg-[#C5572D] border border-[#B89656] z-10 mb-4"></div>
                  <span className="font-serif text-lg font-bold text-[#1C1A17]">2026</span>
                  <span className="text-[10px] uppercase text-[#6B6458] tracking-wider mt-1 font-bold">B2B Catalog Portal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#14161F] border-t border-b border-[#B89656]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] block mb-3">OUR VALUE SYSTEM</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F0ECE3] tracking-tight mb-4">Why Choose Rajalakshmi Traders</h2>
            <div className="w-20 h-[1px] bg-[#B89656] mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-[#1C1F2B] p-8 rounded-md border border-[#B89656]/20 shadow-sm hover:translate-y-[-2px] transition-all">
              <div className="w-12 h-12 bg-[#14161F] border border-[#B89656]/25 rounded-md flex items-center justify-center mx-auto mb-6 text-[#C5572D]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F0ECE3] mb-3">Quality Assured</h3>
              <p className="text-[#9A95A8] text-xs leading-relaxed">Strict quality grading checks to confirm grain purity and standard wholesale packing safety.</p>
            </div>
            
            <div className="text-center bg-[#1C1F2B] p-8 rounded-md border border-[#B89656]/20 shadow-sm hover:translate-y-[-2px] transition-all">
              <div className="w-12 h-12 bg-[#14161F] border border-[#B89656]/25 rounded-md flex items-center justify-center mx-auto mb-6 text-[#C5572D]">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F0ECE3] mb-3">Reliable Logistics</h3>
              <p className="text-[#9A95A8] text-xs leading-relaxed">Swift transport linkages for continuous, high-volume shipping directly to commercial points.</p>
            </div>
            
            <div className="text-center bg-[#1C1F2B] p-8 rounded-md border border-[#B89656]/20 shadow-sm hover:translate-y-[-2px] transition-all">
              <div className="w-12 h-12 bg-[#14161F] border border-[#B89656]/25 rounded-md flex items-center justify-center mx-auto mb-6 text-[#C5572D]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F0ECE3] mb-3">Direct Sourcing</h3>
              <p className="text-[#9A95A8] text-xs leading-relaxed">Direct farm and manufacturer pipelines that provide highly competitive commercial wholesale prices.</p>
            </div>
            
            <div className="text-center bg-[#1C1F2B] p-8 rounded-md border border-[#B89656]/20 shadow-sm hover:translate-y-[-2px] transition-all">
              <div className="w-12 h-12 bg-[#14161F] border border-[#B89656]/25 rounded-md flex items-center justify-center mx-auto mb-6 text-[#C5572D]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F0ECE3] mb-3">Dedicated Support</h3>
              <p className="text-[#9A95A8] text-xs leading-relaxed">Direct lines of communication to relationship managers for bulk ordering processing.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
