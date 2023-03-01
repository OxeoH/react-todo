import React from 'react'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '../../routes/utils/consts'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.block}>
        <label className={styles.text}>Oops...Page not found!🤕</label>
        <Link to={`${MAIN_ROUTE}`} >
            <button className={styles.link}>BACK</button>
        </Link>
    </div>
  )
}