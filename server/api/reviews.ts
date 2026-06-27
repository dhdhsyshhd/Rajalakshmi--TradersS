export const MOCK_REVIEWS = [
  {
    id: 1,
    customerName: "Karthik Grocery Stores (Chennai)",
    rating: 5,
    comment: "Extremely happy with the quality of Basmati Rice and Pulses. Sourced in bulk and delivered on time.",
    verified: 1,
    createdAt: new Date()
  },
  {
    id: 2,
    customerName: "Sri Balaji Supermarket (Hyderabad)",
    rating: 5,
    comment: "The spices and edible oils are of premium quality. Our retail customers love the freshness and aroma.",
    verified: 1,
    createdAt: new Date()
  },
  {
    id: 3,
    customerName: "Annapurna Catering Services",
    rating: 5,
    comment: "Best wholesale rates for sugar, flour, and rava in Andhra Pradesh. Highly recommended for commercial purchases.",
    verified: 1,
    createdAt: new Date()
  }
];

export async function getReviews(limit: number = 10) {
  return MOCK_REVIEWS.slice(0, limit);
}

export async function createReview(data: {
  customerName: string;
  rating: number;
  comment: string;
}) {
  MOCK_REVIEWS.push({
    id: MOCK_REVIEWS.length + 1,
    customerName: data.customerName,
    rating: data.rating,
    comment: data.comment,
    verified: 0,
    createdAt: new Date()
  });
  return { success: true };
}
