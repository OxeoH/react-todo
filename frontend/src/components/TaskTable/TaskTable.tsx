import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useParams } from 'react-router-dom'
import { TodoType } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite'
import CreatePopup from '../CreatePopup/CreatePopup'
import { useStore } from '../../store'


const TaskTable: React.FC = observer(() => {
    const [popupVisibility, setPopupVisibility] = React.useState(false)
    const {groupStore} = useStore()

    const params = useParams()
    const {id} = params
    let tasks: TodoType[] = []
    
    
    
    id ? tasks = groupStore.findTodosByGroupIndex(id) : tasks = []

    const showTaskCreator = (groupId: string) => {
      setPopupVisibility(!popupVisibility)

    }
    
  return (
    <>
      {popupVisibility && <CreatePopup/>}
      <div className={styles.table}>
          <div className={styles.tools}>
            <button onClick={() => groupStore.removeAllByGroup(id ? id : '')}>Clear All Tasks</button>
            <button onClick={() => showTaskCreator(id ? id : '')}>Create New Task</button>
          </div>
          {tasks && tasks.map(task => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} />)}
      </div>
    </>
  )
})

export default TaskTable