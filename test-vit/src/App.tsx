import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-purple-800 bg-[#fefefe] text-3xl font-bold test-red-500 underline text-center">
        This is a testing start page!
      </h1>

      <div>{count}</div>

      <button onClick={() => setCount((last) => last + 1)}>Up</button>
      <button onClick={() => setCount((last) => last - 1)}>Down</button>

      <img src={viteLogo} />
      <img src={reactLogo} />
    </>
  );
}

export default App;
