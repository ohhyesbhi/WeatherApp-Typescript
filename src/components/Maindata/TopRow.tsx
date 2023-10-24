import {useState} from "react"
import { useGlobalContext } from "../../contextApi/ContextAPI"

function TopRow({value,value1}:{value:(str:boolean)=>void,value1:(str:boolean)=>void}) {

  const[state,setState] = useState(false)
  const {degcelcius} = useGlobalContext()

  return (
    <div className="flex justify-between items-center w-full px-8 mt-2">
      <div className="flex items-center justify-center font-semibold text-xl">
        {/* today or week */}
         <div onClick={()=>{
          value(false)
          setState(true)
        }} className={`mr-4 ${state?"text-[#5598fd]":""}  cursor-pointer`}>
          Today   
         </div>
         <div onClick={()=>{
          value(true)
          setState(false)
          }} className={`ml-4 ${state?"":"text-[#5598fd]"} cursor-pointer`}>
          Week
         </div>   
      </div>

      <div className="flex items-center justify-center">
          {/* C or F */}
          <div className={`mr-8 border rounded-[100%] ${degcelcius?"bg-black text-white":"bg-slate-400 text-black"}  px-3 py-2 hover: cursor-pointer`}
          onClick={()=>value1(true)}
          >
           °C
          </div>
          <div  className={`mr-8 border rounded-[100%] ${!degcelcius?"bg-black text-white":"bg-slate-400 text-black"} px-[12.75px] py-[8.5px] hover: cursor-pointer`}
          onClick={()=>value1(false)}
          >
            °F
          </div>
        
      </div>
    </div>
  )
}

export default TopRow
