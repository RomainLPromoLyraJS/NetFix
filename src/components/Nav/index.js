/* -- React Imports -- */
import React from 'react';
import { useState } from "react";

/* -- Icons imports from Material UI -- */
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Nav = () => {

    const [isNavBlack, setNavBlack] = useState(false);
    const [isToggleMenu, setToggleMenu] = useState(false);

    window.onscroll = () => {
        setNavBlack(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    const handleClick = () => {
        console.log(isToggleMenu)
        isToggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    return (
        <div className={`nav ${isNavBlack || isToggleMenu ? "nav--black" : "nav--transparent"} ${isToggleMenu && "show"}`}>
            <button className="nav__burger" onClick={handleClick}><MenuIcon /></button>
            <img className="nav__logo" src="../images/logo.png" alt="netfix-logo" />
            <nav className="nav__links">
                <a className="nav__link" href="/">Accueil</a>
                <a className="nav__link" href="/">Séries</a>
                <a className="nav__link" href="/">Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action"><SearchIcon /></a>
                <a href="/" className="nav__action">DIRECT</a>
                <a href="/" className="nav__action"><CardGiftcardIcon /></a>
                <a href="/" className="nav__action"><NotificationsIcon /></a>
                <a href="/" className="nav__action">
                    <img src="../images/avatar.jpg" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Nav;