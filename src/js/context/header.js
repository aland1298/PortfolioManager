import React from "react";
import {createContext, useState} from "react";

export const HeaderContext = createContext();

const HeaderContextProvider = (props) => {
    const [header, setHeader] = useState("Blank");

    return (
        <HeaderContext.Provider value={{header, setHeader}} >
            {props.children}
        </HeaderContext.Provider>
    )
}

export default HeaderContextProvider;