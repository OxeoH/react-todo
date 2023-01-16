import React from 'react'
import styles from './TaskItem.module.scss'
import cross from '../../../src/assets/img/cross.svg'
import { Todo } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite';
import groupsController from '../../store/groups/groups.controller';

const TaskItem: React.FC<Todo> = observer(({id, title, completed, group}) => {
  return (
    <div className={styles.task}>
        <div className={styles.counter}>{id}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.toolsWrapper}>
          <input type="checkbox" className={styles.checker} defaultChecked={completed} onChange={() => groupsController.changeTodoStatus(id, group)}/>
          <div className={styles.deleter} onClick={() => groupsController.removeTodo(id, group)}>
            <img src={cross} alt="X"/>
          </div>
        </div>
    </div>
  )
});

export default TaskItem