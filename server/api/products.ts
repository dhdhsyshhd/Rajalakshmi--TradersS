// Running in in-memory catalog mode

export const MOCK_CATEGORIES = [
  { id: 1, name: "Rice", slug: "rice", description: "Premium Basmati & Non-Basmati Rice", image: "" },
  { id: 2, name: "Wheat & Flour", slug: "wheat-flour", description: "Wheat, Atta, Maida & Sooji", image: "" },
  { id: 3, name: "Pulses & Dals", slug: "pulses-dals", description: "All varieties of Indian dals and pulses", image: "" },
  { id: 4, name: "Spices & Masalas", slug: "spices-masalas", description: "Whole spices and blended masalas", image: "" },
  { id: 5, name: "Edible Oils", slug: "edible-oils", description: "Sunflower, Groundnut, Mustard & Palm Oil", image: "" },
  { id: 6, name: "Sugar & Jaggery", slug: "sugar-jaggery", description: "Refined Sugar, Brown Sugar & Jaggery", image: "" },
  { id: 7, name: "Dry Fruits", slug: "dry-fruits", description: "Almonds, Cashews, Raisins & Pistachios", image: "" },
  { id: 8, name: "Tea & Coffee", slug: "tea-coffee", description: "Premium Indian Tea and Coffee", image: "" },
  { id: 9, name: "Salt", slug: "salt", description: "Iodized, Rock & Industrial Salt", image: "" },
  { id: 10, name: "Beverages", slug: "beverages", description: "Juices, Soft Drinks and Energy Drinks in Bulk", image: "" },
  { id: 11, name: "Dairy Products", slug: "dairy-products", description: "Ghee, Butter, Milk Powder and Cheese", image: "" },
  { id: 12, name: "Snacks & Namkeen", slug: "snacks-namkeen", description: "Indian Snacks, Chips and Namkeen", image: "" }
];

export const MOCK_PRODUCTS = [
  // 1. RICE
  {
    id: 1,
    categoryId: 1,
    name: "Classic Basmati Rice",
    brand: "India Gate",
    description: "Premium aged long-grain Basmati rice, ideal for royal biryanis and special occasions.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Premium A" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    categoryId: 1,
    name: "Super Basmati Rice",
    brand: "India Gate",
    description: "High-aroma, slender grain Basmati rice for premium daily catering and pulav.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Premium" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    categoryId: 1,
    name: "Mogra Rice",
    brand: "India Gate",
    description: "Broken grain Basmati rice with rich aroma, perfect for daily business use, khichdi, and kheer.",
    specifications: JSON.stringify({ packSizes: ["10kg", "25kg", "50kg"], origin: "India", grade: "Standard" }),
    unit: "25 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    categoryId: 1,
    name: "Traditional Basmati Rice",
    brand: "Daawat",
    description: "Aged to perfection, long-slender grains with premium aroma and texture for fine dining.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Super Premium" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    categoryId: 1,
    name: "Rozana Super Basmati",
    brand: "Daawat",
    description: "Mid-sized Basmati grains suitable for daily household and restaurant meals.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Daily Standard" }),
    unit: "25 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    categoryId: 1,
    name: "Biryani Special Rice",
    brand: "Fortune",
    description: "Extra long grain rice that doubles in size upon cooking. Ideal for catering companies.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Biryani Grade" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    categoryId: 1,
    name: "Everyday Basmati Rice",
    brand: "Fortune",
    description: "Aromatic rice suited for daily business meals, office cafeterias, and bulk food services.",
    specifications: JSON.stringify({ packSizes: ["10kg", "25kg", "50kg"], origin: "India", grade: "Standard" }),
    unit: "25 kg Bag",
    minimumOrderQuantity: 30,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    categoryId: 1,
    name: "Authentic Biryani Rice",
    brand: "Kohinoor",
    description: "Authentic long-grain Basmati rice picked from the foothills of Himalayas.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Biryani Grade" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 2. WHEAT & FLOUR
  {
    id: 20,
    categoryId: 2,
    name: "Shudh Chakki Atta",
    brand: "Aashirvaad",
    description: "100% whole wheat flour, stone-ground to ensure retention of essential nutrients.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Standard" }),
    unit: "10 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 21,
    categoryId: 2,
    name: "Select Sharbati Atta",
    brand: "Aashirvaad",
    description: "Made from premium Sharbati wheat grains from Sehore, Madhya Pradesh.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg"], origin: "India", grade: "Premium" }),
    unit: "10 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 22,
    categoryId: 2,
    name: "Chakki Fresh Atta",
    brand: "Pillsbury",
    description: "High fiber whole wheat flour for soft, fluffy, and nutritious rotis.",
    specifications: JSON.stringify({ packSizes: ["5kg", "10kg", "25kg", "50kg"], origin: "India", grade: "Standard" }),
    unit: "10 kg Bag",
    minimumOrderQuantity: 25,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 3. PULSES & DALS
  {
    id: 30,
    categoryId: 3,
    name: "Unpolished Toor Dal",
    brand: "Tata Sampann",
    description: "Premium unpolished pigeon peas (Arhar Dal), free from chemical coating.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "30kg"], origin: "India", grade: "Grade A" }),
    unit: "30 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 31,
    categoryId: 3,
    name: "Unpolished Chana Dal",
    brand: "Tata Sampann",
    description: "Cleaned and sorted baby chickpeas split, rich in dietary fiber.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "30kg"], origin: "India", grade: "Grade A" }),
    unit: "30 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 32,
    categoryId: 3,
    name: "Unpolished Moong Dal",
    brand: "Tata Sampann",
    description: "Yellow split moong dal, rich in proteins, processed hygienically.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "30kg"], origin: "India", grade: "Grade A" }),
    unit: "30 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 4. SPICES & MASALAS
  {
    id: 40,
    categoryId: 4,
    name: "Deggi Mirch Powder",
    brand: "MDH",
    description: "Special blend spice providing bright red color and mild hot taste to curries.",
    specifications: JSON.stringify({ packSizes: ["100g", "500g", "1kg", "10kg"], origin: "India", grade: "Commercial" }),
    unit: "10 kg Carton",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 41,
    categoryId: 4,
    name: "Chana Masala Blend",
    brand: "MDH",
    description: "Authentic spice blend for chickpeas, processed under strict quality control.",
    specifications: JSON.stringify({ packSizes: ["100g", "500g", "5kg"], origin: "India", grade: "Commercial" }),
    unit: "5 kg Carton",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 42,
    categoryId: 4,
    name: "Kashmiri Tikhalal Chili",
    brand: "Everest",
    description: "Finely ground hot red chilies, delivering intense heat and bright color.",
    specifications: JSON.stringify({ packSizes: ["500g", "1kg", "10kg"], origin: "India", grade: "Premium" }),
    unit: "10 kg Box",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 43,
    categoryId: 4,
    name: "Kitchen King Masala",
    brand: "Everest",
    description: "The classic all-purpose spice mix for vegetable curries and gravies.",
    specifications: JSON.stringify({ packSizes: ["100g", "500g", "5kg"], origin: "India", grade: "Commercial" }),
    unit: "5 kg Carton",
    minimumOrderQuantity: 12,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 44,
    categoryId: 4,
    name: "Premium Turmeric Powder",
    brand: "Catch",
    description: "High curcumin yellow turmeric powder, steam-sterilized to preserve freshness.",
    specifications: JSON.stringify({ packSizes: ["500g", "1kg", "10kg"], origin: "India", grade: "Premium" }),
    unit: "10 kg Carton",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 5. EDIBLE OILS
  {
    id: 50,
    categoryId: 5,
    name: "Kachi Ghani Mustard Oil",
    brand: "Fortune",
    description: "Traditional cold-pressed mustard oil with high pungency and health benefits.",
    specifications: JSON.stringify({ packSizes: ["1L", "5L", "15L"], origin: "India", grade: "Pure Cold Pressed" }),
    unit: "15 L Tin",
    minimumOrderQuantity: 30,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 51,
    categoryId: 5,
    name: "Refined Sunflower Oil",
    brand: "Dhara",
    description: "Light and healthy refined sunflower cooking oil, fortified with Vitamin A & D.",
    specifications: JSON.stringify({ packSizes: ["1L", "5L", "15L"], origin: "India", grade: "Refined Grade" }),
    unit: "15 L Tin",
    minimumOrderQuantity: 30,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 52,
    categoryId: 5,
    name: "Gold Blend Oil",
    brand: "Saffola",
    description: "Multisource healthy oil, blend of Rice Bran Oil and Sunflower Oil.",
    specifications: JSON.stringify({ packSizes: ["1L", "5L", "15L"], origin: "India", grade: "Heart Health" }),
    unit: "15 L Tin",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 6. SUGAR & JAGGERY
  {
    id: 60,
    categoryId: 6,
    name: "Pure Sugar S30",
    brand: "Madhur",
    description: "Hygienically packed, sulfur-free white refined cane sugar.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "50kg"], origin: "India", grade: "S30 Fine" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 61,
    categoryId: 6,
    name: "Premium Refined Sugar",
    brand: "Mawana",
    description: "Large crystal sugar, perfect for confectionery and bulk commercial applications.",
    specifications: JSON.stringify({ packSizes: ["50kg"], origin: "India", grade: "M30 Commercial" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 7. DRY FRUITS
  {
    id: 70,
    categoryId: 7,
    name: "California Almonds",
    brand: "Nutraj",
    description: "Premium large raw almonds, cleaned, graded, and packed in carton boxes.",
    specifications: JSON.stringify({ packSizes: ["500g", "1kg", "10kg"], origin: "USA", grade: "Fancy Extra" }),
    unit: "10 kg Carton",
    minimumOrderQuantity: 5,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 71,
    categoryId: 7,
    name: "Premium cashew Nuts (W240)",
    brand: "Nutraj",
    description: "Whole white cashew kernels of grade W240, dry roasted and sorted.",
    specifications: JSON.stringify({ packSizes: ["1kg", "10kg"], origin: "India", grade: "W240" }),
    unit: "10 kg Carton",
    minimumOrderQuantity: 5,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 72,
    categoryId: 7,
    name: "Deluxe Roasted Pistachios",
    brand: "Happilo",
    description: "Salted and roasted premium pistachios in shell, high yield kernels.",
    specifications: JSON.stringify({ packSizes: ["500g", "1kg", "5kg"], origin: "Iran", grade: "Premium Jumbo" }),
    unit: "5 kg Carton",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 8. TEA & COFFEE
  {
    id: 80,
    categoryId: 8,
    name: "Premium Assam Tea",
    brand: "Tata Tea",
    description: "High quality CTC dust tea blend, providing rich amber color and strong taste.",
    specifications: JSON.stringify({ packSizes: ["1kg", "5kg", "26kg"], origin: "India", grade: "Hotel Blend" }),
    unit: "26 kg Bag",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 81,
    categoryId: 8,
    name: "Classic Instant Coffee",
    brand: "Nescafe",
    description: "Double filter roasted instant coffee blend of Arabica and Robusta.",
    specifications: JSON.stringify({ packSizes: ["500g", "1kg", "6kg"], origin: "India", grade: "Standard" }),
    unit: "6 kg Carton",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 9. SALT
  {
    id: 90,
    categoryId: 9,
    name: "Iodized Vacuum Salt",
    brand: "Tata Salt",
    description: "India's leading iodized vacuum salt, standard purity check.",
    specifications: JSON.stringify({ packSizes: ["1kg", "25kg", "50kg"], origin: "India", grade: "Standard Purity" }),
    unit: "50 kg Bag",
    minimumOrderQuantity: 50,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 10. BEVERAGES
  {
    id: 100,
    categoryId: 10,
    name: "Mixed Fruit Juice Pack",
    brand: "Real",
    description: "Refreshing multi-fruit beverage in 1-litre aseptic bulk packaging.",
    specifications: JSON.stringify({ packSizes: ["1L Case"], origin: "India", grade: "Commercial" }),
    unit: "12 x 1L Carton",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 101,
    categoryId: 10,
    name: "Carbonated Soft Drink (Cola)",
    brand: "Coca-Cola",
    description: "Classic cola soft drink in 2.25-litre PET bottles, bulk cases.",
    specifications: JSON.stringify({ packSizes: ["2.25L Case"], origin: "India", grade: "Commercial" }),
    unit: "9 x 2.25L Case",
    minimumOrderQuantity: 30,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 11. DAIRY PRODUCTS
  {
    id: 110,
    categoryId: 11,
    name: "Pure Cow Ghee",
    brand: "Amul",
    description: "Traditional clarified butter made from cow's milk, rich granular texture.",
    specifications: JSON.stringify({ packSizes: ["1L Carton", "5L Tin", "15kg Tin"], origin: "India", grade: "Pure Cow Ghee" }),
    unit: "12 x 1L Carton",
    minimumOrderQuantity: 10,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 111,
    categoryId: 11,
    name: "Salted Cooking Butter",
    brand: "Amul",
    description: "Hygienic butter blocks for baking, hotels, and restaurant bulk catering.",
    specifications: JSON.stringify({ packSizes: ["100g", "500g", "10kg"], origin: "India", grade: "Standard" }),
    unit: "30 x 500g Case",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // 12. SNACKS & NAMKEEN
  {
    id: 120,
    categoryId: 12,
    name: "Aloo Bhujia",
    brand: "Haldiram's",
    description: "Spicy potato noodle snacks, classic taste, vacuum packed to retain crispness.",
    specifications: JSON.stringify({ packSizes: ["150g", "400g", "1kg"], origin: "India", grade: "Standard" }),
    unit: "20 x 400g Carton",
    minimumOrderQuantity: 15,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 121,
    categoryId: 12,
    name: "Spicy Masala Munch Puffs",
    brand: "Kurkure",
    description: "Crispy fried corn puffs seasoned with hot spices and condiments.",
    specifications: JSON.stringify({ packSizes: ["90g", "250g"], origin: "India", grade: "Standard" }),
    unit: "30 x 250g Case",
    minimumOrderQuantity: 20,
    availability: "In Stock",
    image: "",
    images: "[]",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export async function getCategories() {
  return MOCK_CATEGORIES;
}

export async function getCategoryBySlug(slug: string) {
  return MOCK_CATEGORIES.find(c => c.slug === slug) || null;
}

export async function getProducts(
  limit: number = 20,
  offset: number = 0,
  search?: string,
  categoryId?: number,
  brand?: string,
  sortBy?: string
) {
  return getMockProductsFiltered(limit, offset, search, categoryId, brand, sortBy);
}

export async function getProductById(id: number) {
  return MOCK_PRODUCTS.find(p => p.id === id) || null;
}

export async function getProductsByCategory(categoryId: number) {
  return MOCK_PRODUCTS.filter(p => p.categoryId === categoryId);
}

export async function getProductCount(
  search?: string,
  categoryId?: number,
  brand?: string
) {
  return getMockProductsFiltered(9999, 0, search, categoryId, brand).length;
}

export async function getBrands(categoryId?: number) {
  let list = [...MOCK_PRODUCTS];
  if (categoryId) {
    list = list.filter(p => p.categoryId === categoryId);
  }
  const uniqueBrands = Array.from(new Set(list.map(p => p.brand).filter(Boolean))) as string[];
  return uniqueBrands;
}

// Local helper to filter mock products
function getMockProductsFiltered(
  limit: number,
  offset: number,
  search?: string,
  categoryId?: number,
  brand?: string,
  sortBy?: string
) {
  let list = [...MOCK_PRODUCTS];
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  if (categoryId) {
    list = list.filter(p => p.categoryId === categoryId);
  }
  if (brand) {
    list = list.filter(p => p.brand === brand);
  }
  
  if (sortBy) {
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "moq-asc") {
      list.sort((a, b) => a.minimumOrderQuantity - b.minimumOrderQuantity);
    } else if (sortBy === "moq-desc") {
      list.sort((a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity);
    } else if (sortBy === "newest") {
      list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
  }
  
  return list.slice(offset, offset + limit);
}


