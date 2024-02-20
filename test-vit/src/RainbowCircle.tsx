// function lightenBG() {
//   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'];
//   document.body.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex+1) % colors.length;
// }

import { useState } from "react";
import { cx } from "./utils/cx";

export const RainbowCircle = () => {
  const state = useState(0);
  const [colorIndex, setColorIndex] = state;

  const colors = [
    "bg-red-700 hover:bg-red-300 transition transition-colors",
    "bg-orange-700 hover:bg-orange-300 transition transition-colors",
    "bg-yellow-700 hover:bg-yellow-300 transition transition-colors",
    "bg-green-700 hover:bg-green-300 transition transition-colors",
    "bg-blue-700 hover:bg-blue-300 transition transition-colors",
    "bg-purple-700 hover:bg-purple-300 transition transition-colors",
    "bg-white-700 hover:bg-white-300 transition transition-colors",
  ];
  function changeColors() {
    setColorIndex((last) => (last + 1) % colors.length);
  }

  const currentColor = colors[colorIndex];
  return (
    <div className="flex justify-center items-center">
      <button
        className={cx(currentColor, "h-[102px] w-[102px] rounded-full bg-r")}
        onClick={changeColors}
      ></button>
    </div>
  );
};
