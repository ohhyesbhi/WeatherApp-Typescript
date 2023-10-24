
import {MdLocationOn} from "react-icons/md"
import { useSelector } from "react-redux"
import { ReduxState } from "../../ReduxState"

function Lowerhalf() {

  

  const currentData = useSelector((state:ReduxState)=>state.forecast.data)


  return (
  <div className="h-[30%] w-full p-4 flex flex-col justify-end">


    <div className="w-[15%] flex flex-row items-center">
        
        <div><MdLocationOn/></div> 
        <p className="ml-1"><span>{currentData.location.name},{currentData.location.region},{currentData.location.country}</span></p>
    </div>

  </div>
  )
}

export default Lowerhalf
