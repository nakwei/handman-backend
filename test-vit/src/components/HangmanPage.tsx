import { useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";
import { WinLose } from "./WinLose.tsx";
import { Noose } from "./Noose.tsx";
import { LetterSpaces } from "./LetterSpaces.tsx";
import { Game, GameSate } from "./types.ts";

const alphanumericCharacter = /[a-z]/i;

const LOSE_COUNT = 6;

interface Props {
  game: Game;
}

// to fix:
// ensure that same letter Caps and no caps count as one letter
// ensure that caps letter count as a guessed letter valid
// problem rn: why doesn't captial letter guess count as a right answer. rn, stopping it from being a right ansewr.
export const HangmanPage = ({ game }: Props) => {


  const [guessed, setGuessed] = useState<string[]>([]);
  const [wrongGuessed, setWrongGuessed] = useState<string[]>([]);
  const [word, setNextWord] = useState<(string|null)[]>(game.word);


  // const wrongGuesses = guessed.filter(
  //   (char) => !word.includes(char.toLowerCase())
  // );
  const wrongGuessSet = new Set(wrongGuessed);
  // const correctGuesses = new Set(
  //   guessed.filter((char) => word.includes(char.toLowerCase()))
  // );
  // const hasGuessedWord = [...word].every((char) =>
  //   guessed.includes(char.toLowerCase())
  // );
  // const gameState: GameSate =
  //   wrongGuessSet.size === LOSE_COUNT
  //     ? "lose"
  //     : hasGuessedWord
  //     ? "win"
  //     : "playing";

  // const restart = () => {
  //   setNextWord(() => words[getRandomIndex(words)]);
  //   setGuessed(() => []);
  // };

  // const gameStateBool = gameState == "win" || gameState == "lose";

  // useEffect(() => {
  //   gameState === "lose" && (document.title = "You Lose!");
  //   gameState === "win" && (document.title = "You Win!");
  // }, [gameState]);

  return (
    <div>
      <Noose />
      {/* <div className="flex justify-center items-stretch">
        <div className="absolute top-5" aria-label="Game Over Result">
          <WinLose gameState={gameState} restart={restart}></WinLose>
        </div>
      </div> */}

      <div className="absolute left-1/2 -translate-x-1/2 top-40">
        <BodyFull wrongGuessCount={wrongGuessSet.size} />
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-1/3"
        aria-label="correct guesses"
      >
        <LetterSpaces
          letters={word}
          gameState="playing"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-3/4">
        <input
          className="border border-red-600 outline-4 outline-red-600"
          type="text"
          aria-label="Guess a character"
          value={""}
          disabled= {false} //{gameStateBool}
          onChange={async (e) => {
            const guessedLetter = e.target.value
            if (alphanumericCharacter.test(guessedLetter)) {
              setGuessed((last) => {
                return [...last, guessedLetter];
              });

              // here I want to make the call to the server

                const response = await window.fetch("http://localhost:3004/games/userguess", {
                  method: "PUT",
                  body: JSON.stringify({guessed})
                });
              const updatedGame = (await response.json());
              setWrongGuessed(() => updatedGame.wrongGuesses)
              setNextWord(()=> updatedGame.word)
          }}}
        />
      </div>

      <div
        className="h-[5rem] w-[30rem] border-black border p-2 text-red-800
        absolute left-1/2 -translate-x-1/2 bottom-12 flex gap-x-2"
        aria-label="Wrong Guess Bank"
      >
        {wrongGuessed.map((guess, index) => (
          <div key={index}>
            {guess}
            {index < wrongGuessed.length - 1 ? "," : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
