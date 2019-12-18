import React, { Component } from 'react';
import api from '../../services/api';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles.css'
import Banner from '../../components/Banner'
import MiniBanner from '../../components/MiniBanner'


export default class Main extends Component {
    state = {
        movies: []


    };


    async componentDidMount() {
        const response = await api.get(`/movies`);
        console.log(response)
        this.setState({ movies: response.data });
    }



    render() {
        const { movies } = this.state;

        if (!movies) return null;

        return (
            <div>
                <Banner />
                <MiniBanner />
                    <div className="movie-list">
                        {movies.map(movie => (

                            <article key={movie.id}>
                                <div className="poster-box">
                                    <img src={movie.poster} alt="Minha Figura" />
                                    <div className="movie-info">
                                        <div className="movie-title"> {movie.name} </div>
                                        <div className="movie-genre"> {movie.genre} </div>
                                        <div className="movie-rating"> <FontAwesomeIcon icon={faStar} /> {movie.rating} </div>
                                    </div>
                                </div>
                            </article>

                        ))}
                    </div>
            </div >
        )
    }
}