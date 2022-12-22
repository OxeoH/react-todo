import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import { GroupType } from '../../store/groups/groups.types';
import styles from './Group.module.scss'

const Group: React.FC<GroupType> = observer((group) => {
    const {id, name, items} = group
  return (
    <Link to={`/${id}`}>
        <div className={styles.wrapper}>
            <div className={styles.name}>{name}</div>
            <div className={styles.counter}>Количество задач: <span className={styles.count}>{items.length}</span></div>
        </div>
    </Link>
    
    
  )
});

export default Group