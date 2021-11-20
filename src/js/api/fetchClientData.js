/**
 * Fetches the client data
 * @returns {Promise<any>}
 */
export const fetchClientData = async () => {
    const data = await fetch("./src/data/profile.json");
    return await data.json();
}