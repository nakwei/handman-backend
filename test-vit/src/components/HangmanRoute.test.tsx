import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect} from "vitest";
import { HangmanRoute } from "./HangmanRoute";
import userEvent from "@testing-library/user-event";


// describe("HangmanRoute", () => {
//   it("should display an incorrect guess", () => {
//     render(<HangmanRoute testWord="space"/>);

//     const input = screen.getByRole("textbox", { name: /guess a character/i });

//     userEvent.type(input,"w");
//     const wrongBank = screen.getByLabelText("Wrong Guess Bank")
//     const wrongBankText = wrongBank.textContent;
//     expect(wrongBankText).toBe("w");
//   });
// why did DOM not update automatically above?
  describe("HangmanRoute", () => {
    it("should display an incorrect guess", async () => {
      render(<HangmanRoute testWord="space"/>);
      const input = screen.getByRole("textbox", { name: /guess a character/i });
      userEvent.type(input, "w");

      // Wait for the DOM to update after typing
      await waitFor(() => {
        const wrongBank = screen.getByLabelText("Wrong Guess Bank");
        const wrongBankText = wrongBank.textContent;
        expect(wrongBankText).toBe("w");
      });
    });

  it("should display a correct guess", async() => {
    // render(<HangmanRoute testWord="space"/>);
    const input = screen.getByLabelText("Guess a character");
    userEvent.type(input, "s");

    await waitFor(() => {
      const correctLetters = screen.getByLabelText("correct guesses")
      const correctLettersText = correctLetters.textContent;
      expect(correctLettersText).toBe("S");
    });
  });

  it("should display multiple correct guesses", async () => {
    const input = screen.getByLabelText("Guess a character");
    userEvent.type(input, "e");

    await waitFor(() => {
      const correctLetters = screen.getByLabelText("correct guesses")
      const correctLettersText = correctLetters.textContent;
      expect(correctLettersText).toBe("SE");
    });
  });

  it("should display a success screen when the game is won", async() => {
    const input = screen.getByLabelText("Guess a character");
    userEvent.type(input, "p");
    userEvent.type(input, "a");
    userEvent.type(input, "c");
    await waitFor(() => {
      const gameOver = screen.getByLabelText("Game Over Win")
      const gameOverText = gameOver.textContent
      const correctLetters = screen.getByLabelText("correct guesses")
      const correctLettersText = correctLetters.textContent;
      expect(gameOverText).toBe("You've Won ");
      expect(correctLettersText).toBe("SPACE");
    });
  });


  it("should display a failure screen when the game is lost", async () => {
    // Component doesn't re-render. I feel like I shouldn't press the button. As
    // that should be another test. But when I call render Hangman again, then
    // it says that I'll have two renders and so there will be double of
    // everthing in components.
    const input = screen.getByLabelText("Guess a character");
    userEvent.type(input, "x");
    userEvent.type(input, "z");
    userEvent.type(input, "v");
    userEvent.type(input, "b");
    userEvent.type(input, "m");

    await waitFor(() => {
      const gameOver = screen.getByLabelText("Game Over Lose")
      const gameOverText = gameOver.textContent
      const correctLetters = screen.getByLabelText("correct guesses")
      const correctLettersText = correctLetters.textContent;
      expect(gameOverText).toBe("You've Lost");
      expect(correctLettersText).toBe("SPACE");
    });
  });
});
