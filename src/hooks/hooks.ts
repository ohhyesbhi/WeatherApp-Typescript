import {useDispatch} from "react-redux";
import { AppDispatch } from "../redux/Store";


export const useAppDispatch = ()=> useDispatch<AppDispatch>()