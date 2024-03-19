import { useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";
import { WinLose } from "./WinLose.tsx";

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


  const wrongGuesses = guessed.filter((char) => !word.includes(char));
  const wrongGuessSet = new Set(wrongGuesses);
  const correctGuesses = new Set(guessed.filter((char) => word.includes(char)))
  const hasGuessedWord = [...word].every((char) => guessed.includes(char));
  const gameState =
    wrongGuessSet.size === LOSE_COUNT
      ? "lose"
      : hasGuessedWord
      ? "win"
      : "playing";

  const restart = () => {
    setNextWord(()=> words[Math.round(Math.random() * words.length)]);
    setGuessed(()=>[]);
    return null;
  }

  useEffect (() => {
    gameState === "lose" && (
      document.title = "You Lose!"
  )
  gameState === "win" && (
    document.title = "You Win!"
)
}, [gameState])


  return (
    <div>
      <div className="flex justify-center items-stretch">
        <div className="absolute top-5">
          <WinLose gameState={gameState} restart={restart}></WinLose>
        </div>

      </div>
      <div className="">
        <BodyFull wrongGuessCount={wrongGuessSet.size} />
      </div>
      <div>

      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2">
        <input
          className="border border-red-600 outline-4 outline-red-600"
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
      <div> {wrongGuessSet.size}</div>
      <div> {wrongGuessSet}</div>
      <div> {correctGuesses}</div>
      <div>{JSON.stringify(guessed, null, 2)}</div>
    </div>
  );
};
