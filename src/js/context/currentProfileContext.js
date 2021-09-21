import React, {useContext, useState} from "react";

export const CurrentProfileContext = useContext();

const CurrentProfileContextProvider = (props) => {
    const {currentProfile, setCurrentProfile} = useState([]);

    return (
        <CurrentProfileContext.Provider value={{currentProfile, setCurrentProfile}}>
            {props.children}
        </CurrentProfileContext.Provider>
    )
}

export default CurrentProfileContextProvider;