import React from "react";
import ClientDropdownList from "./components/clientDropdownList";
import ClientDropdownHeader from "./components/clientDropdownHeader";

const ClientDropdownComponent = () => {

    return (
        <>
            <ClientDropdownHeader />
            <ul id="dropdown-container" className="dropdown" aria-label="submenu">
                <ClientDropdownList />
            </ul>
        </>
    )
}

export default ClientDropdownComponent;