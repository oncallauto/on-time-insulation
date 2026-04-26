import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createQuoteSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { TRPCError } from "@trpc/server";

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

  quotes: router({
    /**
     * Submit a quote request form
     */
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Name must be at least 2 characters").max(255),
          phone: z.string().min(10, "Phone must be at least 10 characters").max(20),
          email: z.string().email("Invalid email address"),
          suburb: z.string().min(2, "Suburb must be at least 2 characters").max(255),
          propertyType: z.enum(["new", "old", "commercial"]),
          serviceType: z.enum(["removal", "installation", "replacement", "other"]),
          message: z.string().max(5000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Create the quote submission in the database
          const result = await createQuoteSubmission({
            name: input.name,
            phone: input.phone,
            email: input.email,
            suburb: input.suburb,
            propertyType: input.propertyType,
            serviceType: input.serviceType,
            message: input.message || null,
          });

          // Notify the owner about the new quote submission
          const notificationContent = `
New Quote Request Received

Name: ${input.name}
Phone: ${input.phone}
Email: ${input.email}
Suburb: ${input.suburb}
Property Type: ${input.propertyType}
Service Type: ${input.serviceType}
Message: ${input.message || "N/A"}

Please follow up with this customer as soon as possible.
          `.trim();

          await notifyOwner({
            title: "New Quote Request from On Time Insulation",
            content: notificationContent,
          });

          return {
            success: true,
            message: "Quote request submitted successfully. We will contact you soon!",
          };
        } catch (error) {
          console.error("Error submitting quote:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to submit quote request. Please try again.",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
