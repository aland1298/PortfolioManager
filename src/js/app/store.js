import {configureStore} from "@reduxjs/toolkit";
import headerReducer from '../view/home/features/featureHeader/headerSlice';
import clientDropdownReducer from '../view/home/features/featureClientDropdown/clientDropdownSlice';

export default configureStore({
    reducer: {
        header: headerReducer,
        clientDropdown: clientDropdownReducer
    }
});