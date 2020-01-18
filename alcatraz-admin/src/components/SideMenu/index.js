import React, { Component } from 'react';
import './styles.css'

export default class SideMenu extends Component {

    render() {
        return (
            <div class="sidenav">
                <img src="/images/logo.png" alt="Logo Alcatraz" />
                <div className='items-menu'>
                        <div className='category-title'>Main</div>
                        <a href="#dashobard">Dashboard</a>
                        <a href="#about">Movies</a>
                        <a href="#services">Categories</a>
                </div>
            </div>
        );
    }
}