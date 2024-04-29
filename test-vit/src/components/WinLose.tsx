import { FC } from "react";

export const WinLose: FC<{gameState: string; restart: ()=>void}> = ({gameState, restart}) => {
    return (
    <div>
        {gameState === "lose" && (
            <div className="flex gap-10  items-center">
                <div aria-label = "Game Over Lose">You've Lost</div>
                <button className="outline bg-red-300 hover:bg-red-400" onClick={restart}>Play Again</button>
            </div>
        )
        } {(gameState=="win") && (
            <div className="flex gap-10 items-center">
                <div aria-label = "Game Over Win">You've Won </div>
                <button className="outline bg-red-300 hover:bg-red-400 p-1" onClick={restart}>Play Again</button>
            </div>

            )
        }
        </div>

    )
    }


    // )

