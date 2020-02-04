import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'


export default class CategoriesEdit extends Component {

    state = {
        categories: [],
        name: '',
        description: ''

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/categories/${id}`);
        console.log(response);
        this.setState({ categories: response.data });
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { id } = this.props.match.params;
        const { name, description } = this.state;

        const response = api.put(`/categories/${id}`, { name, description })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert(res.data)
        })    
        
    };


    render() {
        const { categories } = this.state;

        return (
            <div class="movie-edit">
                {categories.map(category => (
                    <div className='create-form'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Category Name:
                        <input type="text" name="categoryName" onChange={this.handleChangeName} placeholder={category.name} />
                        </label>
    
                        <label>
                            Category Description:
                        <input type="text" name="categoryDescription" onChange={this.handleChangeDescription} placeholder={category.description} />
                        </label>
    
                        <button type="submit">Submit</button>
                    </form>
                </div>
                ))}
            </div>
        );
    }
} 