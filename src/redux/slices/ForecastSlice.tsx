import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../config/Axiosinstance"

interface DayForecast{
   date : string,
   avgtemp_c : number,
   avgtemp_f : number,
   conditional : string
 }

 interface currentDayForecast{
    uv : number,
    wind_kmph : number,
    humidity : number,
    vis_km : number,
    aqi : number,
    sunrise : string,
    sunset : string,
    temp_c : number,
    temp_f : string,
    condition : string,
    is_day : boolean,
    chance_of_rain : number

 }

interface ForecastData{
   location:{
    localtime:string,
    country:string,
    region:string,
    name:string
   }
   dayforecast:DayForecast[],
   currentData : currentDayForecast
}

interface ForecastDataState{
status : "default"|"loading"|"success"|"failure",
data : ForecastData | undefined
}

const initialState:ForecastDataState = {
    status:'default',
    data:undefined,
}


export const fetchData  = createAsyncThunk('data/fetchdata',async()=>{
    try {
      const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=bengaluru`)  ;
      console.log(response)
      return response
    } catch (error) {
        console.log(error)
    }
})

const forecastslice = createSlice({
    name : 'forecast',
    initialState,
    reducers:{},
    extraReducers : (builder)=>{ 
        builder.addCase(fetchData.fulfilled,(state,action)=>{
                   if(!action.payload) return
                   
        })
    }
})


export default forecastslice