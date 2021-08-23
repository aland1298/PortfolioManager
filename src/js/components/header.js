import React from 'react';
import "../../sass/header.scss"

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
};

export default Header;