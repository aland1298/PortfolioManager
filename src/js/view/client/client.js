import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateHeader} from "../home/features/featureHeader/headerSlice";
import '../../../sass/client.scss';
import ClientDetailsComponent from "./features/featureClientDetails/clientDetailsComponent";
import PortfolioSummaryComponent from "./features/featurePortfolioSummary/portfolioSummaryComponent";
import StockSummaryComponent from "./features/featureStockSummary/stockSummaryComponent";
import PortfolioDetailsComponent from "./features/featurePortfolioDetails/portfolioDetailsComponent";
import {selectCurrentClientName} from "../home/features/featureClientDropdown/clientDropdownSelectors";
import {getAllStockSummary} from "./features/featureStockSummary/stockSummaryThunk";
import {getAllStockDetails} from "./features/featurePortfolioDetails/portfolioDetailsThunk";
import {getPortfolioSummary} from "./features/featurePortfolioSummary/portfolioSummaryThunk";
import {getClientDetails} from "./features/featureClientDetails/clientDetailsThunk";

const Client = () => {
    const dispatch = useDispatch();
    const currName = useSelector(selectCurrentClientName);

    useEffect(() => {
        document.title = "Client Dashboard";
        dispatch(updateHeader('Client'));
        dispatch(getAllStockSummary(currName));
        dispatch(getAllStockDetails(currName));
        dispatch(getPortfolioSummary(currName))
        dispatch(getClientDetails(currName))
    }, [dispatch])

    return (
        <div id='client-container'>
            <div id='section1-container'>
                <section id='clientDetails-container'>
                    <ClientDetailsComponent />
                </section>
                <section id='portfolioSummary-container'>
                    <PortfolioSummaryComponent />
                </section>
            </div>
            <div id='section2-container'>
                <section id='stockSummary-container'>
                    <StockSummaryComponent />
                </section>
                <section id='portfolioDetails-container'>
                    <PortfolioDetailsComponent />
                </section>
            </div>
        </div>
    )
}

export default Client;