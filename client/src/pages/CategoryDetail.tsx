import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  FileText,
  Phone,
  Building,
  Scale,
  Wheat,
  Bean,
  Flame,
  Droplet,
  Candy,
  Coffee,
  Database,
  Utensils,
  Cookie,
  CupSoda,
  Milk,
  Snowflake,
  Carrot,
  Sprout,
  Leaf,
  Sparkles,
  Layers,
  ChefHat,
  X,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const CATEGORY_IMAGE_MAP: Record<string, string> = {
  rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  "wheat-flour": "https://images.unsplash.com/photo-1574320593440-e4af019d99ea?auto=format&fit=crop&w=600&q=80",
  "pulses-dals": "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80",
  "spices-masalas": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
  "edible-oils": "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  "sugar-jaggery": "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=600&q=80",
  "dry-fruits": "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
  "tea-coffee": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80",
  salt: "https://images.unsplash.com/photo-1618047838221-3c25b810878b?auto=format&fit=crop&w=600&q=80",
  beverages: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
  "dairy-products": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
  "snacks-namkeen": "https://images.unsplash.com/photo-1599490659213-e2b9527b0876?auto=format&fit=crop&w=600&q=80"
};

const getProductImage = (categoryId: number, slug?: string): string => {
  const key = slug || {
    1: "rice",
    2: "wheat-flour",
    3: "pulses-dals",
    4: "spices-masalas",
    5: "edible-oils",
    6: "sugar-jaggery",
    7: "dry-fruits",
    8: "tea-coffee",
    9: "salt",
    10: "beverages",
    11: "dairy-products",
    12: "snacks-namkeen"
  }[categoryId] || "rice";
  return CATEGORY_IMAGE_MAP[key] || CATEGORY_IMAGE_MAP["rice"];
};

// Icon style mapping for banner icons
const CATEGORY_STYLE_MAP: Record<
  string,
  {
    icon: React.ComponentType<any>;
    bgClass: string;
    iconClass: string;
    borderClass: string;
    gradientClass: string;
  }
> = {
  rice: { icon: Leaf, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "wheat-flour": { icon: Wheat, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "pulses-dals": { icon: Bean, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "spices-masalas": { icon: Flame, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "edible-oils": { icon: Droplet, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "sugar-jaggery": { icon: Candy, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "dry-fruits": { icon: Sparkles, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "tea-coffee": { icon: Coffee, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  salt: { icon: Database, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  beverages: { icon: CupSoda, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "dairy-products": { icon: Milk, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" },
  "snacks-namkeen": { icon: Cookie, bgClass: "bg-[#1C1F2B]", iconClass: "text-[#B89656]", borderClass: "border-[#B89656]/30", gradientClass: "from-[#14161F] to-[#1C1F2B]" }
};

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("name-asc");
  const [offset, setOffset] = useState(0);
  const [accumulatedProducts, setAccumulatedProducts] = useState<any[]>([]);

  // Product catalog mode: direct WhatsApp & Phone channels

  // Queries
  const { data: category, isLoading: isCatLoading } = trpc.categories.getBySlug.useQuery({ slug: slug || "" });

  const { data: brandsData } = trpc.products.brands.useQuery(
    { categoryId: category?.id },
    { enabled: !!category?.id }
  );
  const brands = brandsData || [];

  const { data: productsData, isLoading: isProdsLoading, isFetching: isProdsFetching } = trpc.products.list.useQuery(
    {
      limit: 12,
      offset,
      search: debouncedSearch || undefined,
      categoryId: category?.id,
      brand: selectedBrand || undefined,
      sortBy
    },
    {
      enabled: !!category?.id,
    }
  );

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Reset offset and accumulated products when filters or sort change
  useEffect(() => {
    setOffset(0);
    setAccumulatedProducts([]);
  }, [debouncedSearch, selectedBrand, sortBy]);

  // Accumulate products across pagination
  useEffect(() => {
    if (productsData?.items) {
      if (offset === 0) {
        setAccumulatedProducts(productsData.items);
      } else {
        setAccumulatedProducts((prev) => {
          const existingIds = new Set(prev.map((p) => p.id));
          const newItems = productsData.items.filter((p: any) => !existingIds.has(p.id));
          return [...prev, ...newItems];
        });
      }
    }
  }, [productsData?.items, offset]);

  if (isCatLoading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading category details...</p>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Category Not Found</h2>
        <p className="text-gray-500 mb-6">The product category you are looking for does not exist.</p>
        <Link href="/">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const style = CATEGORY_STYLE_MAP[category.slug] || {
    icon: Sparkles,
    bgClass: "bg-emerald-50",
    iconClass: "text-emerald-600",
    borderClass: "border-emerald-100",
    gradientClass: "from-emerald-600 to-emerald-700"
  };
  const BannerIcon = style.icon;

  const isInitialLoading = isProdsLoading || (offset === 0 && isProdsFetching);

  const handleLoadMore = () => {
    setOffset((prev) => prev + 12);
  };

  const getPackSizes = (product: any): string[] => {
    try {
      const parsed = JSON.parse(product.specifications);
      if (parsed && parsed.packSizes) {
        return parsed.packSizes;
      }
    } catch (e) {
      // return default below
    }
    return ["1kg", "5kg", "10kg", "25kg", "50kg"];
  };

  return (
    <div className="min-h-screen bg-[#14161F] text-[#F0ECE3] antialiased selection:bg-[#C5572D] selection:text-white noise-bg">
      {/* Top Utility Bar */}
      <div className="bg-[#1C1F2B] border-b border-[#B89656]/15 py-2 text-center text-[10px] sm:text-xs tracking-[0.15em] text-[#B89656] uppercase font-bold px-4">
        Bulk Orders Across Andhra Pradesh &amp; Telangana · GST Registered Merchant
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#14161F]/90 backdrop-blur-md border-b border-[#B89656]/18 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="p-2 hover:bg-[#1C1F2B] border border-[#B89656]/20 rounded-md cursor-pointer transition-colors text-[#B89656]">
                <ArrowLeft className="w-5 h-5" />
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#C5572D] border-2 border-[#B89656] rounded-full flex items-center justify-center">
                <span className="text-[#F0ECE3] font-serif font-black text-sm">RT</span>
              </div>
              <h1 className="font-serif text-base sm:text-lg font-extrabold text-[#F0ECE3] leading-none">Rajalakshmi Traders</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-[#9A95A8] font-bold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-[#B89656]" />
            <span className="text-[#C5572D]">{category.name}</span>
          </div>
        </div>
      </nav>

      {/* Category Banner */}
      <section className="relative overflow-hidden bg-[#14161F] border-b border-[#B89656]/18 py-16">
        {/* Wheat Watermark Background */}
        <div className="absolute right-12 bottom-0 w-64 h-64 opacity-[0.03] text-[#B89656] pointer-events-none select-none">
          <Wheat className="w-full h-full stroke-[1]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold mb-4 text-[#F0ECE3]">{category.name} Wholesale</h2>
            <p className="text-base text-[#9A95A8] max-w-2xl leading-relaxed">
              {category.description || `Premium quality bulk supply of ${category.name.toLowerCase()} for commercial food services, caterers, and supermarkets across India.`}
            </p>
          </div>
          <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#1C1F2B] border border-[#B89656]/20 rounded-md flex items-center justify-center">
            <BannerIcon className="w-10 h-10 md:w-12 md:h-12 text-[#B89656] stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* Top Brands Grid */}
      {brands.length > 0 && (
        <section className="py-12 bg-[#1C1F2B] border-b border-[#B89656]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center font-serif font-bold text-[#B89656] uppercase tracking-[0.15em] text-xs mb-8">Top Brands We Supply</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {brands.map((brandName: string) => (
                <div
                  key={brandName}
                  onClick={() => setSelectedBrand(brandName === selectedBrand ? null : brandName)}
                  className={`bg-[#14161F] px-6 py-4 rounded-md border transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 hover:-translate-y-0.5 ${
                    selectedBrand === brandName ? "border-[#C5572D] ring-1 ring-[#C5572D]/30" : "border-[#B89656]/20"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#C5572D] flex items-center justify-center text-white font-bold text-sm">
                    {brandName[0]}
                  </div>
                  <span className="font-serif font-bold text-[#F0ECE3] text-sm md:text-base">{brandName}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="py-8 bg-[#F6F1E7] border-b border-[#B89656]/20 sticky top-[95px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Brand Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <Button
              variant={selectedBrand === null ? "default" : "outline"}
              className={`rounded-md px-5 font-bold transition-all ${
                selectedBrand === null 
                  ? "bg-[#C5572D] text-white hover:bg-[#C5572D]/90 border border-[#C5572D]" 
                  : "border-[#B89656]/40 text-[#1C1A17] hover:bg-[#C5572D]/5"
              }`}
              onClick={() => setSelectedBrand(null)}
            >
              All Brands
            </Button>
            {brands.map((brandName: string) => (
              <Button
                key={brandName}
                variant={selectedBrand === brandName ? "default" : "outline"}
                className={`rounded-md px-5 font-bold transition-all ${
                  selectedBrand === brandName 
                    ? "bg-[#C5572D] text-white hover:bg-[#C5572D]/90 border border-[#C5572D]" 
                    : "border-[#B89656]/40 text-[#1C1A17] hover:bg-[#C5572D]/5"
                }`}
                onClick={() => setSelectedBrand(brandName)}
              >
                {brandName}
              </Button>
            ))}
          </div>

          {/* Search bar & Sort selector */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Input
                type="text"
                placeholder={`Search in ${category.name.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-[#B89656]/35 rounded-md focus:border-[#C5572D] focus:ring-[#C5572D] bg-[#1C1F2B] text-[#F0ECE3] placeholder:text-[#9A95A8] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Search className="w-5 h-5 text-[#B89656] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-[#B89656]/35 shadow-sm py-2.5 px-4 bg-[#1C1F2B] text-[#F0ECE3] text-sm cursor-pointer outline-none min-w-[180px]"
            >
              <option value="name-asc">Alphabetical (A-Z)</option>
              <option value="name-desc">Alphabetical (Z-A)</option>
              <option value="moq-asc">MOQ (Low to High)</option>
              <option value="moq-desc">MOQ (High to Low)</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#14161F] min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isInitialLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-[#1C1F2B] border border-[#B89656]/15 rounded-md p-6 flex flex-col h-96">
                  <div className="bg-[#14161F] h-48 rounded-md mb-4"></div>
                  <div className="h-4 bg-[#14161F] rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-[#14161F] rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-[#14161F] rounded w-5/6 mb-4"></div>
                  <div className="mt-auto h-10 bg-[#14161F] rounded-md"></div>
                </div>
              ))}
            </div>
          ) : accumulatedProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#1C1F2B] border border-dashed border-[#B89656]/30 rounded-md p-6 max-w-xl mx-auto">
              <h4 className="font-serif text-xl font-bold text-[#F0ECE3] mb-2">No Products Found</h4>
              <p className="text-[#9A95A8] mb-4">Try adjusting your filters or search term to discover products.</p>
              <Button
                onClick={() => {
                  setSelectedBrand(null);
                  setSearchTerm("");
                  setSortBy("name-asc");
                }}
                className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold rounded-md"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {accumulatedProducts.map((product: any) => {
                  const sizes = getPackSizes(product);
                  return (
                    <Card key={product.id} className="bg-[#1C1F2B] border border-[#B89656]/20 hover:border-[#B89656]/40 hover:-translate-y-1 transition-all duration-300 rounded-md overflow-hidden flex flex-col group h-full">
                      <CardContent className="flex-1 p-6 flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#B89656]/15">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#C5572D] border border-[#B89656]/35 flex items-center justify-center text-white font-bold text-[10px]">
                              {product.brand[0]}
                            </div>
                            <span className="text-xs font-bold text-[#B89656] tracking-wide uppercase">{product.brand}</span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[9px] font-bold tracking-widest uppercase bg-[#14161F] text-[#B89656] px-2.5 py-1 rounded-sm border border-[#B89656]/25">
                              {product.brand} Staple
                            </span>
                            <span className="text-[8px] font-bold text-[#C5572D] uppercase tracking-wider">
                              Bulk Available
                            </span>
                          </div>
                        </div>

                        <h3 className="font-serif font-bold text-[#F0ECE3] text-lg mb-2 group-hover:text-[#C5572D] transition-colors">
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-[#9A95A8] mb-4 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Pack Sizes */}
                        <div className="mb-4">
                          <span className="text-xs text-[#B89656] font-bold uppercase tracking-wider block mb-2">Available Pack Sizes</span>
                          <div className="flex flex-wrap gap-1.5">
                            {sizes.map((size) => (
                              <span key={size} className="text-xs bg-[#C5572D] text-white font-medium px-2.5 py-1 rounded-sm border border-[#C5572D]/20">
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Order & Stock Specs */}
                        <div className="mb-6 grid grid-cols-2 gap-y-3 gap-x-4 border-t border-[#B89656]/15 pt-4 text-xs text-[#9A95A8]">
                          <div>
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Available Stock</span>
                            <span className="text-[#F0ECE3] font-medium">{((product.id * 17) % 850) + 150} {product.unit || 'bags'}</span>
                          </div>
                          <div>
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Min Order (MOQ)</span>
                            <span className="text-[#F0ECE3] font-medium">{product.minimumOrderQuantity || 5} {product.unit || 'bags'}</span>
                          </div>
                          <div className="col-span-2">
                            <span className="text-[#B89656] font-bold block uppercase tracking-widest text-[9px] mb-0.5">Max Order Limit</span>
                            <span className="text-[#F0ECE3] font-medium">100 {product.unit || 'bags'}</span>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-auto pt-4 border-t border-[#B89656]/15 flex flex-col gap-2">
                          <Link href={`/order?productId=${product.id}`} className="w-full">
                            <Button className="w-full bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold py-5 rounded-md text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-[#C5572D]/15">
                              Order Now
                            </Button>
                          </Link>
                          <a
                            href={`https://wa.me/918885453360?text=Hello%20Rajalakshmi%20Traders,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.brand)})%20in%20bulk%20wholesale%20quantity.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                          >
                            <Button variant="outline" className="w-full border-[#B89656]/40 text-[#B89656] hover:bg-[#C5572D]/10 font-bold py-5 rounded-md text-xs flex items-center justify-center gap-1.5">
                              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More Button */}
              {accumulatedProducts.length < (productsData?.total || 0) && (
                <div className="mt-16 flex justify-center">
                  <Button
                    onClick={handleLoadMore}
                    disabled={isProdsFetching}
                    className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-8 py-6 rounded-md shadow-md transition-all duration-300 flex items-center gap-2"
                  >
                    {isProdsFetching ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Loading More...
                      </>
                    ) : (
                      "Load More Products"
                    )}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bulk Inquiry CTA Section */}
      <section className="py-20 bg-[#1C1F2B] border-t border-[#B89656]/20 text-white relative">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.03] text-[#B89656] pointer-events-none select-none">
          <Wheat className="w-full h-full stroke-[1]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold mb-6 text-[#F0ECE3]">Need Bulk Quantity? Contact Us Today</h2>
          <p className="text-base text-[#9A95A8] max-w-xl mx-auto leading-relaxed mb-10">
            Get customized logistics, tax pricing, and contract discounts for continuous monthly wholesale food supply.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918885453360" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#C5572D] hover:bg-[#C5572D]/90 text-white font-bold px-8 py-6 rounded-md text-base transition-all flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" /> WhatsApp Now
              </Button>
            </a>
            <Link href="/order">
              <Button variant="outline" className="border-[#B89656] text-[#B89656] hover:bg-[#C5572D]/10 font-bold px-8 py-6 rounded-md text-base flex items-center gap-2 transition-colors duration-300">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14161F] text-[#9A95A8] py-12 border-t border-[#B89656]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-[#9A95A8] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#C5572D] border border-[#B89656]/50 rounded-full flex items-center justify-center">
              <span className="text-[#F0ECE3] font-serif font-black text-xs">RT</span>
            </div>
            <span className="font-serif font-bold text-[#F0ECE3]">Rajalakshmi Traders</span>
          </div>
          <div className="text-center sm:text-right">
            <p>&copy; 2026 Rajalakshmi Traders. All rights reserved. Premium B2B Wholesale Staples Distribution.</p>
            <p className="mt-1 text-[#9A95A8]/70">Developers: <span className="text-[#B89656] font-medium">NxtRoyals</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
