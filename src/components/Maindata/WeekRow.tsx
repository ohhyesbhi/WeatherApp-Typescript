import TempCard from "../TempCard"
import Cloudytemp from "../../assets/Cloudytemp.png"

function WeekRow() {
  return (
   <>
   <div className="w-full px-12 py-2 flex flex-wrap gap-4 flex-wrap">
     
      <TempCard title="Friday" temperature="25.3°C" image={Cloudytemp}/>
      <TempCard title="Friday" temperature="25.3°C" image={Cloudytemp}/>
      <TempCard title="Friday" temperature="25.3°C" image={Cloudytemp}/>
      <TempCard title="Friday" temperature="25.3°C" image={Cloudytemp}/> 
   </div>
    
    
   </>
  )
}

export default WeekRow
