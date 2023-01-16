import React, { FormEvent } from 'react'
import { authorization, registration } from '../../services/http/userAPI'
import { LoginProps } from '../../types/UserProps'
import styles from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
    const initialForm: LoginProps = {
        login: '',
        password: ''
    }

    const [form, setForm] = React.useState<LoginProps>(initialForm)

    const sendForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()


        const responce = await authorization(form)
        console.log(responce);  
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
}

export default LoginPage