import TempCard from "../TempCard"
import Cloudyday from "../../assets/icons/Cloudyday.png"
import Rainyday from  "../../assets/icons/rain.png"
import Sunnyday from "../../assets/icons/sunny.png"
import Snow from "../../assets/icons/snow_8047129.png"
import Fog from "../../assets/icons/foggy_7802819.png"
import Cloudynight from "../../assets/icons/CloudyNight.png"
import Clearnight from "../../assets/icons/night.png"
import { ReduxState } from "../../ReduxState";
import {  useSelector } from "react-redux";
import { uid } from 'uid'

function WeekRow({value,value1}:{value:boolean,value1:boolean}) {
  
  const currentData = useSelector((state:ReduxState)=>state);

  const dateArr = currentData.forecast.data.dayforecast;
  const hourArr = currentData.forecast.data.hourforeCast;

  // useEffect(()=>{
  //        date
  // },[value])


  return (
   <>
   <div className="w-full px-16 py-2 flex flex-wrap gap-4 flex-wrap">

    {
      (value == true)?
      dateArr.map((items)=>{
        console.log(items)
           const weekDates = items.date
           const dateObject = new Date(weekDates);
           const daysOfWeek:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
           const dayName = daysOfWeek[dateObject.getDay()];
           const id = uid();
          
           const condition = items.condition
           let image:string = "";
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
       




        return (
        
          <TempCard key={id} title={dayName} temperature={(value1)?items.avgtemp_c+"°C":items.avgtemp_f+"°F"} image={image}/>
         
        )
      })
      :

      hourArr.map((items)=>{
                 // is_day --> 1 (morning)
        const condition = items.condition
        let image:string = "";

        if(items.is_day == 1){

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
    else if( items.is_day == 0){
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

        const time = items.time.split(" ").reverse()[0];
        const parts = time.split(":")
        let hours = parseInt(parts[0])
        const minutes = parseInt(parts[1])
        const period = (hours > 12 )?"PM":"AM"
        if (hours > 12) {
          hours -= 12;
      } else if (hours === 0) {
          hours = 12; 
      }

      const time12h = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + " " + period;
      const id = uid();
        return (
          
          <TempCard key={id} title={time12h} temperature={(value1)?items.temp_c+"°C":items.temp_f+"°F"} image={image}/>
         
        )
      })

    }
        </div>
    
    
   </>
  )
}

export default WeekRow
