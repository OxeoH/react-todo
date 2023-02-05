import { observer } from 'mobx-react-lite'
import React, { FormEvent } from 'react'
import { createTask } from '../../services/http/todosAPI'
import { useStore } from '../../store'
import styles from './CreateTaskPopup.module.scss'

export const CreateTaskPopup: React.FC<any> = observer(({setPopupVisibility, groupId}) => {
  const {todosStore} = useStore()
  const [todoName, setTodoName] = React.useState('')

  const sendForm = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setPopupVisibility(false)
    const newTask = await createTask(todoName, groupId)

    todosStore.addTodo(newTask);
  }


  return (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => setPopupVisibility(false)}>X</div>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)} className={styles.form}>
          <div className={styles.fieldWrap}>
              <label className={styles.label}>Task name: </label>
              <input 
                type="text" 
                onChange={(event) => setTodoName(event.target.value)} 
                className={styles.field}
                placeholder='Get up from the sofa 📺'
              />
          </div>
          <input type="submit" value="Create" className={styles.submit}/>
      </form>
    </div>
  )
})