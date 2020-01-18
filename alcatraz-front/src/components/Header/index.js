import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'
import { Link } from 'react-router-dom'


export default class Header extends Component {

    state = {
        categories: []

    };

    async componentDidMount() {
        const response = await api.get(`/categories`);
        console.log(response)
        this.setState({ categories: response.data });
    }

    render() {
        const { categories } = this.state;
        const itemsMenu = categories.filter(category => category.menu === true);

        return (
            <div className="header">
                <a href="http://localhost:3001/">
                    <header id="main-header">
                        <img src="/images/logo.png" alt="Logo Alcatraz" />
                    </header>
                </a>
                <header id="sub-header">
                    <ul>

                        {itemsMenu.map((category) => (



                            <li key={category.id}>  <Link to={`/categories/${category.id}`} > {category.name}  </Link></li>


                        ))}
                        <li key={'see-more'}> <a href='#'> See more </a> </li>
                    </ul>
                </header>
            </div>
        );
    }
}