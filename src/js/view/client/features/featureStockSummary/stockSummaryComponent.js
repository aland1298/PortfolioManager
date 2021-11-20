import React from "react";
import {useSelector} from "react-redux";
import {selectAllStockSummary} from "./stockSummarySelectors";

const StockSummaryComponent = () => {
    const stockSummary = useSelector(selectAllStockSummary);

    return (
        <ul id='stockSummary-element-container'>
            {stockSummary.map((e, index) => (
                <li className='stockSummary-element' key={index}>
                    <header>{e.ticker}</header>
                    <p>${e.price}</p>
                </li>
            ))}
        </ul>
    )
}

export default StockSummaryComponent;