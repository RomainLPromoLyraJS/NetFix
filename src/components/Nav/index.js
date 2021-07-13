import React from 'react';
import { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Nav = () => {

    const [isNavBlack, setNavBlack] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavBlack(true);
            } else {
                setNavBlack(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${isNavBlack && "nav--black" }`}>
            <button className="nav__burger"><MenuIcon /></button>
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