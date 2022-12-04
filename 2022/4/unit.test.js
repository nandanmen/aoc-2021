import { expect, test } from "vitest";

import { contains } from "./4a";
import { overlaps } from "./4b";

test("contains", () => {
  expect(contains([1, 2], [1, 2])).toBe(true);
  expect(contains([1, 2], [1, 3])).toBe(true);
  expect(contains([1, 3], [1, 2])).toBe(true);
  expect(contains([2, 4], [6, 8])).toBe(false);
});

test("overlaps", () => {
  expect(overlaps([1, 2], [1, 2])).toBe(true);
  expect(overlaps([5, 7], [7, 9])).toBe(true);
  expect(overlaps([7, 9], [5, 7])).toBe(true);
  expect(overlaps([2, 4], [6, 8])).toBe(false);
});
