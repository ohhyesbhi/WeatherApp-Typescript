import {useState} from "react"

import {FaSearchLocation} from "react-icons/fa"
import {BsFillDropletFill} from "react-icons/bs"
import {AiFillCloud} from "react-icons/ai"
import {  useSelector } from "react-redux"
import { fetchData } from "../../redux/slices/ForecastSlice"
import { useAppDispatch } from "../../hooks/hooks"
import { ReduxState } from "../../ReduxState"
import {useGlobalContext} from "../../contextApi/ContextAPI"

import Cloudyday from "../../assets/icons/Cloudyday.png"
import Rainyday from  "../../assets/icons/rain.png"
import Sunnyday from "../../assets/icons/sunny.png"
import Snow from "../../assets/icons/snow_8047129.png"
import Fog from "../../assets/icons/foggy_7802819.png"
import Cloudynight from "../../assets/icons/CloudyNight.png"
import Clearnight from "../../assets/icons/night.png"

function Upperhalf() {
  const [text,setText] = useState("");
  const dispatch = useAppDispatch()
  const {degcelcius} = useGlobalContext()

  const currentData = useSelector((state:ReduxState)=>state.forecast.data)
  const dateStr = currentData.dayforecast[0]?.date;
  const presentDate = new Date(dateStr);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = presentDate.getDay();
  const dayName = daysOfWeek[dayOfWeek];
  const time:string[] = currentData.location.localtime.split(" ");
  // time.shift()
  console.log(time,"time")
  

//  const hour = time[1].split(":");
//    const value = +hour[0]
//    let meridiem:string = ""

//    if (value < 12) {
//      meridiem = 'AM';
//    } else {
//      meridiem = 'PM';
//    }

   const condition = currentData.currentData.condition
   let image : string = ""

   if(currentData.currentData.is_day == 1){

    if(condition == "Partly cloudy" || condition == "Cloudy" || condition == "Patchy rain possible" || condition == "Overcast" ){
      image = Cloudyday;
    }
    else if(condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder" ||  condition == "Patchy light rain"
    || condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain at times" ||
    condition == "Heavy rain" || condition == "Light freezing rain" || condition == "Moderate or heavy rain shower" || condition == "Torrential rain shower" 
    || condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder" || condition == "Patchy sleet possible" || condition == "Light sleet" ||
    condition == "Moderate or heavy sleet" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers" || 
    condition == "Thundery outbreaks possible"
    ){
      image = Rainyday
    }
    else if(condition == "Sunny" || condition == "Clear"){
      image = Sunnyday
    }
    else if(condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Patchy light snow" || condition == "Light snow"
    || condition == "Patchy moderate snow" || condition == "Moderate snow" || condition == "Patchy heavy snow" || condition == "Heavy snow" ||
    condition == "Light snow showers" || condition == "Moderate or heavy snow showers" || condition == "Ice pellets" || condition == "Light showers of ice pellets"
    || condition == "Moderate or heavy showers of ice pellets" || condition == "Blizzard" || condition == "Heavy freezing drizzle" || condition == "Light drizzle" ||
    condition == "Patchy freezing drizzle possible" || condition == "Freezing drizzle" || condition == "Heavy freezing drizzle"
    ){
      image = Snow
    }
    else if(condition == "Fog" || condition == "Freezing fog"){
      image = Fog
    }else{
      image = Cloudyday
    }
 }
 else if( currentData.currentData.is_day == 0){
   if(condition == "Partly cloudy" || condition == "Cloudy" || condition == "Patchy rain possible" || condition == "Overcast" ){
     image = Cloudynight;
   }
   else if(condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder" ||  condition == "Patchy light rain"
   || condition == "Light rain" || condition == "Moderate rain at times" || condition == "Moderate rain" || condition == "Heavy rain at times" ||
   condition == "Heavy rain" || condition == "Light freezing rain" || condition == "Moderate or heavy rain shower" || condition == "Torrential rain shower" 
   || condition == "Patchy light rain with thunder" || condition == "Moderate or heavy rain with thunder" || condition == "Patchy sleet possible" || condition == "Light sleet" ||
   condition == "Moderate or heavy sleet" || condition == "Light sleet showers" || condition == "Moderate or heavy sleet showers" || 
   condition == "Thundery outbreaks possible"
   ){
     image = Rainyday
   }
   else if(condition == "Sunny" || condition == "Clear"){
     image = Clearnight
   }
   else if(condition == "Patchy snow possible" || condition == "Blowing snow" || condition == "Patchy light snow" || condition == "Light snow"
   || condition == "Patchy moderate snow" || condition == "Moderate snow" || condition == "Patchy heavy snow" || condition == "Heavy snow" ||
   condition == "Light snow showers" || condition == "Moderate or heavy snow showers" || condition == "Ice pellets" || condition == "Light showers of ice pellets"
   || condition == "Moderate or heavy showers of ice pellets" || condition == "Blizzard" || condition == "Heavy freezing drizzle" || condition == "Light drizzle" ||
   condition == "Patchy freezing drizzle possible" || condition == "Freezing drizzle" || condition == "Heavy freezing drizzle"
   ){
     image = Snow
   }
   else if(condition == "Fog" || condition == "Freezing fog"){
     image = Fog
   }else{
     image = Cloudynight
   }
 }


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
        }}
        />
        <button 
        className="basis-[15%] block flex flex-row justify-center items-center  rounded-tr-md rounded-br-md text-white text-lg bg-[#5598fd]"
         onClick={()=>handleOnClick()}
         >
            <FaSearchLocation  />
        </button>
     </div>
     
     <div className="w-full flex flex-row justify-center items-center mt-3">
          <img 
              src={image}
              className="w-[65%] h-[65%]"
          />
     </div>

     <div>
        {/* temperature data */}
        <div className="font-medium text-6xl mt-4 text-black flex flex-row items-start justify-center">
          {
            degcelcius==true?
            <>
            <div >{currentData.currentData.temp_c}</div>  
            <div className="text-5xl">°C</div>    
            </>
            :
            <>
            <div >{currentData.currentData.temp_f}</div>  
            <div className="text-5xl">°F</div>    
            </>
          }
                
        </div>
        <div className="text-black text-center font-normal text-md mt-1">
                    {dayName} , {time[1]} 
                     {/* {meridiem} */}
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
            {currentData.currentData.condition}
          </div>

      </div>

      <div className="flex items-center gap-4 my-2 ">
          <div>
            <BsFillDropletFill/>
          </div>
          <div>
            Perc- {currentData.currentData.chance_of_rain+"%"}
          </div>

      </div>
    </div>
    
    </div>
  )
}

export default Upperhalf
