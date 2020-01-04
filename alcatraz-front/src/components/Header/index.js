import React from 'react';
import './styles.css'


const Header = () => (
    <div className="header">
        <a href="http://localhost:3001/">
            <header id="main-header">
                <img src="/images/logo.png" alt="Logo Alcatraz"/>
            </header>
        </a>
        <header id="sub-header">
        <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Adventure</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Crime</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Romance</a></li>
            <li><a href="#">Sci-fi</a></li>
            <li><a href="#">Thriller</a></li>
        </ul>
        </header>
    </div>
);

export default Header;