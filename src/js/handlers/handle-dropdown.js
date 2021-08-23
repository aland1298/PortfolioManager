/**
 * Changes visibility of list elements in a dropdown to show is not shown, visa-versa. Must name the
 * container class with an id of "dropdown-container" and have the className initially set to dropdown
 * with visibility of visible.
 */
const handleDropdown = () => {
    const element = document.getElementById("dropdown-container");

    if (element.className === "dropdown")
        element.className = "dropdown show";
    else
        element.className = "dropdown";
}

export default handleDropdown;