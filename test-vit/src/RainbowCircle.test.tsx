import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RainbowCircle } from "./RainbowCircle";

import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);
describe("RainbowCircle", () => {
  it("should change from red to orange on first click", async () => {
    render(<RainbowCircle />);

    const rainbowCircle = await screen.findByTestId("rainbow-circle");
    expect(rainbowCircle).toHaveClass("bg-red-700");
    const button = await screen.findByRole("button", {
      name: /change colors/i,
    });
    await userEvent.click(button);
    expect(rainbowCircle).toHaveClass("bg-orange-700");
  });
});
