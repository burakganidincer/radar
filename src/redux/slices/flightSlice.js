import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/flightActions";

const initialState = {
  isLoading: true,
  isError: false,
  flights: [], // bütün uçuşların verisi
  path: [], //bir ucusun izlediği yol
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    //map bileşeninde kullanılacak rotayı belirler
    setPath: (state, action) => {
      state.path = action.payload;
    },
    //mevcut rotayı temizler
    clearPath: (state) => {
      state.path = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      }),
      builder.addCase(getFlights.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isError = false),
          (state.flights = action.payload);
      });
  },
});

export const { setPath, clearPath } = flightSlice.actions;

export default flightSlice.reducer;
