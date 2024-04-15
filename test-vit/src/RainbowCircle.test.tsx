import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { RainbowCircle } from "./RainbowCircle";

describe("RainbowCircle", () => {
  it("should change from red to orange on first click", async () => {
    render(<RainbowCircle />);

    const button = await screen.findByRole("button", {
      name: /change colors/i,
    });
    expect(button).toHaveClass("bg-red-700");
    await userEvent.click(button);
    expect(button).toHaveClass("bg-orange-700");
  });
});
