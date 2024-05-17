export type GameSate = "lose" | "win" | "playing";

export type Game = {
  word: (null | string)[];
  guesses: string[];
};
