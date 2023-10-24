
import HighlightCard from './HighLightCard'
import {  useSelector } from "react-redux"
import { ReduxState } from '../../ReduxState'

function HighlighrEow() {
  const currentData = useSelector((state:ReduxState)=>state.forecast.data.currentData);
  function visibility(){
    if(currentData.vis_km < 1.6){
      return "Low";
      }
    else if(currentData.vis_km >= 1.6 && currentData.vis_km < 4.8){
      return "Moderate"
      }
    else{
      return "High"
        }
  }

  function humidity(){
     if(currentData.humidity < 40 ){
        return "Low"
     }else if(currentData.humidity >= 40 && currentData.humidity < 60  ){
         return "Moderate"
     }else{
          return "High"
     }
  }

  function Airquality(){
    if(currentData.aqi <= 50){
      return "Good 😊"
    }
    else if(currentData.aqi > 50 && currentData.aqi <= 100 ){
      return "Moderate 🙃"
    }
    else {
      return "Unhealthy 😢"
    }
  }
   
 function radiation(){
  if(currentData.uv <= 5){
    return "Low"
  }else if(currentData.uv >5 && currentData.uv < 8 ){
    return "Moderate"
  }else{
    return "High"
  }
 }
 

  
  return (
  <div className='flex flex-row justify-center flex-wrap gap-5 mb-4 mt-2 ml-3'>

   <HighlightCard title='UV index' data={currentData.uv.toString()} footer={radiation()}/>
   <HighlightCard title='Wind status' data={currentData.wind_kmph.toString()} footer='km/h'/>
   <HighlightCard title='Humidity' data={currentData.humidity.toString() +"%" } footer={humidity()}/>
   <HighlightCard title='Visibility' data={currentData.vis_km.toString()} footer={visibility()}/>
   <HighlightCard title='Sunrise & Sunset' data={currentData.sunrise} footer={currentData.sunset}/>
   <HighlightCard title='Air quality' data={currentData.aqi.toString()} footer={Airquality()}/>
  </div>
  )
}

export default HighlighrEow
