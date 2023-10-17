import HighlighrEow from "./HighlighrEow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function Maindata(){
    return (
        <>
        <div className="flex flex-col te basis-7/12 text-black bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl">
          <TopRow/>
          <WeekRow/>
          <div className="font-semibold text-2xl mt-8 text-left px-12 py-2">
            Today's Hightlight
          </div>
          <HighlighrEow/>
        </div>
        
        </>
    )
}

export default Maindata;