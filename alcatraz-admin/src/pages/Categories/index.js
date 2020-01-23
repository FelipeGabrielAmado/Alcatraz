import React, { Component } from 'react';
import './styles.css'

export default class Categories extends Component {

    render() {
        return (

            <div class="categories">
                <div className='welcome'>
                    <div className='categories-title'> Categories </div>
                    <div className='categories-welcome'> View, edit and delete <b>Categories</b> </div>
                </div>
            </div>
        );
    }
}