import React from 'react';

const Nav = () => {
    return (
        <div className="nav show nav--black">
            <button className="nav__burger">---</button>
            <img className="nav__logo" src="../images/logo.png" alt="netfix-logo" />
            <nav className="nav__links">
                <a className="nav__link" href="/">Accueil</a>
                <a className="nav__link" href="/">Séries</a>
                <a className="nav__link" href="/">Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav_action">search</a>
                <a href="/" className="nav_action">Direct</a>
                <a href="/" className="nav_action">Gift</a>
                <a href="/" className="nav_action">Notif</a>
                <a href="/" className="nav_action">
                    <img src="../images/avatar.jpg" alt="" />
                </a>
            </div>
        </div>
    );
};

export default Nav;