import { useEffect, useState } from "react";
import {BodyFull } from "./BodyFull.tsx";
import {BodyOneLeg } from "./BodyOneLeg.tsx";
import { BodyArms } from "./BodyArms.tsx";
import { BodyOneArm } from "./BodyOneArm.tsx";
import { BodyTorso } from "./BodyTorso.tsx";
import { BodyHead } from "./BodyHead.tsx";

export const words = ["car", "tree", "bush", "hello", "apple", "stations",
"taxi", "constellation", "telescope", "pants", "eyeball", "sandwich", "shoes", 
"market", "phone", "camera", "chair", "backyard", "cat", "sea"];

export const HangmanRoute = () => {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [word, setNextWord] = useState(() => {
    return words[Math.round(Math.random() * words.length)];
  });
  const [winLose, setWinLose] = useState(Boolean);
  const [header, setHeader] = useState(<div></div>)
  const [allowedWrongCount, setAllowedWrongCount] = useState(5);
  const [bodyParts, setBodyParts] = useState(<div></div>)
  
  // shouldn't render on first load
  useEffect(()=>{
    if (bodyParts) {
      setHeader(()=> 
      <div className="flex">
        <div>You've Won</div>
        <button className="outline">Play Again</button>
      </div>)
  } else {
      //you've lost play again. 
  }}, [winLose])

  useEffect(() =>
    {if (!word.includes(guessed[0]) && guessed.length!=0) {
      switch(allowedWrongCount) {
        case 5:
          setBodyParts(()=> <BodyHead/>)
          setAllowedWrongCount((last) => (last - 1));
          break;
        case 4:
          setBodyParts(()=><BodyTorso/>)
          setAllowedWrongCount((last) => (last - 1));
          break;
        case 3:
          setBodyParts(()=> <BodyOneArm/>)
          setAllowedWrongCount((last) => (last - 1));
          break;
        case 2:
          setBodyParts(() => <BodyArms/>)
          setAllowedWrongCount((last) => (last - 1));
          break;
        case 1:
          setBodyParts(() => <BodyOneLeg/>)
          setAllowedWrongCount((last) => (last - 1));
          break;
        case 0: 
          setBodyParts(() => <BodyFull/>)
          setWinLose(()=>false)
          break;
        }
    
      }
      else if (guessed.length!=0){
        // code out logic of filling in letters
      }
    }, [guessed]);


  return (
    <div>
      <div className="flex justify-center items-stretch">
      <div className="mt-5"> {header} </div>

      </div>
      <div className="mt-20">{bodyParts}</div>
      <div className="flex justify-center items-center">
      <input
        className="mt-20 border border-red-600 outline-4 outline-red-600"
        type="text"
        value={""}
        onChange={(e) =>
          setGuessed((last) => {
            return [e.target.value, ...last];
            // return [...last, e.target.value];
          })
        }
      />
      </div>
      <div> {word}</div>
      <div> {allowedWrongCount}</div>
      <div>{JSON.stringify(guessed, null, 2)}</div>
    </div>
    
    
  );
};
