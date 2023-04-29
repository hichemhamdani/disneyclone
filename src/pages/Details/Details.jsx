import React from 'react'

import styles from "./Details.module.css"

import { useParams } from 'react-router-dom'
import { moviesList } from '../../firebase'

const Details = () => {
    const {id} = useParams()
    const movieDetails = moviesList.find(movie => {
        if (movie.id == id) return movie
         
    })
    if(!movieDetails){
        return <h1>No movie found !</h1>
    }
  return (
    <div className={styles.container}>
        <div className={styles.background}>
            <img src={movieDetails.img} alt="" />
        </div>
        <div className={styles.controls}>
            <button className={styles.btn}>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
            </button>
            <button>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </button>
            <button>
                <img src="/images/group-icon.png" alt="" />
            </button>
        </div>
        <div>
            <h1>{movieDetails.description}</h1>
        </div>
        <div>
            <h1 className={styles.description}>Description : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, quo!</h1>
        </div>
    </div>
  )
}

export default Details