import React from "react";
import {useSelector} from "react-redux";
import {selectAllStockNames} from "./stockSummarySelectors";

const StockSummaryComponent = () => {
    const stockNames = useSelector(selectAllStockNames);

    return (
        <ul id='stockSummary-element-container'>
            {stockNames.map((e, index) => (
                <li className='stockSummary-element' key={index}>{e}</li>
            ))}
        </ul>
    )
}

export default StockSummaryComponent;