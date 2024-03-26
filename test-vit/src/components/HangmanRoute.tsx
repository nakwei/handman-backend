import { useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";
import { WinLose } from "./WinLose.tsx";
import { Noose } from "./Noose.tsx";
import { LetterSpaces } from "./LetterSpaces.tsx";

export const words = [
  "car",
  "tree",
  "bush",
  "hello",
  "apple",
  "stations",
  "taxi",
  "constellation",
  "telescope",
  "pants",
  "eyeball",
  "sandwich",
  "shoes",
  "market",
  "phone",
  "camera",
  "chair",
  "backyard",
  "cat",
  "sea",
];

const alphanumericCharacter = /[a-z]/i;

const LOSE_COUNT = 6;

// to fix:
// ensure that same letter Caps and no caps count as one letter
// ensure that caps letter count as a guessed letter valid
// problem rn: why doesn't captial letter guess count as a right answer. rn, stopping it from being a right ansewr.
export const HangmanRoute = () => {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [word, setNextWord] = useState(() => {
    return words[Math.round(Math.random() * words.length)];
  });

  const wrongGuesses = guessed.filter(
    (char) => !word.includes(char.toLowerCase())
  );
  const wrongGuessSet = new Set(wrongGuesses);
  const correctGuesses = new Set(
    guessed.filter((char) => word.includes(char.toLowerCase()))
  );
  const hasGuessedWord = [...word].every((char) =>
    guessed.includes(char.toLowerCase())
  );
  const gameState =
    wrongGuessSet.size === LOSE_COUNT
      ? "lose"
      : hasGuessedWord
      ? "win"
      : "playing";

  const restart = () => {
    setNextWord(() => words[Math.round(Math.random() * words.length)]);
    setGuessed(() => []);
    return null;
  };

  const gameStateBool = gameState == "win" || gameState == "lose";

  useEffect(() => {
    gameState === "lose" && (document.title = "You Lose!");
    gameState === "win" && (document.title = "You Win!");
  }, [gameState]);

  return (
    <div>
      <Noose />
      <div className="flex justify-center items-stretch">
        <div className="absolute top-5">
          <WinLose gameState={gameState} restart={restart}></WinLose>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-40">
        <BodyFull wrongGuessCount={wrongGuessSet.size} />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/3">
        <LetterSpaces
          letters={word}
          correctLetters={correctGuesses}
          gameState={gameState}
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-3/4">
        <input
          className="border border-red-600 outline-4 outline-red-600"
          type="text"
          value={""}
          disabled={gameStateBool}
          onChange={(e) => {
            if (alphanumericCharacter.test(e.target.value)) {
              setGuessed((last) => {
                return [e.target.value, ...last];
              });
            }
          }}
        />
      </div>

      <div className="text-gray-500">word-test: {word}</div>
      <div
        className="h-[5rem] w-[30rem] border-black border p-2 text-red-800
        absolute left-1/2 -translate-x-1/2 bottom-12"
      >
        {" "}
        {wrongGuesses.reverse().toString()}
      </div>
    </div>
  );
};
