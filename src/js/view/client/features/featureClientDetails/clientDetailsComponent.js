import React from "react";
import {useSelector} from "react-redux";
import {selectClientDetails} from "./clientDetailsSelectors";

const ClientDetailsComponent = () => {
    const clientDetails = useSelector(selectClientDetails);

    return (
        <>
            <h2>Client Details</h2>
            <img src={"http://placekitten.com/150/150"} alt={"Profile photo"} />
            <p>
                {clientDetails}
            </p>
        </>
    )
}

export default ClientDetailsComponent;