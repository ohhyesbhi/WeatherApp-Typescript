import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from "../../config/Axiosinstance"

export interface DayForecast{
   date : string,
   avgtemp_c : number,
   avgtemp_f : number,
   conditional : string
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
    is_day : boolean,
    chance_of_rain : number

 }

export interface ForecastData{
   location:{
    localtime:string,
    country:string,
    region:string,
    name:string
   }
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
            is_day : false,
            chance_of_rain : 0
        }
    },
}


export const fetchData  = createAsyncThunk('data/fetchdata',async(data:string)=>{
    try {
      const response = await axiosInstance.get(`forecast.json?key=${import.meta.env.VITE_API_KEY}&days=7&aqi=yes&q=${data?data:"bengaluru"}`)  ;
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
                   if(action.payload == undefined) return;
                   console.log(action.payload.data,"current")
                 
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
            console.log(action)
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.status = "failure"
            console.log(action)
        })
    }
})


export default forecastslice