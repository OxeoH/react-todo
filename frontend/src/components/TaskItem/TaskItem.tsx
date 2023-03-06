import React from 'react'
import styles from './TaskItem.module.scss'
import cross from '../../../src/assets/img/cross.svg'
import { TodoType } from '../../store/todos/todos.types'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { changeTaskStatus, deleteTask } from '../../services/http/todosAPI';

const TaskItem: React.FC<TodoType> = observer(({id, title, completed, group, place}) => { 
  const {groupStore} = useStore()

  const deleteTodo = async () =>{
    try{
      console.log("id: ", group.id)
      const deletedId = await deleteTask(id, group.id)
      
      if(deletedId.length){
        groupStore.removeTodo(deletedId, group.id)
      }else{
        alert("Error: This group was not found")
      }

    }catch(e){
      console.log(e);
    }
  }

  const changeStatus = async () => {
    const response = await changeTaskStatus(id, group.id)

    if(response) {
      groupStore.changeTodoStatus(id, group.id)
    }else{
      alert("Error: Can't change status now")
    }
    
  }

  return (
    <div className={styles.task}>
        <div className={styles.counter}>
          <span className={styles.number}>{`${place}`}</span>
        </div>
        <label className={styles.title}>{title}</label>
        <div className={styles.toolsWrapper}>
          <input type="checkbox" className={styles.checker} defaultChecked={completed} onChange={() => changeStatus()}/>
          <div className={styles.deleter} onClick={() => deleteTodo()}>
            <img src={cross} alt="X"/>
          </div>
        </div>
    </div>
  )
});

export default TaskItem