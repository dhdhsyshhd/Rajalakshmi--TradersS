import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#14161F] text-[#F0ECE3] noise-bg">
      <Card className="w-full max-w-md mx-4 border border-[#B89656]/20 bg-[#1C1F2B] rounded-md shadow-sm relative overflow-hidden">
        {/* Decorative corner seal stamp */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#B89656]/30 bg-[#14161F] flex items-center justify-center text-[7px] text-[#B89656] font-bold tracking-[0.1em] shadow-sm uppercase z-20 select-none pointer-events-none">
          RT SEAL
        </div>

        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center shadow-lg shadow-[#C5572D]/15">
              <span className="text-[#F0ECE3] font-serif font-black text-2xl">RT</span>
            </div>
          </div>

          <h1 className="font-serif text-6xl font-black text-[#C5572D] mb-2">404</h1>

          <h2 className="font-serif text-xl font-bold text-[#F0ECE3] mb-4">
            Page Not Found
          </h2>

          <p className="text-[#9A95A8] text-sm mb-8 leading-relaxed max-w-sm mx-auto">
            The wholesale catalog page you are looking for does not exist. It may have been relocated or updated.
          </p>

          <div
            id="not-found-button-group"
            className="flex justify-center"
          >
            <Button
              onClick={handleGoHome}
              className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-8 py-5 rounded-md transition-all flex items-center justify-center"
            >
              <Home className="w-4 h-4 mr-2 text-[#B89656]" />
              Go Back to Catalog Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
