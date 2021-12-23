import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchClientData} from "../../../../api/fetchClientData";
import {fetchStockData} from "../../../../api/fetchStockData";

export const getAllStockDetails = createAsyncThunk(
    'portfolioDetails/getAllDetails',
    async (name) => {
        // Get all tickers for the client name
        const clientData = await fetchClientData();
        const profile = clientData.find(e => e.name === name);
        const stockData = await fetchStockData();

        let arr = [];
        profile.stocks.forEach(t => {
            const stock = stockData.find(o => o.ticker === t.ticker)
            const stockProfile = profile.stocks.find(e => e.ticker === t.ticker);

            const date = stock.prices[0].date;
            const stockName = stock.name;
            const currPrice = stock.prices[0].open;
            const pricePurchased = stockProfile.pricePurchased;
            const long = stockProfile.long;
            const short = stockProfile.short;

            if(currPrice !== undefined) {
                arr.push({
                    date: date,
                    ticker: t.ticker,
                    stockName: stockName,
                    currPrice: currPrice,
                    pricePurchased: pricePurchased,
                    long: long,
                    short: short
                })
            }
        });
        return arr;
    }
);