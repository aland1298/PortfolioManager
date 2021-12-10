import React from "react";
import {createSlice} from "@reduxjs/toolkit";
import {getAllStockDetails} from "./portfolioDetailsThunk";

const initialData = {
    stock: [{
        date: '',
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
        [getAllStockDetails.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.hasError = false;
            console.log(state)
            state.date = payload.date;
            state.ticker = payload.ticker;
            state.stockName = payload.stockName;
            state.currPrice = payload.currPrice;
        },
        [getAllStockDetails.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default portfolioDetailsSlice.reducer;