import { useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";

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

const LOSE_COUNT = 6;

export const HangmanRoute = () => {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [word, setNextWord] = useState(() => {
    return words[Math.round(Math.random() * words.length)];
  });

  const wrongGuesses = guessed.filter((char) => !words.includes(char));
  const wrongGuessSet = new Set(wrongGuesses);
  const hasGuessedWord = [...word].every((char) => guessed.includes(char));
  const gameState =
    wrongGuessSet.size === LOSE_COUNT
      ? "lose"
      : hasGuessedWord
      ? "win"
      : "playing";

  // use useEffect to update tab text when the user has won or lost

  return (
    <div>
      <div className="flex justify-center items-stretch">
        <div className="mt-5">
          <div className="flex">
            <div>You've Won</div>
            <button className="outline">Play Again</button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <BodyFull wrongGuessCount={wrongGuessSet.size} />
      </div>
      <div className="flex justify-center items-center">
        <input
          className="mt-20 border border-red-600 outline-4 outline-red-600"
          type="text"
          value={""}
          onChange={(e) =>
            setGuessed((last) => {
              return [e.target.value, ...last];
              // return [...last, e.target.value];
            })
          }
        />
      </div>
      <div> {word}</div>
      <div> {LOSE_COUNT}</div>
      <div>{JSON.stringify(guessed, null, 2)}</div>
    </div>
  );
};
