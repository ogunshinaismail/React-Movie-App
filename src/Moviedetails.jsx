import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Moviedetails() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const API_IMG = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${ id }?api_key=f9c16b382153169e677f6b0b3c3809e0`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.genres.map( gen => gen.name))
            setData(data)
            setIsPending(false)
        })
        .catch( err => {
            if(err.name === 'AbortError') {
                console.log("fetch aborted")
            } else {
                setIsPending(false)
                setError(err.message)
            }
        })
        
    }, [id]);

    return (
        <div>
            {isPending && <div className='loading'>Loading.....</div>}
            {error && <div className='error'>{ error }</div>}
            {data && (
                <div className="movie-details">
                    <img src={API_IMG + data.poster_path} alt="" />
                    <div className="details">
                        <h1 className="title">{data.title}</h1>
                        <p className="tagline">{data.tagline}</p>
                        <p className="date">{data.release_date}</p>
                        <h3>Genres</h3>
                        <p className="genre">{data && data.genres.map( gen => <li>{gen.name}</li>)}</p>
                        <div className="desc-sec">
                            <h3>Overview</h3>
                            <p className="desc">{data.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Moviedetails

// <div>{data.genres.map( gen => <p key={gen.id}>{gen.name}</p>)}</div>