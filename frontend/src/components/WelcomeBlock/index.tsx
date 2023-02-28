import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../../store'
import styles from "./WelcomeBlock.module.scss"

export const WelcomeBlock: React.FC = () => {

    const {userStore, groupStore, todosStore} = useStore()

    const endSession = () =>{
        userStore.setIsAuth(false)
        userStore.user = {id: '', login: ''}
        groupStore.removeAll()
        todosStore.removeAll()
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.text}>Welcome, {`${userStore.user.login}`}</div>
            <ul className={styles.links}>
                <Link to='/groups' className={styles.link}>
                    <li className={styles.work}>
                        To work
                    </li>
                </Link>
                <button className={styles.link} onClick={() => endSession()}>
                    <li className={styles.exit}>
                        End session
                    </li>
                </button>
            </ul>
        </div>
    </div>
  )
}