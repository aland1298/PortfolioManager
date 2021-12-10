import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchClientData} from "../../../../api/fetchClientData";
import {fetchStockData} from "../../../../api/fetchStockData";

export const getAllStockDetails = createAsyncThunk(
    "stockDetails/getAllDetails",
    async (name) => {
        // Get all tickers for the client name
        const clientData = await fetchClientData();
        const tickers = clientData.find(e => e.name === name).ticker;

        const stockData = await fetchStockData();

        let arr = [];
        tickers.forEach(t => {
            const date = stockData.find(o => o.ticker === t).prices[0].date;
            const name = stockData.find(o => o.ticker === t).name;
            const price = stockData.find(o => o.ticker === t).prices[0].open;
            if(price !== undefined) {
                arr.push({date: date, ticker: t, stockName: name, currPrice: price})
            }
        });

        return arr;
    }
);