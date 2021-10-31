import React from "react";
import {selectAllClientNames} from "../clientDropdownSelectors";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrentClientName} from "../clientDropdownSlice";

const ClientDropdownList = () => {
    const clientNames = useSelector(selectAllClientNames);
    const dispatch = useDispatch();

    return (
        <>
            {clientNames.map((name, index) => (
                <li onClick={() => dispatch(updateCurrentClientName(name))} key={index}>
                    {name}
                </li>
            ))}
        </>
    )
}

export default ClientDropdownList;