import { useState } from "react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowLeft, HelpCircle, X, FileText, User, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PRODUCTS, getUnitPrice } from "@/data/staticData";

export default function Order() {
  const [, setLocation] = useLocation();

  const queryParams = new URLSearchParams(window.location.search);
  const initialProductId = queryParams.get("productId") ? parseInt(queryParams.get("productId")!) : null;

  const [customerName, setCustomerName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(initialProductId);
  const [quantity, setQuantity] = useState<number>(20);
  const [showGuide, setShowGuide] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const products = PRODUCTS.filter(p => p.isActive);
  const selectedProduct = products.find(p => p.id === selectedProductId);
  const unitPrice = selectedProduct ? getUnitPrice(selectedProduct.id) : 0;
  const totalAmount = unitPrice * quantity;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductId) { toast.error("Please select a product"); return; }
    if (quantity < 20) { toast.error("Wholesale order quantity must be at least 20 units"); return; }
    if (!customerName || !mobileNumber || !deliveryAddress || !city || !stateName || !pinCode) { toast.error("Please fill in all required fields"); return; }
    if (mobileNumber.replace(/\D/g, "").length < 10) { toast.error("Please enter a valid 10-digit mobile number"); return; }
    if (pinCode.replace(/\D/g, "").length !== 6) { toast.error("Please enter a valid 6-digit PIN code"); return; }

    setIsSubmitting(true);

    // Generate order ID locally
    const orderId = "RT-" + Date.now().toString(36).toUpperCase();

    // Save to localStorage for Orders history page
    const order = {
      orderId,
      customerName,
      mobileNumber,
      email,
      deliveryAddress: `${deliveryAddress}, ${city}, ${stateName} - ${pinCode}`,
      productId: selectedProductId,
      productName: selectedProduct?.name || "",
      brand: selectedProduct?.brand || "",
      unit: selectedProduct?.unit || "bags",
      quantity,
      unitPrice,
      totalAmount,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("rt_orders") || "[]");
    localStorage.setItem("rt_orders", JSON.stringify([order, ...existing]));

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Order placed! Redirecting to payment...");
      const params = new URLSearchParams({
        orderId,
        name: customerName,
        product: selectedProduct?.name || "Premium Grains",
        qty: quantity.toString(),
        unit: selectedProduct?.unit || "bags",
        amount: totalAmount.toString(),
      });
      setLocation(`/payment?${params.toString()}`);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg md:ml-56">
      <Navbar />

      <section className="py-12 bg-[#14161F] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-[#B89656]/15">
            <div>
              <Link href="/categories" className="flex items-center gap-1.5 text-xs text-[#B89656] hover:text-[#C5572D] uppercase font-bold tracking-wider mb-2 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
              </Link>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F0ECE3]">Wholesale Checkout</h2>
              <p className="text-[#9A95A8] text-xs mt-1">Complete your bulk booking details below and proceed to payment page.</p>
            </div>
            <Button type="button" onClick={() => setShowGuide(true)} className="bg-[#1C1F2B] border border-[#B89656]/30 text-[#B89656] hover:bg-[#C5572D]/10 hover:text-[#C5572D] font-bold rounded-md flex items-center gap-2 text-xs py-5">
              <HelpCircle className="w-4 h-4" /> How to Order Guide
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full space-y-6">

            {/* Customer Details */}
            <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md shadow-lg">
              <CardHeader className="pb-3 border-b border-[#B89656]/15">
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#B89656]" /> Customer Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Customer Name *</label>
                    <Input type="text" required value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Grand Sourcing Ltd" className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Mobile Number *</label>
                    <Input type="tel" required value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="9876543210" className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Email Address (Optional)</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="wholesale@company.com" className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md shadow-lg">
              <CardHeader className="pb-3 border-b border-[#B89656]/15">
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B89656]" /> Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Street / Building Address *</label>
                  <Textarea required value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} placeholder="Building name, street details, distribution depot..." className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D] resize-none" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">City *</label>
                    <Input type="text" required value={city} onChange={(e) => setCity(e.target.value)} placeholder="Vijayawada" className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">State *</label>
                    <Input type="text" required value={stateName} onChange={(e) => setStateName(e.target.value)} placeholder="Andhra Pradesh" className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">PIN Code *</label>
                    <Input type="text" required value={pinCode} onChange={(e) => setPinCode(e.target.value)} placeholder="520001" maxLength={6} className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Product Selection */}
            <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md shadow-lg">
              <CardHeader className="pb-3 border-b border-[#B89656]/15">
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#B89656]" /> Selected Products
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">Commodity / Item *</label>
                    <select
                      value={selectedProductId || ""}
                      onChange={(e) => setSelectedProductId(e.target.value ? parseInt(e.target.value) : null)}
                      className="w-full rounded-md border border-[#B89656]/20 shadow-sm py-2.5 px-3 bg-[#14161F] text-[#F0ECE3] text-sm cursor-pointer outline-none focus:border-[#C5572D]"
                      required
                    >
                      <option value="">Select a Product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>{p.name} ({p.brand})</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-[#B89656] font-bold block mb-1">
                      Quantity ({selectedProduct?.unit || "bags"}) *{" "}
                      <span className={quantity < 20 ? "text-red-500 font-bold ml-1 animate-pulse" : "text-[#B89656] font-bold ml-1"}>(Min. 20)</span>
                    </label>
                    <Input type="number" required value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value) || 0)} className="bg-[#14161F] border-[#B89656]/20 text-[#F0ECE3] placeholder:text-[#9A95A8]/30 focus:border-[#C5572D]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md shadow-lg">
              <CardHeader className="pb-3 border-b border-[#B89656]/15">
                <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] text-center">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 max-w-md mx-auto">
                {selectedProduct ? (
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center text-[#9A95A8]"><span>Product</span><span className="text-[#F0ECE3] font-bold text-right max-w-[200px] truncate">{selectedProduct.name}</span></div>
                    <div className="flex justify-between items-center text-[#9A95A8]"><span>Brand</span><span className="text-[#B89656] font-bold">{selectedProduct.brand}</span></div>
                    <div className="flex justify-between items-center text-[#9A95A8]"><span>Quantity</span><span className={quantity < 20 ? "text-red-500 font-bold" : "text-[#F0ECE3] font-bold"}>{quantity} {selectedProduct.unit}</span></div>
                    <div className="flex justify-between items-center text-[#9A95A8]"><span>Unit Rate</span><span className="text-[#F0ECE3] font-bold">₹{unitPrice.toLocaleString("en-IN")} / {selectedProduct.unit}</span></div>
                    <div className="pt-3 border-t border-[#B89656]/15 flex justify-between items-center text-sm">
                      <span className="text-[#B89656] font-bold uppercase tracking-wider text-[10px]">Total Invoice Amount</span>
                      <span className="text-[#C5572D] font-extrabold text-base">₹{totalAmount.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#9A95A8] text-center py-4">Select a product to view invoice summary.</p>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={isSubmitting} className="w-full max-w-md bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-6 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#C5572D]/20">
                {isSubmitting ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</> : <>Place Order <ArrowRight className="w-4 h-4" /></>}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* How To Order Guide Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setShowGuide(false)} />
          <div className="relative bg-[#1C1F2B] border border-[#B89656]/30 max-w-md w-full rounded-xl p-6 shadow-2xl z-10">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#B89656]/15">
              <h3 className="font-serif text-lg font-bold text-[#F0ECE3]">How to Order Guide</h3>
              <Button variant="ghost" onClick={() => setShowGuide(false)} className="text-[#9A95A8] hover:text-white p-1 hover:bg-transparent"><X className="w-5 h-5 text-[#B89656]" /></Button>
            </div>
            <div className="space-y-4 text-xs text-[#9A95A8]">
              {["Fill in your name, mobile number and delivery address.", "Select the product and enter the quantity (min 20).", "Review the order summary and total amount.", "Click Place Order to proceed to payment.", "Upload payment screenshot on the payment page.", "We'll confirm and dispatch within 3–5 business days."].map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#C5572D]/20 border border-[#C5572D] flex items-center justify-center text-[#C5572D] font-bold shrink-0">{i + 1}</div>
                  <p className="leading-relaxed pt-0.5 text-[#F0ECE3]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
