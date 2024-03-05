import { useEffect, useState } from "react";

export const words = ["car", "tree", "bush"];

export const HangmanRoute = () => {
  const [guessed, setGuessed] = useState<string[]>([]);

  return (
    <div className="p-20">
      <input
        className="border border-red-600 outline-4 outline-red-600"
        type="text"
        value={""}
        onChange={(e) =>
          setGuessed((last) => {
            return [...last, e.target.value];
          })
        }
      />
      <div>{JSON.stringify(guessed, null, 2)}</div>
    </div>
  );
};
