import { FC } from "react"


export const Noose: FC = () => {
    return (
        <div className="relative left-1/2 top-28 w-20 h-60">
        <div className="border-t border-black w-20"></div>
        <div className="border-l border-r border-black h-10"></div>
        <div className="border-r border-black w-20 h-60"></div>
        <div className="border-t -translate-x-1/2 border-black w-72"></div>
      </div>
    )
}