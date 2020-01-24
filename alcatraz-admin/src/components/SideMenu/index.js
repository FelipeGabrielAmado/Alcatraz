import React, { Component } from 'react';
import './styles.css'

export default class SideMenu extends Component {

    render() {

        console.log(window.location.pathname);

        return (
            <div class="sidenav">
                <a href='http://localhost:3001/'> <img src="/images/logo.png" alt="Logo Alcatraz" /> </a>
                <div className='items-menu'>
                        <div className='category-title'>Main</div>

                        <div className={(window.location.pathname === '/') ? "active-item" : ""}>   <a href="/">Dashboard</a>               </div>
                        <div className={(window.location.pathname === '/movies') ? "active-item" : ""}>   <a href="/movies">Movies</a>            </div>
                        <div className={(window.location.pathname === '/categories') ? "active-item" : ""}>   <a href="/categories">Categories</a>    </div>
                </div>
            </div>
        );
    }
}