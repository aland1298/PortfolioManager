import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {getAllStockNames} from "./stockSummaryThunk";

const initialData = {
    stockNames: [''],
    hasError: false,
    isLoading: false
}

const stockSummarySlice = createSlice({
    name: 'stockNames',
    initialState: initialData,
    reducers: {},
    extraReducers: {
        [getAllStockNames.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllStockNames.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.stockNames = action.payload;
        },
        [getAllStockNames.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default stockSummarySlice.reducer;