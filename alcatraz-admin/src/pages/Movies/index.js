import React, { Component } from 'react';
import './styles.css'

export default class Movies extends Component {

    render() {
        return (

            <div class="movies">
                <div className='welcome'>
                    <div className='movies-title'> Movies </div>
                    <div className='movies-welcome'> View, edit and delete <b>Movies</b> </div>
                </div>
            </div>
        );
    }
}