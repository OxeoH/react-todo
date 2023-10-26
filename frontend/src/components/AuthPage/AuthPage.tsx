import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.scss";

const AuthBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.text}>
          You need to authorize before we continue
        </div>
        <ul className={styles.links}>
          <Link to="/login" className={styles.link}>
            <li className={styles.login}>Sign-in</li>
          </Link>
          <Link to="/registration" className={styles.link}>
            <li className={styles.register}>Sign-up</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AuthBlock;
