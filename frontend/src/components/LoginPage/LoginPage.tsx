import { observer } from 'mobx-react-lite'
import React, { FormEvent} from 'react'
import { authorization} from '../../services/http/userAPI'
import { LoginProps } from '../../types/UserProps'
import styles from './LoginPage.module.scss'
import { useNavigate } from 'react-router'
import { GROUPS_ROUTE} from '../../routes/utils/consts'
import { useStore } from '../../store'
import GroupsStore from '../../store/groups/groups.store'


const LoginPage: React.FC = observer(() => {
    const navigate = useNavigate()

    const initialForm: LoginProps = {
        login: '',
        password: ''
    }

    const {userStore, groupStore} = useStore()

    const [form, setForm] = React.useState<LoginProps>(initialForm)

    const sendForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const userData = await authorization(form)

        userStore.setIsAuth(true)
        userStore.setUser(userData.user)
        groupStore.setGroups(userData.groups)
        
        navigate(GROUPS_ROUTE)
    }

  return (
    <div className={styles.container}>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)} className={styles.form}>
            <div className={styles.text}>Authorization</div>
            <div className={styles.fieldWrap}>
                <label className={styles.label}>Nickname: </label>
                <input type="text" onChange={(event) => setForm({...form, login: event.target.value})} className={styles.field}/>
            </div>
            <div className={styles.fieldWrap}>
                <label className={styles.label}>Password: </label>
                <input type="password" onChange={(event) => setForm({...form, password: event.target.value})} className={styles.field}/>
            </div>
            <input type="submit" value="Sign-in" className={styles.submit}/>
        </form>
    </div>
  )
})

export default LoginPage