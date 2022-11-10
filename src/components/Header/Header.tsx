import React from 'react'
import logoSrc from "../../assets/img/logo.png";
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import styles from './Header.module.scss' 

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
      <img className={styles.img} src={logoSrc} alt="OneMoreDealLogo" />
      </div>
      <ul className={styles.row}>
          <li className={styles.item}>
            <Search/>
          </li>
          <li className={styles.item}>
            <Filter/>
          </li>
        </ul>
    </div>
  )
}

export default Header