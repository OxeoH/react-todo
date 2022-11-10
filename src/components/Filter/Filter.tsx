import React from 'react'
import styles from './Filter.module.scss'

const Filter: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>Filter by: <span className={styles.value}>A - Z / А - Я</span>
        <div className={styles.popup}>
          <ul className={styles.sorts}>
            <li className={styles.sort}>A - Z / А - Я</li>
            <li className={styles.sort}>Z - A / Я - А</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filter