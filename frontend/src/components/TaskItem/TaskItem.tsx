import React from 'react'
import styles from './TaskItem.module.scss'
import cross from '../../../src/assets/img/cross.svg'
import { TodoType } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const TaskItem: React.FC<TodoType> = observer(({id, title, completed, group}) => {
  const {groupStore} = useStore()

  return (
    <div className={styles.task}>
        <div className={styles.counter}>{id}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.toolsWrapper}>
          <input type="checkbox" className={styles.checker} defaultChecked={completed} onChange={() => groupStore.changeTodoStatus(id, group)}/>
          <div className={styles.deleter} onClick={() => groupStore.removeTodo(id, group)}>
            <img src={cross} alt="X"/>
          </div>
        </div>
    </div>
  )
});

export default TaskItem