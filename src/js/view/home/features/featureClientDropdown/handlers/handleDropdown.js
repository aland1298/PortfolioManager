/**
 * Changes visibility of list elements in a dropdown to show is not shown, visa-versa. Must name the
 * container class with an id of "dropdown-container" and have the className initially set to dropdown
 * with visibility of visible.
 */
const handleDropdown = () => {
    const dropDownList = document.getElementById("dropdown-container");
    const arrowImg = document.getElementById("arrow-img");

    if (dropDownList.className === "dropdown") {
        dropDownList.className = "dropdown show";
        arrowImg.setAttribute("src", "/src/img/arrow-up.svg");
        arrowImg.setAttribute("alt", "up arrow");
    }
    else {
        dropDownList.className = "dropdown";
        arrowImg.setAttribute("src", "/src/img/arrow-down.svg");
        arrowImg.setAttribute("alt", "dropdown arrow");
    }
}

export default handleDropdown;