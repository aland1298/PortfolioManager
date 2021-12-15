import {createSlice} from "@reduxjs/toolkit";
import {getClientDetails} from "./clientDetailsThunk";

const initialData = {
    summary: "Temp",
    isLoading: false,
    hasError: false
}

const clientDetailsSlice = createSlice({
    name: "clientDetails",
    initialState: initialData,
    reducers: {},
    extraReducers: {
        [getClientDetails.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getClientDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.summary = action.payload;
        },
        [getClientDetails.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default clientDetailsSlice.reducer;