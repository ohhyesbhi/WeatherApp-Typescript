import HighlighrEow from "./HighlighrEow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";
import {useState} from "react";
import { useGlobalContext } from "../../contextApi/ContextAPI"

function Maindata(){
  const [week,setweek] = useState(true);
  // const [degcelcius,setDegcelcius] = useState(true)

  const {degcelcius,setDegcelcius} = useGlobalContext()

  function weekFn(str:boolean){
     setweek(str)
  }

  function setTempType(str:boolean){
     setDegcelcius(str)
  }


    return (
        <>
        <div className="flex flex-col te basis-7/12 text-black bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl">
          <TopRow value={weekFn} value1={setTempType}/>
          <WeekRow value={week} value1={degcelcius}/>
          <div className="font-semibold text-2xl mt-8 text-left px-10 py-2">
            Today's Hightlight
          </div>
          <HighlighrEow/>
        </div>
        
        </>
    )
}

export default Maindata;