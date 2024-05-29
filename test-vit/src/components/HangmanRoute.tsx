import { useCallback, useEffect, useState } from "react";
import { BodyFull } from "./BodyFull.tsx";
import { WinLose } from "./WinLose.tsx";
import { Noose } from "./Noose.tsx";
import { LetterSpaces } from "./LetterSpaces.tsx";
import { Game, GameSate } from "./types.ts";
import { HangmanPage } from "./HangmanPage.tsx";

// to fix:
// ensure that same letter Caps and no caps count as one letter
// ensure that caps letter count as a guessed letter valid
// problem rn: why doesn't captial letter guess count as a right answer. rn, stopping it from being a right ansewr.
export const HangmanRoute = () => {
  const [game, setGame] = useState<Game | null>(null);
  const fetchGame = useCallback(async () => {
    const response = await window.fetch("http://localhost:3005/games", {
      method: "POST",
      credentials: "include",
    });
    const serverGame: Game = (await response.json());
    console.log(typeof(serverGame))
    setGame(serverGame);
  }, []);

  useEffect(() => {
    fetchGame();
  }, [fetchGame]);
  return game ? <HangmanPage game={game} onGameUpdated={setGame} /> : null;
};
