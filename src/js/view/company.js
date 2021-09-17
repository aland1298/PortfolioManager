import React, {useEffect} from "react";

const Company = (props) => {
    useEffect(() => {
        document.title = "Company Dashboard"
        props.setHeader("Company");
    })

    return (
        <div>sss</div>
    )
}

export default Company;