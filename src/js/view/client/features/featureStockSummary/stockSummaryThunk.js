import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAllStockNames = createAsyncThunk(
    'stockNames/getAllNames',
    async (name) => {
        const data = await fetch("./src/data/profile.json");
        const json = await data.json();
        return json.find(e => e.name === name).ticker;
    }
);