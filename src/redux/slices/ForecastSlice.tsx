import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../config/Axiosinstance"

export interface DayForecast{
   date : string,
   avgtemp_c : number,
   avgtemp_f : number,
   condition : string
 }

 export interface DayForecast1{
    date : string,
    day :{
    avgtemp_c : number,
    avgtemp_f : number,
    condition : {
        text : string
    }
   
    }
  }

 export interface currentDayForecast{
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
    is_day : number,
    chance_of_rain : number

 }

 interface HourForecast{
    time:string,
    temp_c:number,
    temp_f:number,
    chance_of_rain:number,
    condition : string
    is_day : number
 }

 interface HourForecast1{
   time:string,
   chance_of_rain:number,
   temp_c:string,
   temp_f:string,
   condition : {
              text : string
       }
    is_day : number   
 }

export interface ForecastData{
   location:{
    localtime:string,
    country:string,
    region:string,
    name:string
   }
   hourforeCast:HourForecast[]
   dayforecast:DayForecast[],
   currentData : currentDayForecast
}

export interface ForecastDataState{
status : "default"|"loading"|"success"|"failure",
data : ForecastData 
}

const initialState:ForecastDataState = {
    status:'default',
    data:{
        location:{
            country:'',
            region:'',
            name:'',
            localtime:''
        },
        dayforecast:[],
        hourforeCast:[],
        currentData:{
            uv : 0,
            wind_kmph : 0,
            humidity : 0,
            vis_km : 0,
            aqi : 0,
            sunrise : '',
            sunset : '',
            temp_c : 0,
            temp_f : '',
            condition : '',
            is_day : 1,
            chance_of_rain : 0
        }
    },
}


export const fetchData  = createAsyncThunk('data/fetchdata',async(data:string)=>{
    try {
      const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${data?data:"bengaluru"}`);
      console.log(response)
      return response
    } catch (error) {
        alert("The term is serached don't exist in our date base")
    }
})

const forecastslice = createSlice({
    name : 'forecast',
    initialState,
    reducers:{},
    extraReducers : (builder)=>{ 
        builder.addCase(fetchData.fulfilled,(state,action)=>{
                   if(action.payload == undefined) return;
                 
                   const {location} = action.payload.data;
                   const foreCast = action.payload.data.forecast.forecastday;
                   const currentData = action.payload.data.current

                   state.data.location.name = location?.name;
                   state.data.location.country = location?.country
                   state.data.location.region = location?.region
                   state.data.location.localtime = location?.localtime 

                   state.data.dayforecast = foreCast.map((data:DayForecast1)=>{
                    return{
                        date : data.date,
                        avgtemp_c : data.day.avgtemp_c,
                        avgtemp_f : data.day.avgtemp_f,
                        condition : data.day.condition.text
                    }
                   })
                   state.data.hourforeCast = foreCast[0].hour.map((data:HourForecast1)=>{
                    return{
                     time:data.time,
                     chance_of_rain:data.chance_of_rain,
                     temp_c:data.temp_c,
                     temp_f:data.temp_f,
                     condition : data.condition.text,
                     is_day : data. is_day 
                    }
                   })

                   state.data.currentData= {
                    uv : currentData.uv,
                    wind_kmph : currentData.wind_kph,
                    humidity : currentData.humidity,
                    vis_km : currentData.vis_km                    ,
                    aqi : currentData.air_quality.pm2_5,
                    sunrise : foreCast[0].astro.sunrise,
                    sunset : foreCast[0].astro.sunset,
                    temp_c : currentData.temp_c,
                    temp_f : currentData.temp_f,
                    condition : currentData.condition.text,
                    is_day : currentData.is_day,
                    chance_of_rain : foreCast[0].day.daily_chance_of_rain
                   }



        })
        .addCase(fetchData.pending,(state,action)=>{
            state.status = "loading"
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status = "failure"
        })
    }
})


export default forecastslice