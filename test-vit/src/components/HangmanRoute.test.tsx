import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HangmanRoute } from "./HangmanRoute";
import userEvent from "@testing-library/user-event";

describe("HangmanRoute", () => {
  it("should display an incorrect guess", () => {
    render(<HangmanRoute />);
    const testWordElement = screen.getByLabelText(/word test/i);
    const testWord = testWordElement.textContent;
    const input = screen.getByRole("textbox", { name: /guess a character/i });

    userEvent.type("");
    expect(testWord).toBe("");
  });

  it("should display a correct guess", () => {});

  it("should display a success screen when the game is won", () => {});

  it("should display a failure screen when the game is lost", () => {});
});
