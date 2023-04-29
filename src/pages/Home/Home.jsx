import React , {useEffect} from 'react'
import styles from "./Home.module.css"

import HomeSlider from '../../components/Slider/Slider'
import Viewers from '../../components/Viewers/Viewers'
import Movies from '../../components/Movies/Movies'

import { useDispatch } from 'react-redux'
import { setMovies } from '../../Redux/movieSlice'

import { moviesList } from '../../firebase'
const Home = ({moviesList}) => {
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(setMovies(moviesList))
  // })
  return (
    <main className={styles.main}>
        <HomeSlider />
        <Viewers />
        <Movies moviesList={moviesList} />
    </main>
  )
}

export default Home