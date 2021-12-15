import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {getAllStockDetails} from "./portfolioDetailsThunk";

const initialData = {
    stock: [{
        date: 0,
        ticker: '',
        stockName: '',
        currPrice: 0
    }],
    isLoading: false,
    hasError: false
}

const portfolioDetailsSlice = createSlice({
    name: 'portfolioDetails',
    initialState: initialData,
    reducers: {},
    extraReducers: {
        [getAllStockDetails.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getAllStockDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.stock = action.payload;
        },
        [getAllStockDetails.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default portfolioDetailsSlice.reducer;