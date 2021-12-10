import React from "react";
import {useSelector} from "react-redux";
import {selectAllStockDetails} from "./portfolioDetailsSelectors";

const PortfolioDetailsComponent = () => {
    const stockDetails = useSelector(selectAllStockDetails);

    return (
        <>
            <h2>Portfolio Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ticker</th>
                        <th>Stock Name</th>
                        <th>Current Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stockDetails.date}</td>
                        <td>{stockDetails.ticker}</td>
                        <td>{stockDetails.stockName}</td>
                        <td>{stockDetails.currPrice}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PortfolioDetailsComponent;