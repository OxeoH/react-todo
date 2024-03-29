import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom';
import { MAIN_ROUTE } from '../../routes/utils/consts';
import { useStore } from '../../store';
import GroupsStore from '../../store/groups/groups.store';
import { CreateGroupPopup } from '../CreateGroupPopup/CreateGroupPopup';
import Group from '../Group/Group';
import styles from './GroupTable.module.scss'

const GroupTable: React.FC = observer(() => {

  const [popupVisibility, setPopupVisibility] = React.useState<boolean>(false);
  
  const createGroup = () =>{
    setPopupVisibility(!popupVisibility)
  }
  const {groupStore, sortStore} = useStore()

  let currentGroups = groupStore.findGroupsByParameters()

  return (
    <div className={styles.container}>
      {popupVisibility && <CreateGroupPopup setPopupVisibility={setPopupVisibility}/>}

      <div className={styles.tools}>
        <Link to={`${MAIN_ROUTE}`}><button className={styles.menu} onClick={() => sortStore.resetSearch()}>Menu</button></Link>
        <button className={styles.create} onClick={() => createGroup()}>Create New Group</button>
      </div>
      <div className={styles.table}>
        {currentGroups.map((item) => (<Group key={item.id} id={item.id} name={item.name} todos={item.todos}/>))}
      </div>
      {!groupStore.groups.length ? <div className={styles.empty}>☀️There are no active groups🍸</div> : <></>}
    </div>
  )
});

export default GroupTable