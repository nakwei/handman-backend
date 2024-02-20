import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { RainbowCircle } from "./RainbowCircle";
import { TimesN } from "./components/TimesN";
import { LogValue } from "./components/LogValue";

// Make a new component TimesN
// takes a number and a mutilplier and renders the result in purple

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(5);
  const countElRef = useRef<HTMLDivElement>(null);
  const bump = useCallback(() => {
    setMultiplier((last) => last + 1), [];
  }, []);

  useEffect(() => {
    console.log(countElRef.current);
  }, []);

  return (
    <>
      <div>
        <h1
          className="text-purple-800 bg-[#fefefe] text-3xl font-bold
      test-red-500 underline text-center"
        >
          This is a testing start page!
        </h1>
        <RainbowCircle />

        <div ref={countElRef}>{count}</div>

        <button onClick={() => setCount((last) => last + 1)}>Up</button>
        <button onClick={() => setCount((last) => last - 1)}>Down</button>
        <TimesN value={count} multiplier={multiplier} onBumpMultiplier={bump} />
        <LogValue someFunc={bump} />
        <img src={viteLogo} />
        <img src={reactLogo} />
      </div>
    </>
  );
}

export default App;
