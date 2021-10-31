import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateHeader} from "../home/features/featureHeader/headerSlice";

const Company = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Company Dashboard"
        dispatch(updateHeader('Company'));
    },[dispatch])

    return (
        <div>sss</div>
    )
}

export default Company;