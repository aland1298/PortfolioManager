import React, {useEffect} from "react";

const Client = (props) => {
    useEffect(() => {
        document.title = "Client Dashboard";
        props.setHeader("Client")
    })

    return (
        <h1>Hi</h1>
    )
}

export default Client;