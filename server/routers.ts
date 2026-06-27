import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as productsApi from "./api/products";
import * as ordersApi from "./api/orders";
import * as reviewsApi from "./api/reviews";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure
      .input(z.object({
        limit: z.number().default(20),
        offset: z.number().default(0),
        search: z.string().optional(),
        categoryId: z.number().optional(),
        brand: z.string().optional(),
        sortBy: z.string().optional(),
      }))
      .query(async ({ input }) => {
        const items = await productsApi.getProducts(input.limit, input.offset, input.search, input.categoryId, input.brand, input.sortBy);
        const total = await productsApi.getProductCount(input.search, input.categoryId, input.brand);
        return { items, total };
      }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return productsApi.getProductById(input.id);
      }),

    brands: publicProcedure
      .input(z.object({ categoryId: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return productsApi.getBrands(input?.categoryId);
      }),
  }),

  categories: router({
    list: publicProcedure
      .query(async () => {
        return productsApi.getCategories();
      }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        return productsApi.getCategoryBySlug(input.slug);
      }),
  }),

  orders: router({
    createBulkOrder: publicProcedure
      .input(z.object({
        customerName: z.string(),
        companyName: z.string().optional(),
        mobileNumber: z.string(),
        email: z.string().email().optional(),
        deliveryAddress: z.string(),
        gstNumber: z.string().optional(),
        notes: z.string().optional(),
        items: z.array(z.object({
          productId: z.number(),
          quantity: z.number().positive(),
        })),
      }))
      .mutation(async ({ input }) => {
        return ordersApi.createBulkOrder(input);
      }),

    getBulkOrders: publicProcedure
      .input(z.object({
        limit: z.number().default(20),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return ordersApi.getBulkOrders(input.limit, input.offset);
      }),

    createQuoteRequest: publicProcedure
      .input(z.object({
        customerName: z.string(),
        companyName: z.string().optional(),
        mobileNumber: z.string(),
        email: z.string().email().optional(),
        deliveryAddress: z.string(),
        gstNumber: z.string().optional(),
        notes: z.string().optional(),
        items: z.array(z.object({
          productId: z.number(),
          quantity: z.number().positive(),
        })),
      }))
      .mutation(async ({ input }) => {
        return ordersApi.createQuoteRequest(input);
      }),

    getQuoteRequests: publicProcedure
      .input(z.object({
        limit: z.number().default(20),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return ordersApi.getQuoteRequests(input.limit, input.offset);
      }),
  }),

  reviews: router({
    list: publicProcedure
      .input(z.object({ limit: z.number().default(10) }))
      .query(async ({ input }) => {
        return reviewsApi.getReviews(input.limit);
      }),

    create: publicProcedure
      .input(z.object({
        customerName: z.string(),
        rating: z.number().min(1).max(5),
        comment: z.string(),
      }))
      .mutation(async ({ input }) => {
        return reviewsApi.createReview(input);
      }),
  }),
});

export type AppRouter = typeof appRouter;
