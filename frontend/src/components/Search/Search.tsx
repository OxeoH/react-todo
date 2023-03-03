import React from 'react'
import { useLocation } from 'react-router-dom'
import { GROUPS_ROUTE } from '../../routes/utils/consts'
import { debounce } from '../../routes/utils/debounce'
import { useStore } from '../../store'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const {sortStore} = useStore()
  const [searchValue, setSearchValue] = React.useState('')

  const location = useLocation()

  const clearSearch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    setSearchValue('')

    location.pathname === GROUPS_ROUTE ? sortStore.setGroupSearch('') : sortStore.setTodoSearch('')
  }

  const onSearchChange = (value: string) => {

    setSearchValue(value)

    location.pathname === GROUPS_ROUTE ? sortStore.setGroupSearch(value) : sortStore.setTodoSearch(value)
  }

  return (
    <div className={styles.wrapper}>
      <input type="text" 
             value={location.pathname === GROUPS_ROUTE ? sortStore.groupSearch : sortStore.todoSearch} 
             placeholder='Search 💻🔍' 
             className={styles.search}
             onChange={(e) => debounce(onSearchChange(e.target.value), 600)}
      />
      <div className={styles.cross} onClick={(e)=> clearSearch(e)}/>
    </div>
    
  )
}

export default Search