import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GROUPS_ROUTE, MAIN_ROUTE } from "../../routes/utils/consts";
import styles from "./NotFoundBlock.module.scss";
import { useStore } from "../../store";

export const NotFoundBlock: React.FC = () => {
  const navigate = useNavigate();
  const { userStore } = useStore();

  return (
    <div className={styles.block}>
      <label className={styles.text}>Oops...Page not found!🤕</label>
      <Link to={`${userStore.isAuth ? GROUPS_ROUTE : MAIN_ROUTE}`}>
        <button className={styles.link}>BACK</button>
      </Link>
    </div>
  );
};
