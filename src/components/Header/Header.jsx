import React from 'react'

import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.nav}>
        <img className={styles.headerImg} src="/images/logo.svg" alt="" />
        <div>
            <a href="/">
                <img src="/images/home-icon.svg" alt="" />
                <span>HOME</span>
            </a>
            <a href="/search">
                <img src="/images/search-icon.svg" alt="" />
                <span>SEARCH</span>
            </a>
            <a href="">
                <img src="/images/watchlist-icon.svg" alt="" />
                <span>WATCHLIST</span>
            </a>
            <a href="">
                <img src="/images/original-icon.svg" alt="" />
                <span>ORIGINALS</span>
            </a>
            <a href="">
                <img src="/images/movie-icon.svg" alt="" />
                <span>MOVIES</span>
            </a>
            <a href="">
                <img src="/images/series-icon.svg" alt="" />
                <span>SERIES</span>
            </a>
        </div>
        <a href="/login">
            <img className={styles.userImg} src=''/>
        </a>
    </header >
  )
}

export default Header