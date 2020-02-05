import React, { Component } from 'react';
import './styles.css'

export default class SideMenu extends Component {

    render() {
        return (
            <div className="sidenav">
                <a href='http://localhost:3001/'> <img src="/images/logo.png" alt="Logo Alcatraz" /> </a>
                <div className='items-menu'>
                        <div className='category-title'>Main</div>

                        <div className={(window.location.pathname === '/') ? "active-item" : ""}>   <a href="/">Dashboard</a>               </div>
                        <div className={(window.location.pathname === '/movies') ? "active-item" : ""}>   <a href="/movies">Movies</a>            </div>
                        <div className={(window.location.pathname === '/categories' || window.location.pathname === '/categories/create') ? "active-item" : ""}>   <a href="/categories">Categories</a>    </div>
                </div>
            </div>
        );
    }
}