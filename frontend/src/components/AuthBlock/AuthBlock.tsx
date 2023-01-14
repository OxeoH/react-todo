import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AuthBlock.module.scss'

const AuthBlock: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>You need to authorize before we continue</div>
        <ul className={styles.links}>
            <Link to='/login' className={styles.link}>
                <li className={styles.login}>
                    Sign-in
                </li>
            </Link>
            <Link to='/registration' className={styles.link}>
                <li className={styles.register}>
                    Sign-up
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default AuthBlock