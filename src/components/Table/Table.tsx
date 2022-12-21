import { observer } from 'mobx-react-lite'
import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import styles from './Table.module.scss'
import todosController from '../../store/todos/todos.controller'

const Table: React.FC = observer(() => {
  return (
    <div className={styles.table}>
      <button onClick={() => todosController.fetchTodos()}>FetchTodos</button>
      <button onClick={() => todosController.removeAll()}>removeAll</button>
      {todosController.todo.map(item => (<TaskItem key={item.id} id={item.id} title={item.title} completed={item.completed}/>))}
    </div>
  )
});

export default Table