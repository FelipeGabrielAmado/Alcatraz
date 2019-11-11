import React, { Component } from 'react';
import api from '../../services/api';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OwlCarousel from 'react-owl-carousel2';

import './styles.css'
import Banner from '../../components/Banner'


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

        const options = {
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        };

        if (!movies) return null;

        return (
            <div>
                <Banner />
                <div className="category-name"><p>New Movies</p></div>
                <OwlCarousel ref="car" options={options}>
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
                </OwlCarousel>
            </div >
        )
    }
}