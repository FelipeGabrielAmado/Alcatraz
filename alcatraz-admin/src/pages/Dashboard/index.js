import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    state = {
        movies: [],
        moviecount: [],
        categorycount: []

    };

    async componentDidMount() {
        const response = await api.get(`/moviesadmin`);
        console.log(response)
        this.setState({ movies: response.data });

        const moviescount = await api.get(`/movies`);
        this.setState({moviecount: moviescount.data.length})

        const categoriescount = await api.get(`/categories`);
        this.setState({categorycount: categoriescount.data.length})
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

        const { movies, moviecount, categorycount } = this.state;

        return (

            <div className="dashboard">
                <div className='welcome'>
                    <div className='dashboard-title'> Dashboard </div>
                    <div className='dashboard-welcome'> Welcome to Alcatraz <b>Dashboard</b> </div>
                </div>

                <div className='dashboard-infos'>
                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            {moviecount} Movies
                        </div>

                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            {categorycount} Categories
                        </div>

                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            1.024 Users
                        </div>
                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            15.053 Access
                        </div>
                    </div>
                </div>

                <div className='movie-list'>
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

                    <a href='/movies'> <div className='see-all-button'> List all Movies</div> </a>
                </div>

            </div>
        );
    }
}