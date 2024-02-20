// Make a new component TimesN
// has two properties value and mutilplier that are both of type number and renders renders the result in purple

import { FC, useMemo } from "react";

export const TimesN: FC<{
  value: number;
  multiplier: number;
  onBumpMultiplier: () => void;
}> = ({ value, multiplier, onBumpMultiplier }) => {
  const result = useMemo(() => {
    return value * multiplier;
  }, [multiplier, value]);

  return (
    <div onClick={onBumpMultiplier} className="text-purple-500">
      {result}
    </div>
  );
};
