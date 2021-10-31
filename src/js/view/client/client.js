import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateHeader} from "../home/features/featureHeader/headerSlice";

const Client = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Client Dashboard";
        dispatch(updateHeader('Client'));
    }, [dispatch])

    return (
        <h1>Hi</h1>
    )
}

export default Client;