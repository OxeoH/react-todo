import React from 'react'
import styles from './TaskItem.module.scss'
import logoSrc from '../../../src/assets/img/cross.svg'

const TaskItem: React.FC = () => {
  return (
    <div className={styles.task}>
        <div className={styles.counter}>1</div>
        <div className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum optio ipsum vero perspiciatis minus</div>
        <input type="checkbox" className={styles.checker}/>
        <div className={styles.deleter}>
          <img src={logoSrc} alt="X" />
        </div>
    </div>
  )
}

export default TaskItem