import { FC } from "react";
import { GameSate } from "./types";

// thinking flex box of lines.
// component would take in word.length prop.

export const LetterSpaces: FC<{
  letters: (string|null)[];
  gameState: GameSate;
}> = ({letters, gameState }) => {
  const letterArray = letters.map((letter) => (letter != null) ? letter.toUpperCase() : letter);

  return (
    <div className="flex gap-10">
      {letterArray.map((letter, index) =>
        gameState == "playing" ? (
          <div
            key={index}
            className="border-b-2 border-black w-5 text-center text-black text-xl"
          >
            {letter}
          </div>
        ) : (
          <div
            key={index}
            className="border-b-2 border-black w-5 text-center text-red-500 text-xl"
          >
            {letter}
          </div>
        ))
      }
    </div>
  );
};
