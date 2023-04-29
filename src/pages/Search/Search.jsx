import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Search.module.css"

import { moviesList } from '../../firebase'

const Search = () => {
    const [search, setSearch] = useState("")
    const [movie, setMovie] = useState(null)

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        console.log(search)
        const movieFound = moviesList.filter(movie=> {
            if (movie.title.includes(search)) return movie
        })
        setMovie(movieFound)
    }

  return (
    <div className={styles.contrainer}>
        <input type="text" placeholder='Type the movie you are looking for' value={search} onChange={handleSearch} />
        {movie?.length > 0 ? (<Link to={`/details/${movie[0]?.id}`} className={styles.movie} style={{backgroundImage : `url(${movie[0]?.img})`}}>
            <h1>{movie[0]?.title}</h1>
        </Link>) : <h1>No movie found</h1>}
    </div>
  )
}

export default Search