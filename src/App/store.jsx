import { configureStore } from "@reduxjs/toolkit";
import weatherSlicereducer from '../features/Weatherslice'
export const store=configureStore({
    reducer:{
        weatherr:weatherSlicereducer 
    }
});