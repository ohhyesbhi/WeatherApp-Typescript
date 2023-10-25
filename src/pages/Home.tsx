import Maindata from "../components/Maindata/Maindata"
import Sidebar from "../components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import { fetchData } from "../redux/slices/ForecastSlice"
import { useAppDispatch } from "../hooks/hooks"
import axios from "axios"
import { useSelector } from "react-redux"
import { ReduxState } from "../ReduxState"
import {memo} from 'react'

import Clearday from "../assets/clearDay.jpg"
import Rainyday from "../assets/rain.jpg"
import Cloudyday from "../assets/partlyCloudy.jpg"
import Cloudynight from "../assets/NightImage.jpg"
import Clearnight from "../assets/clearNight.jpg"
import Snow from "../assets/snow.jpg"
import Fog from "../assets/fog1.jpg"
import toast from "react-hot-toast"


function Home(){

    const dispatch = useAppDispatch()
    const [city,setCity] = useState<string>("")
    const data = useSelector((state:ReduxState)=>state.forecast.data);
    const condition:string = data.currentData.condition;
    const is_day:number = data.currentData.is_day;


    let image:string = "";

        if(is_day == 1){

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
         image = Clearday
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
    else if( is_day == 0){
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



    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async(position)=>{
            const response = await axios.get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_LOC_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
            // toast.promise(response,{
            //     loading: 'Loading',
            //     success: 'Got the data',
            //     error: 'Error when fetching',
            // })
            
            if(response?.data?.address?.city != undefined){
              
            setCity(response?.data?.address?.city)
            toast.success("Added current location weather condition")
            }
            else if(response?.data?.address?.town != undefined){
                setCity(response?.data?.address?.town)
            }
        });
        if(!city){
            dispatch(fetchData("bangalore"))
        }else{
           dispatch(fetchData(city))
        }
    },[])

    return (

        <>
        <div className="min-h-[100vh] flex flex-row justify-center items-stretch px-8 py-8 " style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,url(${image})`}}>
                 <Sidebar/>
                 <Maindata/>
        </div>

        </>
    )
}

export default memo(Home)