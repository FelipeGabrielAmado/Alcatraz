import React, { Component } from 'react';
import './styles.css'

export default class SideMenu extends Component {

    render() {
        return (
            <div class="sidenav">
                <a href='http://localhost:3001/'> <img src="/images/logo.png" alt="Logo Alcatraz" /> </a>
                <div className='items-menu'>
                        <div className='category-title'>Main</div>
                        <a href="/">Dashboard</a>
                        <a href="/movies">Movies</a>
                        <a href="/categories">Categories</a>
                </div>
            </div>
        );
    }
}