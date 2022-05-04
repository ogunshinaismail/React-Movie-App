import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Filter from './Filter'

const API_IMG = "https://image.tmdb.org/t/p/w500/"

const Movielist = ({ movies, title }) => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='movie'>
            <div className='filter'>
                <div className="search-btn">
                    <input type="text" placeholder='Search movie...' onChange={e => { setSearchTerm(e.target.value) }} />
                </div>
            </div>

            <h2>{title}</h2>
            <div className="movie-list">
                {movies.filter(val => {
                    if(searchTerm === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map(movie => (
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