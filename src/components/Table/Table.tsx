import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import styles from './Table.module.scss'

const Table: React.FC = () => {
  return (
    <div className={styles.table}>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </div>
  )
}

export default Table