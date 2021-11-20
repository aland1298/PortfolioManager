/**
 * Fetches the stock data
 * @returns {Promise<Response>}
 */
export const fetchStockData = async () => {
    const data = await fetch("./src/data/stock-info.json");
    return await data.json();
}