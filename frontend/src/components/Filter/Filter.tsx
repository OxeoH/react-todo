import React from 'react'
import styles from './Filter.module.scss'
import { Sort, sorts } from '../../store/sorts/sorts.types';
import { useStore } from '../../store';

const Filter: React.FC = () => {
  const [popupVisibility, setPopupVisibility] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);
  const {sortStore} = useStore()
  
  
  const onSortChoose = (sort: Sort) =>{
    sortStore.setFilter(sort)
    setPopupVisibility(false);

  }

  
  

  React.useEffect(() => {
    const onOutsideClick = (event: any) =>{
        if(!event.composedPath().includes(sortRef.current)){
            setPopupVisibility(false);
        }
    };

    document.body.addEventListener('click', onOutsideClick);

    return () => document.body.removeEventListener('click', onOutsideClick);
}, []);

  return (
    <div className={styles.wrapper} ref={sortRef}>
      <div className={styles.text} onClick={() => setPopupVisibility(!popupVisibility)}>Filter by: <span className={styles.value}>{sortStore.filter.name}</span>
      {popupVisibility && 
        <div className={styles.popup}>
            <ul className={styles.sorts}>
              {sorts.map((sort, index) => (<li key={index} className={styles.sort} onClick={() => onSortChoose(sort)}>{sort.name}</li>))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Filter