import { createContext, useContext } from "react";

interface temp{
    degcelcius:boolean,
    setDegcelcius:(value:boolean)=>void
  }

 export  const contextTempData = createContext<temp>({
      degcelcius:true,
      setDegcelcius:()=>{}
  })
  
export const useGlobalContext=()=>useContext(contextTempData);

