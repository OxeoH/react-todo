import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../store';
import Group from '../Group/Group';
import styles from './GroupTable.module.scss'

const GroupTable: React.FC = observer(() => {

  const {groupStore} = useStore()
  return (
    <>
      {/* <button onClick={() => groupsController.getGroups()}>FetchGroups</button>
      <button onClick={() => groupsController.removeAll()}>removeAll</button> */}
      <div className={styles.container}>
        {false && <div className={styles.table}>
          {groupStore.groups.map((item) => (<Group key={item.id} id={item.id} name={item.name} todos={item.todos} />))}
        </div>}
      </div>
    </>
    
  )
});

export default GroupTable