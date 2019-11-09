import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css'
import Banner from '../../components/Banner'

export default class Main extends Component {
    state = {
        movies : []


    };

    async componentDidMount() {
        const response = await api.get(`/movies`);
        console.log(response)
        this.setState({ movies: response.data});
    }



    render() {
        const { movies } = this.state;
        
        if(!movies) return null;

        console.log(typeof(movies))

        return(
            <div>
                <Banner/>
                <div className="category-name"><p>New Movies</p></div>
                    <div className="movie-list">
                        {movies.map(movie => (
                            <article key={movie.id}>
                                <div className="poster-box">
                                    <img src={movie.poster} alt="Minha Figura"/>
                                    <div className="movie-title">{movie.name}</div>
                                </div>
                            </article>
                        ))}
                        
                    </div>
            </div>
        )
    }
}