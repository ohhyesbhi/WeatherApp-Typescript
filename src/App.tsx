import {useState} from "react"
import './App.css'
import Home from './pages/Home'
// import {contextTempData} from "./contextApi/ContextAPI.js";
import { contextTempData } from "./contextApi/ContextAPI"
import {Toaster} from "react-hot-toast"

function App() {

const [degcelcius,setDegcelcius] = useState<boolean>(true)
  
 return (
    <>
    <contextTempData.Provider value={{degcelcius,setDegcelcius}}>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Home/>
    </contextTempData.Provider>
    </>
  )
}

export default App
