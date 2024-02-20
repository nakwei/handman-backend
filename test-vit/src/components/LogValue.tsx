import { FC, useEffect } from "react";

export const LogValue: FC<{ someFunc: () => void }> = ({ someFunc }) => {
  useEffect(() => {
    document.body.addEventListener("click", someFunc);
    return () => {
      document.body.removeEventListener("click", someFunc);
    };
  }, [someFunc]);
  return null;
};
