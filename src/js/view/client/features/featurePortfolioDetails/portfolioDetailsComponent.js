import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectAllStockDetails} from "./portfolioDetailsSelectors";
import {formatCurrency} from "../../../../../util/currencyFormat";
import handlePnL from "./handlers/handlePnL";

const PortfolioDetailsComponent = () => {
    const stockDetails = useSelector(selectAllStockDetails);

    useEffect(() => {
        handlePnL();
    },[stockDetails])

    return (
        <>
            <h2>Portfolio Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Ticker</th>
                        <th>Stock Name</th>
                        <th>Price Purchased</th>
                        <th>Current Price</th>
                        <th>Total Shares</th>
                        <th>Total Equity</th>
                        <th>Unrealized PnL</th>
                    </tr>
                </thead>
                <tbody>
                    {stockDetails.map((e, index) => (
                        <tr key={index}>
                            <td key={"date" + e.ticker}>
                                {e.date}
                            </td>
                            <td key={"ticker" + e.ticker}>
                                {e.ticker}
                            </td>
                            <td key={"stockName" + e.stockName}>
                                {e.stockName}
                            </td>
                            <td key={"pricePurchased" + e.pricePurchased}>
                                {formatCurrency.format(e.pricePurchased)}
                            </td>
                            <td key={"currPrice" + e.currPrice}>
                                {formatCurrency.format(e.currPrice)}
                            </td>
                            <td key={"totalShares" + e.long - e.short}>
                                {e.long - e.short}
                            </td>
                            <td key={"totalEquity" + Math.abs(e.long - e.short) * e.pricePurchased}>
                                {formatCurrency.format(Math.abs(e.long - e.short) * e.pricePurchased)}
                            </td>
                            <td className={'pnl'} key={"pnl" + (((e.long - e.short) * e.currPrice) - ((e.long - e.short) * e.pricePurchased))}>
                                { formatCurrency.format(((e.long - e.short) * e.currPrice) - ((e.long - e.short) * e.pricePurchased)) }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default PortfolioDetailsComponent;