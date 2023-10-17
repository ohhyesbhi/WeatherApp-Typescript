import {BsFillDropletFill} from "react-icons/bs"
import {AiFillCloud} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"

function Lowerhalf() {
  return (
  <div className="h-[45%] w-full p-4 flex flex-col justify-between">

    <div className="flex flex-col">
        {/* precepitation */}
        <div className="flex items-center gap-4 my-2">
          <div>
             <AiFillCloud/>
          </div>
          <div>
            Partially cloudy 
          </div>

      </div>

      <div className="flex items-center gap-4 my-2 ">
          <div>
            <BsFillDropletFill/>
          </div>
          <div>
            Pres-10%
          </div>

      </div>
    </div>

    <div className="w-[15%] flex flex-row items-center">
        
        <div><MdLocationOn/></div> 
        <p className="ml-4">Bangalore,Karnataka,India</p>
    </div>

  </div>
  )
}

export default Lowerhalf
