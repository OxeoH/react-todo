import React from 'react'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder='Search 💻🔍' className={styles.search}/><div className={styles.cross}/>
    </div>
    
  )
}

export default Search