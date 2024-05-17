import { useCallback, useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";
import { WinLose } from "./WinLose.tsx";
import { Noose } from "./Noose.tsx";
import { LetterSpaces } from "./LetterSpaces.tsx";
import { Game, GameSate } from "./types.ts";
import { HangmanPage } from "./HangmanPage.tsx";

const alphanumericCharacter = /[a-z]/i;

const LOSE_COUNT = 6;

// to fix:
// ensure that same letter Caps and no caps count as one letter
// ensure that caps letter count as a guessed letter valid
// problem rn: why doesn't captial letter guess count as a right answer. rn, stopping it from being a right ansewr.
export const HangmanRoute = () => {
  const [game, setGame] = useState<Game | null>(null);
  const fetchGame = useCallback(async () => {
    const response = await window.fetch("http://locahost:3004/games", {
      method: "POST",
    });
    const serverGame = (await response.json()) as Game;
    setGame(serverGame);
  }, []);
  useEffect(() => {
    fetchGame();
  }, [fetchGame]);
  return game ? <HangmanPage game={game} /> : null;
};
