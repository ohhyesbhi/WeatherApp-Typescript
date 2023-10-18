// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import foreCastReducer from "./slices/ForecastSlice"; 

const store = configureStore({
    reducer:{
        forecast : foreCastReducer.reducer
    },
    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false})
}
)

export type AppDispatch = typeof store.dispatch;

export default store