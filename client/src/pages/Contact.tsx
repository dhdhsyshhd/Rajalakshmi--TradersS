import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Construct WhatsApp message URL for custom inquiry submission
    const formattedMsg = `Wholesale Inquiry:\nName: ${name}\nBusiness: ${businessName || "N/A"}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918885453360?text=${encodeURIComponent(formattedMsg)}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp for instant commercial routing!");
    
    // Clear inputs
    setName("");
    setBusinessName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg md:ml-56">
      <Navbar />

      {/* Main Contact Section */}
      <section className="py-20 bg-[#14161F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] block mb-3">WHOLESALE INQUIRY</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F0ECE3] tracking-tight mb-4">Get in Touch</h2>
            <div className="w-20 h-[1px] bg-[#B89656] mx-auto mb-6"></div>
          </div>

          {/* Contact Cards (Office Location, Phone Desk, Commercial Email) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mb-12">
            <Card className="border border-[#B89656]/20 rounded-md p-6 bg-[#1C1F2B] hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-col items-center pt-2 pb-2">
                <div className="w-10 h-10 rounded-md bg-[#14161F] border border-[#B89656]/25 flex items-center justify-center mb-2 text-[#C5572D]">
                  <MapPin className="w-5 h-5" />
                </div>
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3]">Office Location</CardTitle>
              </CardHeader>
              <CardContent className="text-[#9A95A8] text-[11px] leading-relaxed pt-0 text-center">
                D.No 27 1/2, 1st Ward<br />
                Punganur - 517 247<br />
                Chittoor District, AP
              </CardContent>
            </Card>

            <Card className="border border-[#B89656]/20 rounded-md p-6 bg-[#1C1F2B] hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-col items-center pt-2 pb-2">
                <div className="w-10 h-10 rounded-md bg-[#14161F] border border-[#B89656]/25 flex items-center justify-center mb-2 text-[#C5572D]">
                  <Phone className="w-5 h-5" />
                </div>
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3]">Phone Desk</CardTitle>
              </CardHeader>
              <CardContent className="text-[#9A95A8] text-[11px] leading-relaxed pt-0 text-center flex flex-col gap-1">
                <a href="tel:+918885453360" className="hover:text-[#C5572D] transition-colors font-bold text-xs text-[#B89656]">+91 8885453360</a>
                <a href="tel:+919110571093" className="hover:text-[#C5572D] transition-colors font-bold text-xs text-[#B89656]">+91 9110571093</a>
              </CardContent>
            </Card>

            <Card className="border border-[#B89656]/20 rounded-md p-6 bg-[#1C1F2B] hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-col items-center pt-2 pb-2">
                <div className="w-10 h-10 rounded-md bg-[#14161F] border border-[#B89656]/25 flex items-center justify-center mb-2 text-[#C5572D]">
                  <Mail className="w-5 h-5" />
                </div>
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3]">Commercial Email</CardTitle>
              </CardHeader>
              <CardContent className="text-[#9A95A8] text-[11px] leading-relaxed pt-0 text-center">
                <a href="mailto:rajalakshmitrades@gmail.com" className="hover:text-[#C5572D] transition-colors font-bold text-xs text-[#B89656] break-all">
                  rajalakshmitrades@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Wholesale Contact Form */}
          <div className="max-w-2xl mx-auto w-full">
            <Card className="border border-[#B89656]/20 bg-[#1C1F2B] w-full flex flex-col p-8 rounded-md">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F0ECE3] mb-2">Request Quote &amp; Staples Spec Sheet</h3>
                <p className="text-[#9A95A8] text-xs leading-relaxed mb-6">
                  Enter details below to submit a wholesale inquiry. Direct WhatsApp link will process your specifications instantly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Your Name *</label>
                    <Input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="bg-[#14161F] border-[#B89656]/25 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Business/Mill Name</label>
                    <Input
                      type="text"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Grand Staples Ltd"
                      className="bg-[#14161F] border-[#B89656]/25 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Phone Number *</label>
                    <Input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-[#14161F] border-[#B89656]/25 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Inquiry details *</label>
                    <Textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify commodity demand (e.g. Sona Masuri Rice - 20 Tons, 25kg packaging)..."
                      rows={4}
                      className="bg-[#14161F] border-[#B89656]/25 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D] resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-6 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all">
                    <Send className="w-4 h-4" /> Submit via WhatsApp Desk
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
