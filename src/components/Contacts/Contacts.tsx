import React from 'react'
import gitHubLogo from "../../assets/social/icons8-github.svg";
import linkedInLogo from "../../assets/social/icons8-linkedin.svg";
import telegramLogo from "../../assets/social/icons8-telegram.svg";



const Contacts: React.FC = () => {
  return (
    <div className='contacts'>
      <div className="contacts__wrapper">
        <ul className="contacts__list">
          <li className="contacts__list-link">
            <a className='link-github' href="https://github.com/OxeoH">
              <div className="link-img"><img src={gitHubLogo} alt="GitHub" /></div>
            </a>
          </li>
          <li className="contacts__list-link">
            <a className='link-linkedinn'href="https://www.linkedin.com/in/oxeoh/">
              <div className="link-img"><img src={linkedInLogo} alt="LinkedIn" /></div>
            </a>
          </li>
          <li className="contacts__list-link">
            <a className='link-telegram' href="https://t.me/oxeoh">
              <div className="link-img"><img src={telegramLogo} alt="Telegram" /></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts