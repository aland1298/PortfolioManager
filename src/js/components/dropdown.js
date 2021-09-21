import React, {useContext} from "react";
import {ProfileContext} from "../context/profileContext";

const Dropdown = () => {
    const {profile} = useContext(ProfileContext);

    return (
        <>
            {profile.map((p) => <li key={p.id}>{p.name}</li>)}
        </>
    )
}

export default Dropdown;