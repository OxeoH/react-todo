import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom';
import { GROUPS_ROUTE } from '../../routes/utils/consts';
import { deleteGroup } from '../../services/http/groupsAPI';
import { useStore } from '../../store';
import { GroupType } from '../../store/groups/groups.types';
import styles from './Group.module.scss'

const Group: React.FC<GroupType> = observer((group) => {
    const {id, name, todos} = group
    const {groupStore, sortStore} = useStore();

    const removeGroup = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();

      try{
        const deletedId = await deleteGroup(id)
        
        if(deletedId.length){
          groupStore.deleteGroup(deletedId)
        }else{
          alert("Error: This group was not found")
        }

      }catch(e){
        console.log(e);
      }
    }


  return (
    <Link to={GROUPS_ROUTE + `/${id}`} onClick={() => sortStore.resetSearch()}>
        <div className={styles.wrapper}>
            <div className={styles.cross} onClick={(e) => removeGroup(e)}>X</div>
            <div className={styles.name}>{name}</div>
            <div className={styles.counter}>Count of tasks: <span className={styles.count}>{todos.length}</span></div>
        </div>
    </Link>
    
    
  )
});

export default Group