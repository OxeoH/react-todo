import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../store';
import { CreateGroupPopup } from '../CreateGroupPopup/CreateGroupPopup';
import Group from '../Group/Group';
import styles from './GroupTable.module.scss'

const GroupTable: React.FC = observer(() => {

  const [popupVisibility, setPopupVisibility] = React.useState<boolean>(false);
  
  const createGroup = () =>{
    setPopupVisibility(!popupVisibility)
  }

  const {groupStore} = useStore()

  return (
    <div className={styles.container}>
      {popupVisibility && <CreateGroupPopup setPopupVisibility={setPopupVisibility}/>}

      <div className={styles.tools}>
        <button className={styles.create} onClick={() => createGroup()}>Create New Group</button>
      </div>
      <div className={styles.table}>
        {groupStore.groups.map((item) => (<Group key={item.id} id={item.id} name={item.name} todos={item.todos}/>))}
      </div>
    </div>
  )
});

export default GroupTable