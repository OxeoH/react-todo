import { observer } from 'mobx-react-lite'
import React, { FormEvent } from 'react'
import { editGroup } from '../../services/http/groupsAPI'
import { useStore } from '../../store'
import styles from './EditGroupPopup.module.scss'

export const EditGroupPopup: React.FC<any> = observer(({setPopupVisibility, id}) => {
  const {groupStore} = useStore()
  const [newName, setNewName] = React.useState('')


  const editGroupName = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setPopupVisibility(false)

    try{
      const editedGroup = await editGroup(id, newName)
      
      if(editedGroup){
        groupStore.editGroupName(id, newName)
      }else{
        alert("Error: This group was not found")
      }

    }catch(e){
      console.log(e);
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.cross} onClick={() => setPopupVisibility(false)}>X</div>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => editGroupName(e)} className={styles.form}>
          <div className={styles.fieldWrap}>
              <label className={styles.label}>Please, enter new name: </label>
              <input 
                type="text" 
                onChange={(event) => setNewName(event.target.value)} 
                className={styles.field}
                placeholder='Learn React⚛️'
              />
          </div>
          <input type="submit" value="Create" className={styles.submit}/>
      </form>
    </div>
  )
})