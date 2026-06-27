import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ClipboardList, Clock, MapPin, User, Phone, MessageCircle, Wheat, Trash2
} from "lucide-react";
import { getUnitPrice } from "@/data/staticData";

export default function Orders() {
  // Read orders from localStorage
  const [orders, setOrders] = useState<any[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("rt_orders") || "[]");
    } catch {
      return [];
    }
  });

  const clearOrders = () => {
    localStorage.removeItem("rt_orders");
    setOrders([]);
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg md:ml-56">
      <Navbar />

      <section className="py-16 bg-[#14161F] relative min-h-[75vh]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#B89656] uppercase tracking-[0.15em] block mb-3">WHOLESALE LOGISTICS</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#F0ECE3] tracking-tight mb-4">Order History</h2>
            <div className="w-20 h-[1px] bg-[#B89656] mx-auto mb-6"></div>
            <p className="text-sm text-[#9A95A8] max-w-xl mx-auto leading-relaxed">
              Track the dispatch status, invoice receipts, and transit updates of your registered wholesale bookings.
            </p>
          </div>

          {orders.length === 0 ? (
            /* Empty State */
            <div className="text-center py-16 bg-[#1C1F2B] border border-dashed border-[#B89656]/30 rounded-md p-8 max-w-xl mx-auto">
              <ClipboardList className="w-12 h-12 text-[#B89656]/60 mx-auto mb-4" />
              <h4 className="font-serif text-xl font-bold text-[#F0ECE3] mb-2">No Orders Yet</h4>
              <p className="text-[#9A95A8] text-sm leading-relaxed mb-6">
                You haven't placed any wholesale orders yet. Explore our catalog to place your first order.
              </p>
              <Link href="/categories">
                <Button className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-6 py-5 rounded-md text-xs">
                  Browse Commodities
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Clear All button */}
              <div className="flex justify-end mb-6 max-w-3xl mx-auto">
                <Button
                  variant="outline"
                  onClick={clearOrders}
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs flex items-center gap-1.5 py-4 font-bold"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear All Orders
                </Button>
              </div>

              {/* Order Cards */}
              <div className="space-y-6 max-w-3xl mx-auto">
                {orders.map((order: any, idx: number) => {
                  const orderDate = order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
                    : "Just Now";
                  const amount = order.totalAmount || (getUnitPrice(order.productId) * order.quantity);

                  return (
                    <Card key={idx} className="border border-[#B89656]/20 bg-[#1C1F2B] hover:border-[#B89656]/35 transition-all duration-300 rounded-md shadow-md overflow-hidden">
                      {/* Card Header */}
                      <div className="bg-[#14161F]/60 px-6 py-4 border-b border-[#B89656]/15 flex flex-wrap justify-between items-center gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#9A95A8] uppercase font-bold tracking-wider">Booking ID</span>
                          <span className="text-xs font-mono font-bold text-[#B89656]">{order.orderId}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#9A95A8]">
                          <Clock className="w-3.5 h-3.5 text-[#B89656]" /> {orderDate}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                          {/* Column 1: Customer */}
                          <div className="space-y-3 text-xs text-[#9A95A8]">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-[#B89656] shrink-0" />
                              <div>
                                <span className="block text-[8px] uppercase tracking-widest text-[#B89656] font-bold">Client Name</span>
                                <span className="text-[#F0ECE3] font-bold text-xs">{order.customerName}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-[#B89656] shrink-0" />
                              <div>
                                <span className="block text-[8px] uppercase tracking-widest text-[#B89656] font-bold">Contact Number</span>
                                <span className="text-[#F0ECE3] font-mono font-medium">{order.mobileNumber}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-[#B89656] shrink-0" />
                              <div>
                                <span className="block text-[8px] uppercase tracking-widest text-[#B89656] font-bold">Delivery Address</span>
                                <span className="text-[#F0ECE3] font-medium leading-relaxed">{order.deliveryAddress}</span>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Product & Pricing */}
                          <div className="bg-[#14161F]/40 border border-[#B89656]/10 p-4 rounded-md flex flex-col justify-between">
                            <div className="space-y-2">
                              <span className="text-[8px] uppercase tracking-widest text-[#B89656] font-bold block mb-1">Items Booked</span>
                              <div className="flex justify-between items-center text-xs">
                                <div className="flex items-center gap-1.5 text-[#F0ECE3] font-bold">
                                  <Wheat className="w-3.5 h-3.5 text-[#C5572D]" />
                                  <span>{order.productName} ({order.brand})</span>
                                </div>
                                <span className="text-[#9A95A8] font-mono">{order.quantity} {order.unit}</span>
                              </div>
                            </div>
                            <div className="border-t border-[#B89656]/15 pt-3 mt-4 flex justify-between items-center">
                              <div>
                                <span className="text-[8px] uppercase tracking-widest text-[#B89656] font-bold block">Status</span>
                                <span className="text-amber-400 font-bold text-[10px] uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-sm">
                                  {order.status || "Pending"}
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-[8px] uppercase tracking-widest text-[#B89656] font-bold block">Invoice Amount</span>
                                <span className="text-[#C5572D] font-extrabold text-sm">₹{amount.toLocaleString("en-IN")}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* WhatsApp Inquiry */}
                        <div className="mt-6 pt-4 border-t border-[#B89656]/15 flex justify-end">
                          <a
                            href={`https://wa.me/918885453360?text=Hello%20Rajalakshmi%20Traders,%20I%20am%20inquiring%20about%20Order%20ID%20${order.orderId}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" className="border-[#B89656]/40 text-[#B89656] hover:bg-[#C5572D]/10 text-xs py-4 px-4 flex items-center gap-1.5 font-bold rounded-md">
                              <MessageCircle className="w-4 h-4" /> Inquiry on WhatsApp
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
