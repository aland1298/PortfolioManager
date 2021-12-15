import React from "react";
import {useSelector} from "react-redux";
import {selectPortfolioSummary} from "./portfolioSummarySelectors";

const PortfolioSummaryComponent = () => {
    const portfolioSummary = useSelector(selectPortfolioSummary);

    return (
        <>
            <h2>Portfolio Summary</h2>
            <p>
                {portfolioSummary}
            </p>
        </>
    )
}

export default PortfolioSummaryComponent;