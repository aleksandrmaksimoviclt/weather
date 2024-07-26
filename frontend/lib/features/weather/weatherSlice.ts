// store/weatherSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface WeatherState {
  current: any;
  forecast: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  current: null,
  forecast: null,
  loading: false,
  error: null,
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (location: string, thunkAPI) => {
    try {
      const response = await axios.get(`YOUR_WEATHER_API_URL`, {
        params: {
          q: location,
          apiKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.current = action.payload.current;
        state.forecast = action.payload.forecast;
      })
      .addCase(
        fetchWeather.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
        },
      );
  },
});

export default weatherSlice.reducer;
