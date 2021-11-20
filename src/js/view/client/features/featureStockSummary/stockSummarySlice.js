import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {getAllStockSummary} from "./stockSummaryThunk";

const initialData = {
    stockSummary: [{name: '', price: 0}],
    hasError: false,
    isLoading: false
}

const stockSummarySlice = createSlice({
    name: 'stockSummary',
    initialState: initialData,
    reducers: {},
    extraReducers: {
        [getAllStockSummary.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllStockSummary.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.stockSummary = action.payload;
        },
        [getAllStockSummary.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default stockSummarySlice.reducer;