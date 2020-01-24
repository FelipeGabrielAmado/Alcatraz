import React, { Component } from 'react';
import './styles.css'

import api from '../../services/api'


export default class MovieEdit extends Component {

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

        return (
            <div class="movie-edit">
                {movies.map(movie => (
                    <div className='movie-form'>
                        <div className='movie-input'> Movie Name:           </div>  <input type='text' name='movie-name' placeholder={movie.name} />
                        <div className='movie-input'> Movie Description:    </div>  <input type='text' name='movie-description' placeholder={movie.description} />
                        <div className='movie-input'> Movie Genre:          </div>  <input type='text' name='movie-genre' placeholder={movie.genre} />
                        <div className='movie-input'> Movie Rating:         </div>  <input type='text' name='movie-rating' placeholder={movie.rating} />
                        <div className='movie-input'> Movie Trailer:        </div>  <input type='text' name='movie-trailer' placeholder={movie.trailer} />
                        <div className='movie-input'> Movie Director:       </div>  <input type='text' name='movie-director' placeholder={movie.director} />
                        <div className='movie-input'> Movie Stars:          </div>  <input type='text' name='movie-stars' placeholder={movie.stars} />
                        <div className='movie-input'> Movie Poster:         </div>  <input type='text' name='movie-poster' placeholder={movie.poster} />
                        <div className='movie-input'> Movie Background:     </div>  <input type='text' name='movie-background' placeholder={movie.background} />
                        <div className='movie-input'> Movie Category:       </div>  <input type='text' name='movie-category' placeholder={movie.category} />
                        <div className='movie-input'> Movie Netflix:        </div>  <input type='text' name='movie-netflix' placeholder={movie.netflix} />
                        <div className='movie-input'> Movie Disney:         </div>  <input type='text' name='movie-disney' placeholder={movie.disney} />
                        <div className='movie-input'> Movie Prime:          </div>  <input type='text' name='movie-prime' placeholder={movie.prime} />
                        <div className='movie-input'> Movie HBO:            </div>  <input type='text' name='movie-hbo' placeholder={movie.hbo} />
                        <div className='movie-input'> Movie Youtube:        </div>  <input type='text' name='movie-youtube' placeholder={movie.youtube} />
                    </div>

                ))}
            </div>
        );
    }
}