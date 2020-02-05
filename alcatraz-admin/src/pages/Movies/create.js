import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'


export default class MoviesCreate extends Component {
    state = {
        name: '', description: '', genre: '', rating: '', trailer: '', director: '', stars: '', poster: '',
        background: '', category: '', netflix: '', disney: '', prime: '', hbo: '', youtube: ''
    }

    handleName = event => {
        this.setState({ name: event.target.value });
    }

    handleDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleGenre = event => {
        this.setState({ genre: event.target.value });
    }

    handleRating = event => {
        this.setState({ rating: event.target.value });
    }

    handleTrailer = event => {
        this.setState({ trailer: event.target.value });
    }

    handleDirector = event => {
        this.setState({ director: event.target.value });
    }

    handleStars = event => {
        this.setState({ stars: event.target.value });
    }

    handlePoster = event => {
        this.setState({ poster: event.target.value });
    }

    handleBackground = event => {
        this.setState({ background: event.target.value });
    }

    handleCategory = event => {
        this.setState({ category: event.target.value });
    }

    handleNetflix = event => {
        this.setState({ netflix: event.target.value });
    }
    
    handleDisney = event => {
        this.setState({ disney: event.target.value });
    }

    handlePrime = event => {
        this.setState({ category: event.target.value });
    }
    
    handleHBO = event => {
        this.setState({ hbo: event.target.value });
    }

    
    handleYoutube = event => {
        this.setState({ youtube: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { name, description, genre, rating, trailer, director, stars, poster, background, category, netflix, disney, prime, hbo, youtube } = this.state;

        const response = api.post(`movies`, { name, description, genre, rating, trailer, director, stars, poster, background, category, netflix, disney, prime, hbo, youtube })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert(res.data.message)
            })

    };

    render() {

        return (
            <div className='create-form'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Movie Name:
                    <input type="text" name="name" onChange={this.handleName} placeholder='Movie Name' />
                    </label>

                    <label>
                        Movie Description:
                    <input type="text" name="description" onChange={this.handleDescription} placeholder='Movie Description' />
                    </label>

                    <label>
                        Movie Genre:
                    <input type="text" name="genre" onChange={this.handleGenre} placeholder='Movie Genre' />
                    </label>

                    <label>
                        Movie Rating:
                    <input type="text" name="rating" onChange={this.handleRating} placeholder='Movie Rating' />
                    </label>

                    <label>
                        Movie Trailer:
                    <input type="text" name="trailer" onChange={this.handleTrailer} placeholder='Movie Trailer' />
                    </label>

                    <label>
                        Movie Director:
                    <input type="text" name="director" onChange={this.handleDirector} placeholder='Movie Trailer' />
                    </label>

                    <label>
                        Movie Stars:
                    <input type="text" name="stars" onChange={this.handleStars} placeholder='Movie Stars' />
                    </label>

                    <label>
                        Movie Poster:
                    <input type="text" name="poster" onChange={this.handlePoster} placeholder='Movie Poster' />
                    </label>

                    <label>
                        Movie Background:
                    <input type="text" name="background" onChange={this.handleBackground} placeholder='Movie Background' />
                    </label>

                    <label>
                        Movie Category:
                    <input type="text" name="category" onChange={this.handleCategory} placeholder='Movie Category' />
                    </label>

                    <label>
                        Movie Netflix:
                    <input type="text" name="netflix" onChange={this.handleNetflix} placeholder='Netflix' />
                    </label>

                    <label>
                        Movie Disney:
                    <input type="text" name="disney" onChange={this.handleDisney} placeholder='Disney' />
                    </label>

                    <label>
                        Movie Prime:
                    <input type="text" name="prime" onChange={this.handlePrime} placeholder='Prime' />
                    </label>

                    <label>
                        Movie HBO:
                    <input type="text" name="hbo" onChange={this.handleHBO} placeholder='HBO' />
                    </label>

                    <label>
                        Movie Youtube:
                    <input type="text" name="youtube" onChange={this.handleYoutube} placeholder='Youtube' />
                    </label>

                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
} 