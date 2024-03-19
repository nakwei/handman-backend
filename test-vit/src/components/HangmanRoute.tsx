import { useEffect, useState } from "react";

export const words = ["car", "tree", "bush"];
export const allowedWrongCount = 5;
export const HangmanRoute = () => {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [word] = useState(() => {
    Math.round(Math.random() * 2);
  });

  return (
    <div className="p-18">
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
