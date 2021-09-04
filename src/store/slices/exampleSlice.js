import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


import { exampleAPI } from "store/api/exampleAPI";



export const fetchExample = createAsyncThunk(
  "example/fetchExample",
  async (payload) => {
    const response = await exampleAPI.fetchExample(payload);
    return response.data;
  }
);


const initialState = {
  exampleData: [],
  loading: false,
  isRegisterSuccessful: false,
  logged: true
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setActionSlice: (state, action) => {
      state.actionStatus = action.payload;
    },
  },
  extraReducers: {
    [fetchExample.pending]: (state) => {
      state.loading = true;
    },
    [fetchExample.fulfilled]: (state, action) => {
      state.exampleData = action.payload
      state.loading = false;
    },
    [fetchExample.rejected]: (state) => {
      state.loading = false;
    },
  },
});


export const selectIsLoading = (state) => state.example?.loading;
export const selectExampleData = (state) => state.example?.exampleData;
export const selectIsUserLogged = (state) => state.example?.logged;


export const { setActionSlice } = exampleSlice.actions;


export default exampleSlice;
