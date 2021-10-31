import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import "../../../sass/home.scss";
import ClientDropdownComponent from "./features/featureClientDropdown/clientDropdownComponent";
import {updateHeader} from "./features/featureHeader/headerSlice";
import {loadNames} from "./features/featureClientDropdown/clientDropdownThunks";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Home";
        dispatch(updateHeader('Home'));
        dispatch(loadNames());
    }, [dispatch]);

    return (
        <section id="home-container">
            <nav role="navigation">
                <ClientDropdownComponent/>
            </nav>
        </section>
    );
}

export default Home;