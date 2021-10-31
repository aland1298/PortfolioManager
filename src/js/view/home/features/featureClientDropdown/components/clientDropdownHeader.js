import handleDropdown from "../handlers/handleDropdown";
import React from "react";
import {useSelector} from "react-redux";
import {selectCurrentClientName} from "../clientDropdownSelectors";

const ClientDropdownHeader = () => {
    const currClientName = useSelector(selectCurrentClientName);

    return (
        <header onClick={() => {handleDropdown()}}>
            <span className="navigation" aria-haspopup="true">
                {currClientName}
            </span>
            <img id="arrow-img" src="/src/img/arrow-down.svg" alt="dropdown arrow"/>
        </header>
    )
}

export default ClientDropdownHeader;