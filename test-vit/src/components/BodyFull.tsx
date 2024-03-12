export const BodyFull = () => {
    return (
        <div className="mt-9 flex flex-col justify-center items-center">
          <div className="border h-[50px] w-[50px] border-black p-100 rounded-full"></div>
  
          <div className="flex flex-row">
          <div className="mt-8 rotate-45 border-t border-black w-[50px] h-[20px]"></div>
          <div className="border-l border-black h-[100px]"></div>
          <div className="mt-8 -rotate-45 border-t border-black w-[50px] h-[20px]"></div>
          </div>
          
          <div className="flex flex-row h-6 justify-center items-center">
          <div className="mt-2 ml-4 -rotate-45 border-t border-black w-[50px]"></div>
          <div className="mt-2 -ml-4 mr-4 rotate-45 border-t border-black w-[50px]"></div>
          </div>
        </div>
    )

}