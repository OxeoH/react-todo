import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useParams } from 'react-router-dom'
import { TodoType } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite'
import {CreateTaskPopup} from '../CreateTaskPopup/CreateTaskPopup'
import { useStore } from '../../store'


const TaskTable: React.FC = observer(() => {
    const [popupVisibility, setPopupVisibility] = React.useState(false)
    const {todosStore} = useStore()

    const params = useParams()
    const {id} = params
    
    
    
    
    // id ? tasks = groupStore.findTodosByGroupIndex(id) : tasks = []

    const showTaskCreator = () => {
      setPopupVisibility(!popupVisibility)

    }
    
  return (
    <div className={styles.container}>
      {popupVisibility && <CreateTaskPopup groupId={id} setPopupVisibility={setPopupVisibility}/>}
      <div className={styles.tools}>
            {/* <button onClick={() => groupStore.removeAllByGroup(id ? id : '')}>Clear All Tasks</button> */}
            <button className={styles.create} onClick={() => showTaskCreator()}>Create Task</button>
          </div>
      <div className={styles.table}>
          {todosStore.todos.length && todosStore.todos.map(task => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} />)}
      </div>
    </div>
  )
})

export default TaskTable