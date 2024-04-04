import { expect, test } from "vitest";
import { cx } from "./cx";

test("cx concatenates class names", () => {
  expect(cx("car", "hat")).toBe("car hat");
});
