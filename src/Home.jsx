import React from 'react'
import Movielist from './Movielist'
import UseFetch from './UseFetch'

function Home() {
    const { data: movies, isPending, error } = UseFetch("https://api.themoviedb.org/3/movie/popular?api_key=f9c16b382153169e677f6b0b3c3809e0")
    return (
        <>
            {isPending && <div className='loading'>Loading.....</div>}
            {error && <div className='error'>{ error }</div>}
            {movies && <Movielist movies={movies} title='Popular Movies' />}
        </>
    )
}

export default Home 