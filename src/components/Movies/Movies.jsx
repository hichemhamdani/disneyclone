import React from 'react'

import styles from "./Movies.module.css"

import { selectMovies } from '../../Redux/movieSlice'

import { Link } from 'react-router-dom'

const Movies = ({moviesList}) => {
  return (
    <div className={styles.container}>
        <h1>Recommended for YOU </h1>
        <div className={styles.content}>
            {moviesList && moviesList.map(movie=>{
                return(
                    <Link to={`/details/${movie.id}`} key={movie.id} className={styles.wrap}>
                        <img src={movie.img} alt="" />
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Movies