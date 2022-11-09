import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const Table: React.FC = () => {
  return (
    <div className='table'>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
      <TaskItem/>
    </div>
  )
}

export default Table