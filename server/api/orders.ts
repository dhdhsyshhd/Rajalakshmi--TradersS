import { nanoid } from "nanoid";

export interface OrderItem {
  productId: number;
  quantity: number;
}

const MOCK_ORDERS: any[] = [];
const MOCK_QUOTES: any[] = [];

export async function createBulkOrder(data: {
  customerName: string;
  companyName?: string;
  mobileNumber: string;
  email?: string;
  deliveryAddress: string;
  gstNumber?: string;
  notes?: string;
  items: OrderItem[];
}) {
  const orderId = `BO-${nanoid(10).toUpperCase()}`;
  MOCK_ORDERS.push({
    ...data,
    orderId,
    status: "pending",
    createdAt: new Date(),
  });
  return { orderId };
}

export async function getBulkOrderById(id: number) {
  return MOCK_ORDERS.find((o, index) => index + 1 === id) || null;
}

export async function getBulkOrders(limit: number = 20, offset: number = 0) {
  return MOCK_ORDERS.slice(offset, offset + limit);
}

export async function createQuoteRequest(data: {
  customerName: string;
  companyName?: string;
  mobileNumber: string;
  email?: string;
  deliveryAddress: string;
  gstNumber?: string;
  notes?: string;
  items: OrderItem[];
}) {
  const requestId = `QR-${nanoid(10).toUpperCase()}`;
  MOCK_QUOTES.push({
    ...data,
    requestId,
    status: "pending",
    createdAt: new Date(),
  });
  return { requestId };
}

export async function getQuoteRequestById(id: number) {
  return MOCK_QUOTES.find((q, index) => index + 1 === id) || null;
}

export async function getQuoteRequests(limit: number = 20, offset: number = 0) {
  return MOCK_QUOTES.slice(offset, offset + limit);
}
