import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logoSrc from "../../assets/img/logo.png";
import { MAIN_ROUTE } from '../../routes/utils/consts';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import styles from './Header.module.scss' 

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo}>
          <img className={styles.img} src={logoSrc} alt="OneMoreDealLogo" />
        </div>
      </Link>
      <ul className={styles.row}>
        {location.pathname !== `${MAIN_ROUTE}` && 
          <>
            <li className={styles.item}>
              <Search/>
            </li>
            <li className={styles.item}>
              <Filter/>
            </li>
          </>
        }
      </ul>
    </div>
    )}

export default Header