import { FC } from "react";

export const WinLose: FC<{gameState: string; restart: ()=>void}> = ({gameState, restart}) => {
    return (
    <div>
        {gameState === "lose" && (
            <div className="flex">
                <div>You've Lost</div>
                <button className="outline" onClick={restart}>Play Again</button>
            </div> 
        )
        } {(gameState=="win") && (
            <div className="flex">
                <div>You've Won </div>
                <button className="outline" onClick={restart}>Play Again</button>
            </div>
            
            )
        }
        </div>
    
    )
    }
        

    // )
        
    