import {fetchClientData} from "../../../../api/fetchClientData";
import {fetchStockData} from "../../../../api/fetchStockData";
import {createAsyncThunk} from "@reduxjs/toolkit";

/**
 * Retrieves the stock tickers and price that the client holds in the form of [{ticker: '', price: ''}]. Price is the
 * most recent price.
 *
 * @type {AsyncThunk<*[], void, {}>}
 */
export const getAllStockSummary = createAsyncThunk(
    'stockSummary/getAllNames',
    async (name) => {
        // Get all tickers for the client name
        const clientData = await fetchClientData();
        const tickers = clientData.find(e => e.name === name).ticker;

        const stockData = await fetchStockData();

        let arr = [];
        tickers.forEach(t => {
            const price = stockData.find(o => o.ticker === t).prices[0].open;
            if(price !== undefined) {
                arr.push({ticker: t, price: price})
            }
        });

        return arr;
    }
);