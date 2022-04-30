import React from 'react'
import { Link } from 'react-router-dom'

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const Movielist = ({ movies, title }) => {
    return (
        <div className='movie'>
            <h2>{title}</h2>
            <div className="movie-list">
                {movies.map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <div className="portrait">
                            <img src={API_IMG + movie.poster_path} alt="" />
                        </div>
                        <Link to={`/movie/${movie.id}`}>
                            <button>View details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movielist