import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'


export default class CategoriesCreate extends Component {
    state = {
        name: '',
        description: '',
        mensagem: ''
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }

    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { name, description } = this.state;

        const response = api.post(`categories`, { name, description })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        if (response && response.mensagem) {
            this.setState({ mensagem: response.mensagem })
        }
    };

    render() {

        return (
            <div className='create-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category Name:
                    <input type="text" name="categoryName" onChange={this.handleChangeName} placeholder='Category name here' />
                    </label>

                    <label>
                        Category Description:
                    <input type="text" name="categoryDescription" onChange={this.handleChangeDescription} placeholder='Category description here' />
                    </label>

                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
} 