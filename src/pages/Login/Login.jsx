import React from 'react'

import styles from "./Login.module.css"

const Login = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img src="/images/cta-logo-one.svg" alt="" />
            <button>GET ALL THERE</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque asperiores velit dolores, vel exercitationem eum?</p>
            <img src="/images/cta-logo-two.png" alt="" />
        </div>

    </div>
  )
}

export default Login