import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useParams } from 'react-router-dom'
import groupsController from '../../store/groups/groups.controller'
import { Todo } from '../../store/todos/todos.types'


const TaskTable: React.FC = () => {
    const params = useParams()
    const {id} = params
    let tasks: Todo[] = []

    id ? tasks = groupsController.getTodosByGroupIndex(id) : tasks = []
    
  return (
    <div className={styles.table}>
        {tasks && tasks.map(task => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} />)}
    </div>
  )
}

export default TaskTable