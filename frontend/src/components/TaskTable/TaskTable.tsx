import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { Link, useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {CreateTaskPopup} from '../CreateTaskPopup/CreateTaskPopup'
import { useStore } from '../../store'
import { GROUPS_ROUTE, MAIN_ROUTE } from '../../routes/utils/consts'


const TaskTable: React.FC = observer(() => {
    const [popupVisibility, setPopupVisibility] = React.useState(false)
    const {groupStore, sortStore} = useStore()

    const params = useParams()
    const {id} = params
    
    const currentTodos = id ? groupStore.findTodosByParameters(id) : []

    const showTaskCreator = () => {
      setPopupVisibility(!popupVisibility)
    }
    
  return (
    <div className={styles.container}>
      {popupVisibility && <CreateTaskPopup groupId={id} setPopupVisibility={setPopupVisibility}/>}
      <div className={styles.tools}>
            <Link to={`${GROUPS_ROUTE}`}><button className={styles.back} onClick={() => sortStore.resetSearch()}>Back</button></Link>
            <Link to={`${MAIN_ROUTE}`}><button className={styles.back}>Menu</button></Link>
            <button className={styles.create} onClick={() => showTaskCreator()}>Create Task</button>
          </div>
      <div className={styles.table}>
        {!currentTodos.length ? <div className={styles.empty}>☀️There are no active tasks🍸</div> : <></>}
        {currentTodos.map((task, index) => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} place={index + 1}/>)}
      </div>
      
    </div>
  )
})

export default TaskTable