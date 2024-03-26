import {FC} from "react";

// thinking flex box of lines.
// component would take in word.length prop.

export const LetterSpaces: FC <{letters: string; correctLetters: Set<string>; gameState: string}> = ({letters, correctLetters, gameState}) => {

    const letterArray = letters.toUpperCase().split("");

    
    const verify = (letter: string) => {
       
        if (correctLetters.has(letter.toLowerCase())) {
            return <div className="border-b-2 border-black w-5 text-center text-black text-xl">{letter}</div>
        } else {
            if (gameState!="playing") {
                return <div className="border-b-2 border-black w-5 text-center text-red-500 text-xl">{letter}</div>
            }
            return <div className="border-b-2 border-black w-5 text-center text-transparent">{letter}</div>
        }
        
    }
    
    return (
        <div className="flex gap-10">
            {letterArray.map((letter, index) => (
                verify(letter)
            ))}
        </div>
        
    )
}