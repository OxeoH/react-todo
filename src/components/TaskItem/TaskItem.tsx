import React from 'react'
import styles from './TaskItem.module.scss'
import cross from '../../../src/assets/img/cross.svg'
import { Todo } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite';
import todosController from '../../store/todos/todos.controller';

const TaskItem: React.FC<Todo> = observer(({id, title, completed}) => {
  return (
    <div className={styles.task}>
        <div className={styles.counter}>{id}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.toolsWrapper}>
          <input type="checkbox" className={styles.checker} defaultChecked={completed} onChange={() => todosController.changeTodoStatus(id)}/>
          <div className={styles.deleter} onClick={() => todosController.removeTodo(id)}>
            <img src={cross} alt="X"/>
          </div>
        </div>
    </div>
  )
});

export default TaskItem