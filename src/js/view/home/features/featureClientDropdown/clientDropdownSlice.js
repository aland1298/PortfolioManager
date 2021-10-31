import {createSlice} from "@reduxjs/toolkit";
import {loadNames} from "./clientDropdownThunks";

const initialData = {
    clientNames: [],
    currClientName: 'Select a Client',
    isLoading: false,
    hasError: false
};

const clientDropdownSlice = createSlice({
    name: 'clientNames',
    initialState: initialData,
    reducers: {
        updateCurrentClientName: (state, action) => {
            state.currClientName = action.payload;
        }
    },
    extraReducers: {
        [loadNames.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadNames.fulfilled]: (state, action) => {
            state.clientNames = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadNames.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const {updateCurrentClientName} = clientDropdownSlice.actions;
export default clientDropdownSlice.reducer;