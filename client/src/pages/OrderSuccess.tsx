import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, ShieldCheck, ShoppingBag, ArrowRight } from "lucide-react";

export default function OrderSuccess() {
  // Parse query params for order confirmation details
  const queryParams = new URLSearchParams(window.location.search);
  const orderId = queryParams.get("orderId") || "RT-XXXXXX";
  const customerName = queryParams.get("name") || "Valued Customer";
  const productName = queryParams.get("product") || "Premium Commodities";
  const quantity = queryParams.get("qty") || "0";
  const unit = queryParams.get("unit") || "bags";
  const amount = queryParams.get("amount") || "0";
  const paymentStatus = queryParams.get("paymentStatus") || "Verified (Pending Clearance)";
  const deliveryTime = queryParams.get("deliveryTime") || "3-5 Days";

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg md:ml-56">
      <Navbar />

      <section className="py-20 bg-[#14161F] flex items-center justify-center relative min-h-[70vh]">
        <div className="max-w-md w-full px-4 text-center">
          
          {/* Animated Success Badge */}
          <div className="w-20 h-20 bg-[#C5572D]/10 border border-[#B89656]/35 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#C5572D]/5 animate-pulse">
            <CheckCircle className="w-10 h-10 text-[#C5572D]" />
          </div>

          <h2 className="font-serif text-3xl font-extrabold text-[#F0ECE3] tracking-tight mb-3">Order Confirmed!</h2>
          <p className="text-xs text-[#9A95A8] leading-relaxed max-w-sm mx-auto mb-10">
            Thank you for sourcing with Rajalakshmi Traders. Your wholesale booking has been registered and is queueing for dispatch validation.
          </p>

          {/* Details Card */}
          <Card className="border border-[#B89656]/20 bg-[#1C1F2B] text-left rounded-md shadow-2xl overflow-hidden mb-8">
            <div className="bg-[#14161F]/60 px-6 py-4 border-b border-[#B89656]/15 flex justify-between items-center">
              <span className="text-[10px] text-[#9A95A8] uppercase font-bold tracking-wider">Booking Reference</span>
              <span className="text-xs font-mono font-bold text-[#B89656]">{orderId}</span>
            </div>
            
            <CardContent className="p-6 space-y-4 text-xs">
              <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                <span className="text-[#9A95A8]">Client Name</span>
                <span className="text-[#F0ECE3] font-bold">{customerName}</span>
              </div>
              <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                <span className="text-[#9A95A8]">Ordered Product</span>
                <span className="text-[#F0ECE3] font-bold max-w-[200px] truncate text-right">{productName}</span>
              </div>
              <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                <span className="text-[#9A95A8]">Total Quantity</span>
                <span className="text-[#F0ECE3] font-bold">{quantity} {unit}</span>
              </div>
              <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                <span className="text-[#9A95A8]">Invoice Total</span>
                <span className="text-[#B89656] font-extrabold text-sm">₹{parseInt(amount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                <span className="text-[#9A95A8]">Payment Status</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> {paymentStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9A95A8]">Est. Delivery Time</span>
                <span className="text-[#F0ECE3] font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B89656]" /> {deliveryTime}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/categories">
              <Button className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-6 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all">
                <ShoppingBag className="w-4 h-4" /> Continue Grains Sourcing
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full border-[#B89656]/40 text-[#B89656] hover:bg-[#C5572D]/10 font-bold py-6 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all">
                Return to Home <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
