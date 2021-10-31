import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    header: ''
};

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        updateHeader: (state, action) => {
            state.header = action.payload;
        }
    }
});

export const {updateHeader} = headerSlice.actions;
export default headerSlice.reducer;