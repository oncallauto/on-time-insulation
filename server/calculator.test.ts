import { describe, expect, it } from "vitest";

/**
 * Energy Savings Calculator Logic Tests
 * Tests the calculation of monthly and annual energy savings based on home size and insulation status
 */

function calculateSavings(homeSize: number, currentInsulation: "poor" | "fair" | "good") {
  let baseConsumption = homeSize * 0.5; // kWh per m² per year
  let savingsPercentage = 0;

  if (currentInsulation === "poor") savingsPercentage = 35;
  else if (currentInsulation === "fair") savingsPercentage = 25;
  else if (currentInsulation === "good") savingsPercentage = 15;

  const annualSavings = (baseConsumption * savingsPercentage) / 100;
  const monthlySavings = annualSavings / 12;
  const costPerKwh = 0.28; // Average Brisbane rate
  const annualCost = annualSavings * costPerKwh;
  const monthlyCost = annualCost / 12;

  return { monthlyCost, annualCost, monthlySavings, annualSavings };
}

describe("Energy Savings Calculator", () => {
  it("calculates savings for poor insulation", () => {
    const result = calculateSavings(150, "poor");
    expect(result.monthlyCost).toBeGreaterThan(0);
    expect(result.annualCost).toBeGreaterThan(result.monthlyCost);
  });

  it("calculates savings for fair insulation", () => {
    const result = calculateSavings(150, "fair");
    expect(result.monthlyCost).toBeGreaterThan(0);
    expect(result.annualCost).toBeGreaterThan(result.monthlyCost);
  });

  it("calculates savings for good insulation", () => {
    const result = calculateSavings(150, "good");
    expect(result.monthlyCost).toBeGreaterThan(0);
    expect(result.annualCost).toBeGreaterThan(result.monthlyCost);
  });

  it("poor insulation has higher savings potential than fair", () => {
    const poor = calculateSavings(150, "poor");
    const fair = calculateSavings(150, "fair");
    expect(poor.monthlyCost).toBeGreaterThan(fair.monthlyCost);
  });

  it("fair insulation has higher savings potential than good", () => {
    const fair = calculateSavings(150, "fair");
    const good = calculateSavings(150, "good");
    expect(fair.monthlyCost).toBeGreaterThan(good.monthlyCost);
  });

  it("scales savings proportionally with home size", () => {
    const small = calculateSavings(100, "poor");
    const large = calculateSavings(200, "poor");
    expect(large.monthlyCost).toBeCloseTo(small.monthlyCost * 2, 1);
  });

  it("calculates correct monthly cost from annual cost", () => {
    const result = calculateSavings(150, "poor");
    expect(result.monthlyCost).toBeCloseTo(result.annualCost / 12, 2);
  });

  it("handles minimum home size", () => {
    const result = calculateSavings(50, "poor");
    expect(result.monthlyCost).toBeGreaterThan(0.1);
  });

  it("handles maximum home size", () => {
    const result = calculateSavings(500, "poor");
    expect(result.monthlyCost).toBeGreaterThan(1);
  });

  it("returns consistent results for same inputs", () => {
    const result1 = calculateSavings(150, "poor");
    const result2 = calculateSavings(150, "poor");
    expect(result1.monthlyCost).toBe(result2.monthlyCost);
    expect(result1.annualCost).toBe(result2.annualCost);
  });

  it("calculates realistic savings amounts", () => {
    const result = calculateSavings(150, "poor");
    // For 150m² with poor insulation: 150 * 0.5 * 0.35 * 0.28 = ~0.735/month
    expect(result.monthlyCost).toBeGreaterThan(0.5);
    expect(result.monthlyCost).toBeLessThan(2);
  });
});
