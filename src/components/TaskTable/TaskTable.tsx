import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useParams } from 'react-router-dom'
import groupsController from '../../store/groups/groups.controller'
import { Todo } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite'


const TaskTable: React.FC = observer(() => {
    const [popupVisibility, setPopupVisibility] = React.useState(false)

    const params = useParams()
    const {id} = params
    let tasks: Todo[] = []
    
    
    
    id ? tasks = groupsController.findTodosByGroupIndex(id) : tasks = []

    const showTaskCreator = (groupId: string) => {
      setPopupVisibility(!popupVisibility)

    }
    
  return (
    <div className={styles.table}>
        <div className={styles.tools}>
          <button onClick={() => groupsController.removeAllByGroup(id ? id : '')}>Clear All Tasks</button>
          <button onClick={() => showTaskCreator(id ? id : '')}>Create New Task</button>
        </div>
        {tasks && tasks.map(task => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} />)}
    </div>
  )
})

export default TaskTable