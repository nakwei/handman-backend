import { FC } from "react";

export const BodyFull: FC<{ wrongGuessCount: number }> = ({
  wrongGuessCount
}) => {
  return (
    <div className= "relative h-48 top-28r">
      {wrongGuessCount > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 top-0 border size-[50px] border-black p-100 rounded-full"></div>
      )}
      {wrongGuessCount > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[50px] border-l border-black h-[100px]"></div>
      )}
      {wrongGuessCount > 2 && (
        <div className="absolute right-1/2 top-16 rotate-45 border-t border-black w-[50px] h-[20px]"></div>
      )}
      {wrongGuessCount > 3 && (
        <div className="absolute left-1/2 top-16 -rotate-45 border-t border-black w-[50px] h-[20px]"></div>
      )}
      {wrongGuessCount > 4 && (
        <div className="absolute right-1/2 top-[150px] origin-top-right -rotate-45 border-t border-black w-[50px] h-[20px]"></div>
      )}
      {wrongGuessCount > 5 && (
        <div className="absolute left-1/2 top-[150px] origin-top-left rotate-45 border-t border-black w-[50px] h-[20px]"></div>
      )}
    </div>
  );
};
