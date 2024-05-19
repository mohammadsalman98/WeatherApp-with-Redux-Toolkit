import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isloading: false,
    weather: {},
    result: ''
}
export const fetchWeather = createAsyncThunk('weatherapi/fetchWeather', async () => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=33.51&lon=36.27&appid=6c81bf246a003839bcb4665c8b0d169a");
    const Capital = response.data.name;
    const temp = Math.round(response.data.main.temp - 273.15);
    const description = response.data.weather[0].description;
    const min = Math.floor(response.data.main.temp_min - 273.15);
    const max = Math.ceil(response.data.main.temp_max - 273.15);
    const responseIcon = response.data.weather[0].icon;

    return {
        Capital,
        temp,
        description,
        min,
        max,
        icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
    };
})

export const weatherSlice = createSlice({
    name: 'weatherapi',
    initialState,
    reducers: {
        changeResult: (state) => {
            state.result = 'changed';
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchWeather.pending, (state,) => {
            state.isloading = true;
        })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isloading = false;
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.isloading = false;
            });

    },
});
export const { changeResult } = weatherSlice.actions;
export default weatherSlice.reducer