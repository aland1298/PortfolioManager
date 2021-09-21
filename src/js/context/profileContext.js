import {createContext, useEffect, useState} from "react";
import React from "react";
import '../../data/profile.json'

export const ProfileContext = createContext();

const ProfileContextProvider = (props) => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const url = "src/data/profile.json";
        fetch(url)
            .then(resp => resp.json())
            .then(data => setProfile(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {props.children}
        </ProfileContext.Provider>
    )

}

export default ProfileContextProvider;