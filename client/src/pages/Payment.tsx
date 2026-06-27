import { useState } from "react";
import { Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  HelpCircle, 
  X, 
  Upload, 
  CreditCard, 
  QrCode, 
  CheckCircle,
  FileText,
  Sparkles,
  ShieldCheck,
  Calendar,
  Building
} from "lucide-react";

export default function Payment() {
  const [location, setLocation] = useLocation();
  
  // Parse query params for checkout order references
  const queryParams = new URLSearchParams(window.location.search);
  const orderId = queryParams.get("orderId") || "RT-XXXXXX";
  const customerName = queryParams.get("name") || "Valued Customer";
  const productName = queryParams.get("product") || "Premium Commodities";
  const quantity = queryParams.get("qty") || "0";
  const unit = queryParams.get("unit") || "bags";
  const amount = queryParams.get("amount") || "0";

  // Guide and Payment States
  const [showGuide, setShowGuide] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("UPI");
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const handleScreenshotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setScreenshotFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!screenshotFile) {
      toast.error("Please upload the payment confirmation screenshot to confirm order");
      return;
    }

    setIsConfirming(true);
    // Simulate screenshot validation and order state confirmation
    setTimeout(() => {
      setIsConfirming(false);
      toast.success("Payment Confirmation Verified!");
      
      const params = new URLSearchParams({
        orderId,
        name: customerName,
        product: productName,
        qty: quantity,
        unit,
        amount,
        paymentStatus: "Payment Verified (Pending Clearance)",
        deliveryTime: "3-5 Days"
      });
      setLocation(`/order-success?${params.toString()}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg">
      <Navbar />

      <section className="py-12 bg-[#14161F] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Guide Trigger */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-[#B89656]/15">
            <div>
              <Link href="/order" className="flex items-center gap-1.5 text-xs text-[#B89656] hover:text-[#C5572D] uppercase font-bold tracking-wider mb-2 transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Order details
              </Link>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#F0ECE3]">Invoice Payment</h2>
              <p className="text-[#9A95A8] text-xs mt-1">Please finalize payment for reference booking id: <span className="font-mono font-bold text-[#F0ECE3]">{orderId}</span></p>
            </div>
            
            <Button
              type="button"
              onClick={() => setShowGuide(true)}
              className="bg-[#1C1F2B] border border-[#B89656]/30 text-[#B89656] hover:bg-[#C5572D]/10 hover:text-[#C5572D] font-bold rounded-md flex items-center gap-2 text-xs py-5"
            >
              <HelpCircle className="w-4 h-4" /> How to Order Guide
            </Button>
          </div>

          <form onSubmit={handleConfirmOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Order details recap */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Order Recap Summary */}
              <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md">
                <CardHeader className="pb-3 border-b border-[#B89656]/15">
                  <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#B89656]" /> Sourcing Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4 text-xs">
                  <div className="flex justify-between border-b border-[#B89656]/10 pb-2.5">
                    <span className="text-[#9A95A8]">Client Name</span>
                    <span className="text-[#F0ECE3] font-bold">{customerName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#B89656]/10 pb-2.5">
                    <span className="text-[#9A95A8]">Commodity</span>
                    <span className="text-[#F0ECE3] font-bold max-w-[250px] truncate text-right">{productName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#B89656]/10 pb-2.5">
                    <span className="text-[#9A95A8]">Requested Volume</span>
                    <span className="text-[#F0ECE3] font-bold">{quantity} {unit}</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center text-sm">
                    <span className="text-[#B89656] font-bold uppercase tracking-wider text-[10px]">Grand Invoice Total</span>
                    <span className="text-[#C5572D] font-extrabold text-base">₹{parseInt(amount).toLocaleString('en-IN')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Upload Screenshot Panel */}
              <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md">
                <CardHeader className="pb-3 border-b border-[#B89656]/15">
                  <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3] flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#B89656]" /> Upload Transfer Proof
                  </CardTitle>
                  <CardDescription className="text-[10px] text-[#9A95A8]">
                    Upload a screenshot of the completed transfer (UPI reference/Bank receipt) to process order validation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  
                  {/* File Upload Zone */}
                  <div className="relative border-2 border-dashed border-[#B89656]/20 rounded-md p-6 bg-[#14161F] text-center hover:border-[#B89656]/40 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleScreenshotChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      required
                    />
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Upload className="w-5 h-5 text-[#B89656] animate-bounce" />
                      <span className="text-[10px] text-[#9A95A8] font-bold">Drag or Click to upload confirmation PNG/JPG</span>
                    </div>
                  </div>

                  {/* Screenshot File Upload Preview */}
                  {previewUrl && (
                    <div className="border border-[#B89656]/30 rounded-md p-3 bg-[#14161F]/60 flex items-center gap-3">
                      <img src={previewUrl} className="w-12 h-12 object-cover rounded-sm border border-[#B89656]/15" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-[#F0ECE3] truncate">{screenshotFile?.name}</p>
                        <p className="text-[8px] text-[#9A95A8]">{(screenshotFile!.size / 1024).toFixed(1)} KB</p>
                      </div>
                      <Button
                        type="button"
                        onClick={() => { setScreenshotFile(null); setPreviewUrl(null); }}
                        className="text-[10px] bg-red-600/20 text-red-400 hover:bg-red-600/30 px-2.5 py-1 rounded"
                      >
                        Remove
                      </Button>
                    </div>
                  )}

                  {/* Confirm Order Button */}
                  <Button 
                    type="submit" 
                    disabled={isConfirming}
                    className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-6 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#C5572D]/20 mt-4"
                  >
                    {isConfirming ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting Order Confirmation...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" /> Confirm Order
                      </>
                    )}
                  </Button>

                </CardContent>
              </Card>

            </div>

            {/* Right Column: Payment Selector & Display */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Payment Option Selector Grid */}
              <Card className="border border-[#B89656]/20 bg-[#1C1F2B] rounded-md">
                <CardHeader className="pb-3 border-b border-[#B89656]/15">
                  <CardTitle className="font-serif text-sm font-bold text-[#F0ECE3]">Payment Options</CardTitle>
                  <CardDescription className="text-[10px] text-[#9A95A8] leading-relaxed">
                    Select a payment option below and execute verification transfer.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  
                  {/* Grid Selector Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "UPI", icon: CreditCard },
                      { name: "QR Code", icon: QrCode },
                      { name: "Google Pay", icon: Sparkles },
                      { name: "PhonePe", icon: Sparkles },
                      { name: "Paytm", icon: Sparkles },
                      { name: "Bank Transfer", icon: Sparkles }
                    ].map((pm) => (
                      <button
                        key={pm.name}
                        type="button"
                        onClick={() => setSelectedPayment(pm.name)}
                        className={`p-3.5 rounded-md border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5 ${
                          selectedPayment === pm.name
                            ? "bg-[#C5572D] border-[#B89656] text-white shadow-md"
                            : "bg-[#14161F] border-[#B89656]/15 text-[#9A95A8] hover:border-[#B89656]/30 hover:text-white"
                        }`}
                      >
                        <span className="text-[10px] font-bold leading-tight">{pm.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Payment Details Display Panel */}
                  <div className="bg-[#14161F] border border-[#B89656]/15 p-6 rounded-md space-y-6">
                    {selectedPayment !== "Bank Transfer" ? (
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Custom QR Code Render */}
                        <div className="bg-white p-3 rounded-md border border-[#B89656]/30 shadow-md">
                          <svg className="w-36 h-36 text-[#14161F]" viewBox="0 0 100 100" fill="currentColor">
                            <rect x="0" y="0" width="25" height="25" />
                            <rect x="5" y="5" width="15" height="15" fill="white" />
                            <rect x="8" y="8" width="9" height="9" />
                            <rect x="75" y="0" width="25" height="25" />
                            <rect x="80" y="5" width="15" height="15" fill="white" />
                            <rect x="83" y="8" width="9" height="9" />
                            <rect x="0" y="75" width="25" height="25" />
                            <rect x="5" y="80" width="15" height="15" fill="white" />
                            <rect x="8" y="83" width="9" height="9" />
                            <rect x="35" y="10" width="10" height="5" />
                            <rect x="50" y="0" width="5" height="15" />
                            <rect x="60" y="10" width="5" height="5" />
                            <rect x="35" y="35" width="5" height="20" />
                            <rect x="45" y="45" width="15" height="10" />
                            <rect x="10" y="45" width="15" height="5" />
                            <rect x="45" y="75" width="10" height="10" />
                            <rect x="65" y="80" width="20" height="5" />
                            <rect x="75" y="65" width="5" height="10" />
                            <rect x="85" y="45" width="10" height="20" />
                            <rect x="80" y="35" width="15" height="5" />
                          </svg>
                        </div>
                        <div className="text-xs">
                          <span className="text-[#9A95A8] uppercase font-bold tracking-widest text-[8px] block mb-1">UPI Sourcing Account ID</span>
                          <span className="text-[#F0ECE3] font-mono font-bold text-sm bg-[#1C1F2B] px-4 py-2 border border-[#B89656]/15 rounded-sm">
                            rajalakshmitraders@okaxis
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 text-xs">
                        <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                          <span className="text-[#9A95A8]">Account Holder</span>
                          <span className="text-[#F0ECE3] font-bold">Rajalakshmi Traders</span>
                        </div>
                        <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                          <span className="text-[#9A95A8]">Bank Name</span>
                          <span className="text-[#F0ECE3] font-bold">State Bank of India</span>
                        </div>
                        <div className="flex justify-between border-b border-[#B89656]/10 pb-2">
                          <span className="text-[#9A95A8]">Account Number</span>
                          <span className="text-[#F0ECE3] font-mono font-bold text-[#B89656]">39485762019</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#9A95A8]">IFSC Code</span>
                          <span className="text-[#F0ECE3] font-mono font-bold text-[#B89656]">SBIN0004052</span>
                        </div>
                      </div>
                    )}
                  </div>

                </CardContent>
              </Card>

            </div>

          </form>

        </div>
      </section>

      {/* Expandable How To Order Guide Modal Dialog */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setShowGuide(false)} />
          <div className="relative bg-[#1C1F2B] border border-[#B89656]/30 max-w-md w-full rounded-xl p-6 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-[#B89656]/15">
              <h3 className="font-serif text-lg font-bold text-[#F0ECE3]">How to Order Guide</h3>
              <Button variant="ghost" onClick={() => setShowGuide(false)} className="text-[#9A95A8] hover:text-white p-1 hover:bg-transparent">
                <X className="w-5 h-5 text-[#B89656]" />
              </Button>
            </div>
            
            <div className="space-y-4 text-xs text-[#9A95A8]">
              {[
                "Select the products you want to purchase.",
                "Review your order details.",
                "Choose a payment method.",
                "Complete the payment.",
                "Share the payment confirmation if required.",
                "Your order will be verified and processed.",
                "Delivery details will be shared after confirmation."
              ].map((step, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#C5572D]/20 border border-[#C5572D] flex items-center justify-center text-[#C5572D] font-bold shrink-0">
                    {index + 1}
                  </div>
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
