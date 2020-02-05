import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'
import { Link } from 'react-router-dom'


export default class Movies extends Component {
    state = {
        movies: []

    };

    async componentDidMount() {
        const response = await api.get(`/movies`);
        console.log(response)
        this.setState({ movies: response.data });
    }

    removeMovie(id) {

        const removeCategory = api.delete(`/movies/${id}`, { id })
            .then(res => {
                console.log(removeCategory);
                console.log(removeCategory.data);
            })
        window.location.reload()
    }

    render() {
        const { movies } = this.state;

        return (

            <div className="movies">
                <div className='welcome'>
                    <div className='movies-title'> Movies </div>
                    <div className='movies-welcome'> View, edit and delete <b>Movies</b> </div>
                    <a href='/movie/create'> <div className='create-button'> Create New Movie </div> </a>
                </div>

                <div className='movie-list-inner'>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>EDIT</th>
                            <th>REMOVE</th>
                        </tr>
                        {movies.map(movie => (
                            <tr>
                                <td>{movie.name}</td>
                                <td className='view'>View <div className='movie-description'>{movie.description}</div></td>
                                <Link to={`/movie/edit/${movie.id}`}>
                                    <td> <button className='button-edit' > <div className='edit'>EDIT </div> </button> </td>
                                </Link>
                                <td><button onClick={() => this.removeMovie(movie.id)} className='button-remove'> <div className='remove'>REMOVE</div></button></td>
                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        );
    }
}