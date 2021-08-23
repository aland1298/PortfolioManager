import React, {useEffect} from "react";

const Client = () => {
    useEffect(() => {
        document.title = "Client Dashboard"
    })

    return (
        <h5>client view</h5>
    )
}

export default Client;