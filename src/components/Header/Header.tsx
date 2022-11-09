import React from 'react'
import logoSrc from "../../assets/img/logo.svg";
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import styles from './Header.module.scss' 

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className="header__logo">
      <img className={styles.img} src={logoSrc} alt="OneMoreDealLogo" />
      </div>
      <ul className="header__row">
          <li className="header__row-items">
            <Search/>
          </li>
          <li className="header__row-items">
            <Filter/>
          </li>
        </ul>
    </div>
  )
}

export default Header