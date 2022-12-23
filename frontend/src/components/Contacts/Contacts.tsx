import React from 'react'
import gitHubLogo from "../../assets/social/icons8-github.svg";
import linkedInLogo from "../../assets/social/icons8-linkedin.svg";
import telegramLogo from "../../assets/social/icons8-telegram.svg";
import styles from "./Contacts.module.scss";



const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <a className='link-github' href="https://github.com/OxeoH">
              <img src={gitHubLogo} alt="GitHub" />
            </a>
          </li>
          <li className={styles.link}>
            <a className='link-linkedinn'href="https://www.linkedin.com/in/oxeoh/">
              <img src={linkedInLogo} alt="LinkedIn" />
            </a>
          </li>
          <li className={styles.link}>
            <a className='link-telegram' href="https://t.me/oxeoh">
              <img src={telegramLogo} alt="Telegram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts