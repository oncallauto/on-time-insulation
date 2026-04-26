import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("quotes.submit", () => {
  it("validates required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quotes.submit({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        propertyType: "old",
        serviceType: "removal",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quotes.submit({
        name: "John Doe",
        phone: "0733333333",
        email: "invalid-email",
        suburb: "Paddington",
        propertyType: "old",
        serviceType: "removal",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("validates phone length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quotes.submit({
        name: "John Doe",
        phone: "123",
        email: "john@example.com",
        suburb: "Paddington",
        propertyType: "old",
        serviceType: "removal",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("accepts valid quote submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.quotes.submit({
      name: "John Doe",
      phone: "0733333333",
      email: "john@example.com",
      suburb: "Paddington",
      propertyType: "old",
      serviceType: "removal",
      message: "I need insulation removal for my attic",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("submitted successfully");
  });

  it("accepts optional message field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.quotes.submit({
      name: "Jane Smith",
      phone: "0744444444",
      email: "jane@example.com",
      suburb: "Southside",
      propertyType: "new",
      serviceType: "installation",
    });

    expect(result.success).toBe(true);
  });

  it("validates property type enum", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quotes.submit({
        name: "John Doe",
        phone: "0733333333",
        email: "john@example.com",
        suburb: "Paddington",
        propertyType: "invalid" as any,
        serviceType: "removal",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("validates service type enum", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.quotes.submit({
        name: "John Doe",
        phone: "0733333333",
        email: "john@example.com",
        suburb: "Paddington",
        propertyType: "old",
        serviceType: "invalid" as any,
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });
});
