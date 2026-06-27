import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Wheat, Shield, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLocation(`/categories?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      setLocation("/categories");
    }
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] flex flex-col antialiased selection:bg-[#C5572D] selection:text-white noise-bg">
      <Navbar />

      {/* Top Search Bar (Above all Home Page content) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 w-full">
        <form onSubmit={handleSearch} className="relative flex items-center max-w-3xl mx-auto group">
          {/* Magnifying Glass Icon inside the input field */}
          <div className="absolute left-4 text-[#B89656]/70 group-focus-within:text-[#C5572D] transition-colors duration-300 pointer-events-none">
            <Search className="w-5 h-5" />
          </div>
          <Input
            type="text"
            placeholder="Search our premium wholesale staples catalog (Rice, Flour, Pulses, Spices)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1C1F2B] border-2 border-[#B89656]/20 hover:border-[#B89656]/40 text-[#F0ECE3] placeholder:text-[#9A95A8]/45 focus:border-[#C5572D] focus:ring-0 h-14 rounded-xl pl-12 pr-28 text-sm w-full shadow-lg shadow-black/20 group-hover:shadow-black/25 transition-all duration-300"
          />
          <Button
            type="submit"
            className="absolute right-2 h-10 bg-[#C5572D] hover:bg-[#C5572D]/90 text-[#F0ECE3] font-bold px-6 rounded-lg transition-all duration-300 shadow-md border border-[#B89656]/20 hover:scale-[1.02]"
          >
            Search
          </Button>
        </form>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#14161F] pt-12 pb-16 border-b border-[#B89656]/15 flex-1 flex flex-col justify-center">
        {/* Wheat Watermark Background */}
        <div className="absolute right-12 bottom-0 w-80 h-80 opacity-[0.04] text-[#B89656] pointer-events-none select-none">
          <Wheat className="w-full h-full stroke-[1]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-bold text-[#B89656] tracking-[0.2em] uppercase mb-4">
              Direct Milling Hub Sourcing Portal
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-[#F0ECE3]">
              Three Generations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B89656] to-[#C5572D]">of Trust &amp; Quality</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9A95A8] mb-12 leading-relaxed max-w-2xl">
              Partnering with commercial distributors, grocery chains, and retail outlets across South India to deliver spec-grade staples directly from mills.
            </p>
          </div>

          {/* Main Option Redirections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-5xl mx-auto">
            {/* Option 1: Catalog */}
            <Link href="/categories">
              <Card className="group bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/50 transition-all duration-300 rounded-md cursor-pointer overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-[#B89656]/5">
                <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#14161F] border border-[#B89656]/20 flex items-center justify-center text-[#B89656] mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Wheat className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-[#F0ECE3] text-xl mb-3 group-hover:text-[#C5572D] transition-colors">
                      Browse Catalog
                    </h3>
                    <p className="text-xs text-[#9A95A8] leading-relaxed mb-6">
                      Explore our wholesale grain staples, dals, millets, spices, dry fruits, and oils with spec packaging sizes.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B89656] font-bold uppercase tracking-wider group-hover:text-[#C5572D] transition-colors">
                    View Catalog <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Option 2: About Us */}
            <Link href="/about">
              <Card className="group bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/50 transition-all duration-300 rounded-md cursor-pointer overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-[#B89656]/5">
                <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#14161F] border border-[#B89656]/20 flex items-center justify-center text-[#B89656] mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-[#F0ECE3] text-xl mb-3 group-hover:text-[#C5572D] transition-colors">
                      Our Heritage
                    </h3>
                    <p className="text-xs text-[#9A95A8] leading-relaxed mb-6">
                      Learn about our established trading legacy, quality grading standards, and continuous regional logistics networks.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B89656] font-bold uppercase tracking-wider group-hover:text-[#C5572D] transition-colors">
                    Read Our Story <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Option 3: Contact */}
            <Link href="/contact">
              <Card className="group bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/50 transition-all duration-300 rounded-md cursor-pointer overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-[#B89656]/5">
                <CardContent className="p-8 flex flex-col h-full justify-between items-start text-left">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#14161F] border border-[#B89656]/20 flex items-center justify-center text-[#B89656] mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif font-bold text-[#F0ECE3] text-xl mb-3 group-hover:text-[#C5572D] transition-colors">
                      Wholesale Desk
                    </h3>
                    <p className="text-xs text-[#9A95A8] leading-relaxed mb-6">
                      Request custom quotes, access spec sheets, view office location map, and contact our relation managers.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#B89656] font-bold uppercase tracking-wider group-hover:text-[#C5572D] transition-colors">
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918885453360"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#C5572D] text-[#F0ECE3] p-4 rounded-full shadow-lg hover:bg-[#C5572D]/90 transition-all duration-300 hover:scale-110 z-40 hover:ring-4 hover:ring-[#B89656]/30"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
