import { observer } from 'mobx-react-lite'
import React, { FormEvent } from 'react'
import { createGroup } from '../../services/http/groupsAPI'
import { useStore } from '../../store'
import styles from './CreateGroupPopup.module.scss'

export const CreateGroupPopup: React.FC<any> = observer(({setPopupVisibility}) => {
  const {groupStore} = useStore()
  const [name, setName] = React.useState('')

  const sendForm = async (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setPopupVisibility(false)
    const newGroup = await createGroup(name)

    groupStore.addGroup(newGroup);
  }


  return (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => setPopupVisibility(false)}>X</div>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)} className={styles.form}>
          <div className={styles.fieldWrap}>
              <label className={styles.label}>Group name: </label>
              <input 
                type="text" 
                onChange={(event) => setName(event.target.value)} 
                className={styles.field}
                placeholder='Learn React⚛️'
              />
          </div>
          <input type="submit" value="Create" className={styles.submit}/>
      </form>
    </div>
  )
})