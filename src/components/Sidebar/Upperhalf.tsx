import {FaSearchLocation} from "react-icons/fa"

import Cloudynight from "../../assets/CloudyNight.png"

function Upperhalf() {
  return (
    <div className="h-[60%] w-full p-4">
     <div className="flex felx-row justify-center ">
        {/* search bar div */}
        <input
        placeholder="Search..."
        className="px-2 py-2 rounded-tl-md rounded-bl-md basis-9/12 bg-white text-black border-none"
        type="text"
        />
        <button className="basis-[10%] block flex flex-row justify-center items-center  rounded-tr-md rounded-br-md text-white text-lg bg-sky-600">
            <FaSearchLocation />
        </button>
     </div>
     
     <div className="w-full flex flex-row justify-center items-center mt-3">
          <img 
              src={Cloudynight}
              className="w-[50%] h-[50%]"
          />
     </div>

     <div>
        {/* temperature data */}
        <div className="font-medium text-6xl text-black flex flex-row items-start justify-center">
                 <div > 24.5</div>  
                 <div className="text-5xl">°C</div>
        </div>
        <div className="text-black text-center font-normal text-md mt-1">
                    Friday , 23:15
        </div>
     </div>

    </div>
  )
}

export default Upperhalf
