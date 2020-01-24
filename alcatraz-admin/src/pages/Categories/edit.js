import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'


export default class CategoriesEdit extends Component {

    state = {
        categories: []

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/categories/${id}`);
        console.log(response);
        this.setState({ categories: response.data });
    }


    render() {
        const { categories } = this.state;

        return (
            <div class="movie-edit">
                {categories.map(category => (
                    <div className='form-input'>
                        <h1>{category.name}</h1>
                        <div className='movie-form'>
                            <div className='form-inline'>
                                <div className='movie-input'> Category Name:           </div>  <input type='text' name='category-name' placeholder={category.name} />
                                <div className='movie-input'> Category Description:           </div>  <input type='text' name='category-description' placeholder={category.description} />
                                <div className='movie-input'> Category in Menu?           </div>  <input type='text' name='category-description' placeholder={category.menu} />
                            </div>
                            <button> Save </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
} 