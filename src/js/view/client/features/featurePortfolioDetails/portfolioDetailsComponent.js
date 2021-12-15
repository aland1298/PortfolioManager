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
                    {stockDetails.map((e, index) => (
                        <tr key={index}>
                            <td key={"date" + e.ticker}>{e.date}</td>
                            <td key={"ticker" + e.ticker}>{e.ticker}</td>
                            <td key={"stockName" + e.stockName}>{e.stockName}</td>
                            <td key={"currPrice" + e.currPrice}>${e.currPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PortfolioDetailsComponent;