import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'

import { Link } from 'react-router-dom'


export default class Categories extends Component {

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

        return (

            <div className="categories">
                <div className='welcome'>
                    <div className='categories-title'> Categories </div>
                    <div className='categories-welcome'> View, edit and delete <b>Categories</b> </div>
                </div>


                <div className='category-list-inner'>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>EDIT</th>
                            <th>REMOVE</th>
                        </tr>
                        {categories.map(category => (
                            <tr>
                                <td>{category.name}</td>
                                <td className='view'>View <div className='category-description'>{category.description}</div></td>
                                <Link to={`/categories/edit/${category.id}`}>
                                    <td className='edit'>EDIT</td>
                                </Link>
                                <td className='remove'>REMOVE</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        );
    }
}