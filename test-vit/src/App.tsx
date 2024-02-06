import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

let colorIndex = 0;

function changeColors() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'];
  document.body.style.backgroundColor = colors[colorIndex];
  document.body.style.backgroundColor
  colorIndex = (colorIndex+1) % colors.length;
}

// function lightenBG() {
//   const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'];
//   document.body.style.backgroundColor = colors[colorIndex];
//   colorIndex = (colorIndex+1) % colors.length;
// }

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
    <div>
      <h1 className="text-purple-800 bg-[#fefefe] text-3xl font-bold 
      test-red-500 underline text-center">
        This is a testing start page!
      </h1>
      <div className="min-h-screen grid place-content-center">
        <div className="bg-emerald-500 h-[102px] w-[102px] rounded-full"
            onClick={changeColors} 
            
            ></div>
      </div>

      

      <div>{count}</div>
      
      <button onClick={() => setCount((last) => last + 1)}>Up</button>
      <button onClick={() => setCount((last) => last - 1)}>Down</button>

      <img src={viteLogo} />
      <img src={reactLogo} />
      </div>
    </>
    
  );
}

export default App;
