import {configureStore} from "@reduxjs/toolkit";
import headerReducer from '../view/home/features/featureHeader/headerSlice';
import clientDropdownReducer from '../view/home/features/featureClientDropdown/clientDropdownSlice';
import stockSummaryReducer from '../view/client/features/featureStockSummary/stockSummarySlice';

export default configureStore({
    reducer: {
        header: headerReducer,
        clientDropdown: clientDropdownReducer,
        stockNames: stockSummaryReducer
    }
});