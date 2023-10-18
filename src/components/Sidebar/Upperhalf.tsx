import {useState} from "react"

import {FaSearchLocation} from "react-icons/fa"
import {BsFillDropletFill} from "react-icons/bs"
import {AiFillCloud} from "react-icons/ai"

import Cloudynight from "../../assets/CloudyNight.png"
import {  useSelector } from "react-redux"
import { fetchData } from "../../redux/slices/ForecastSlice"
import { useAppDispatch } from "../../hooks/hooks"
import { ReduxState } from "../../ReduxState"

function Upperhalf() {
  const [text,setText] = useState("");
  const dispatch = useAppDispatch()

  const currentData = useSelector((state:ReduxState)=>state.forecast.data.currentData)
  console.log(currentData.temp_c,"okcurrent data")

  function handleOnClick(){
          dispatch(fetchData(text))
  }

  return (
    <div className="h-[70%] w-full p-4">
     <div className="flex felx-row justify-center ">
        {/* search bar div */}
        <input
        placeholder="Search..."
        className="px-2 py-2 rounded-tl-md w-[80%] rounded-bl-md bg-white text-black border-none"
        type="text"
        value={text}
        onChange={(e)=>{setText(e.target.value)
          // handleOnClick()
        }}
        />
        <button 
        className="basis-[15%] block flex flex-row justify-center items-center  rounded-tr-md rounded-br-md text-white text-lg bg-sky-600"
         onClick={()=>handleOnClick()}
         >
            <FaSearchLocation  />
        </button>
     </div>
     
     <div className="w-full flex flex-row justify-center items-center mt-3">
          <img 
              src={Cloudynight}
              className="w-[65%] h-[65%]"
          />
     </div>

     <div>
        {/* temperature data */}
        <div className="font-medium text-6xl mt-4 text-black flex flex-row items-start justify-center">
                 <div ></div>  
                 <div className="text-5xl">°C</div>
        </div>
        <div className="text-black text-center font-normal text-md mt-1">
                    Friday , 23:15
        </div>
     </div>

     <div className="h-[2px] w-[90%] bg-[#cbd5e1] mt-3"></div>
              

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

    </div>
  )
}

export default Upperhalf
