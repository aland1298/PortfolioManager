import {createAsyncThunk} from "@reduxjs/toolkit";

export const loadNames = createAsyncThunk(
    "clientNames/getAllNames",
    async () => {
        const data = await fetch("./src/data/profile.json");
        const json = await data.json();

        let arr = [];
        json.forEach((e) => {
            arr.push(e.name);
        })
        return arr;
    }
);