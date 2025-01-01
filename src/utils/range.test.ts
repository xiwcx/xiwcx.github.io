import { test, expect } from "vitest";
import { range } from "./range";

test("range returns an array of numbers", () => {
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("range returns an array of numbers with a step", () => {
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
});

test("range returns an array of numbers with a step", () => {
  expect(range(200, 1001, 200)).toEqual([200, 400, 600, 800, 1000]);
});

test("range returns an array of numbers with a negative step", () => {
  expect(range(0, 10, -2)).toEqual([0, -2, -4, -6, -8]);
});

test("range returns an empty array if the start is greater than the end", () => {
  expect(range(10, 0)).toEqual([]);
});

test("range returns an empty array if the start is greater than the end with a step", () => {
  expect(range(10, 0, 2)).toEqual([]);
});
