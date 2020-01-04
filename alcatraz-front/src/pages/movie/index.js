import React, { Component } from 'react'
import api from '../../services/api'

export default class Movie extends Component {
    state = {
        movies: []

    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/movies/${id}`);
        console.log(response);
        this.setState({ movies: response.data });
    }

    render() {
        const { movies } = this.state;
        if (!movies) return null;

        return (
            <div>
                {movies.map(movie => (

                <h1> { movie.name }</h1>

                ))}
            </div>
            );
        }
}