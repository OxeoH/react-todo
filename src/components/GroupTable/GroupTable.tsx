import { observer } from 'mobx-react-lite'
import React from 'react'
import groupsController from '../../store/groups/groups.controller';
import Group from '../Group/Group';
import styles from './GroupTable.module.scss'

const GroupTable: React.FC = observer(() => {
  return (
    <>
      <button onClick={() => groupsController.getGroups()}>FetchGroups</button>
      <button onClick={() => groupsController.removeAll()}>removeAll</button>
      <div className={styles.table}>
        {groupsController.groups.map((item) => (<Group key={item.id} id={item.id} name={item.name} items={item.items} />))}
      </div>
    </>
    
  )
});

export default GroupTable