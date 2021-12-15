import {configureStore} from "@reduxjs/toolkit";
import headerReducer from '../view/home/features/featureHeader/headerSlice';
import clientDropdownReducer from '../view/home/features/featureClientDropdown/clientDropdownSlice';
import stockSummaryReducer from '../view/client/features/featureStockSummary/stockSummarySlice';
import portfolioDetailsReducer from "../view/client/features/featurePortfolioDetails/portfolioDetailsSlice";
import portfolioSummaryReducer from "../view/client/features/featurePortfolioSummary/portfolioSummarySlice";
import clientDetailsReducer from "../view/client/features/featureClientDetails/clientDetailsSlice";

export default configureStore({
    reducer: {
        header: headerReducer,
        clientDropdown: clientDropdownReducer,
        stockSummary: stockSummaryReducer,
        portfolioDetails: portfolioDetailsReducer,
        portfolioSummary: portfolioSummaryReducer,
        clientDetails: clientDetailsReducer
    }
});