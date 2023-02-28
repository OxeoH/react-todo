import React from 'react'
import styles from "./TaskTable.module.scss"
import TaskItem from '../TaskItem/TaskItem'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import {CreateTaskPopup} from '../CreateTaskPopup/CreateTaskPopup'
import { useStore } from '../../store'


const TaskTable: React.FC = observer(() => {
    const [popupVisibility, setPopupVisibility] = React.useState(false)
    const {groupStore} = useStore()

    const params = useParams()
    const {id} = params
    
    
    const currentTodos = groupStore.findTodosByGroupIndex(id || '')
    if(currentTodos.length){
      currentTodos.map(task => console.log("Group from task: ", task.group))
    }
    
    

    const showTaskCreator = () => {
      setPopupVisibility(!popupVisibility)
    }
    
  return (
    <div className={styles.container}>
      {popupVisibility && <CreateTaskPopup groupId={id} setPopupVisibility={setPopupVisibility}/>}
      <div className={styles.tools}>
            <button className={styles.create} onClick={() => showTaskCreator()}>Create Task</button>
          </div>
      <div className={styles.table}>
        {currentTodos.length && currentTodos.map((task, index) => <TaskItem key={task.id} id={task.id} title={task.title} completed={task.completed} group={task.group} />)}
      </div>
      
    </div>
  )
})

export default TaskTable