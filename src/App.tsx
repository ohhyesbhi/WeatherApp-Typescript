import {useEffect} from "react"
import './App.css'
import Home from './pages/Home'
import { fetchData } from "./redux/slices/ForecastSlice"
import { useDispatch } from "react-redux/es/exports"
import { useAppDispatch } from "./hooks/hooks"


function App() {
  const dispatch = useAppDispatch();
 useEffect(()=>{
   console.log(dispatch(fetchData()))
 },[])
  return (
    <>
    <Home/>
    </>
  )
}

export default App
