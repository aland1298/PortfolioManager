import {createSlice} from "@reduxjs/toolkit";
import {getPortfolioSummary} from "./portfolioSummaryThunk";

const initialData = {
    summary: "Temp",
    isLoading: false,
    hasError: false
}

const portfolioSummarySlice = createSlice({
    name: "portfolioSummary",
    initialState: initialData,
    reducers: {},
    extraReducers: {
        [getPortfolioSummary.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getPortfolioSummary.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.summary = action.payload;
        },
        [getPortfolioSummary.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default portfolioSummarySlice.reducer;