import React, { FormEvent } from 'react'
import { LoginProps } from '../../types/UserProps'
import styles from './RegisterPage.module.scss'

const RegisterPage: React.FC = () => {
    const initialForm: LoginProps = {
        nickname: '',
        password: ''
    }

    const [form, setForm] = React.useState<LoginProps>(initialForm)

    const sendForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

    }

  return (
    <div className={styles.container}>
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)} className={styles.form}>
            <div className={styles.text}>Registration</div>
            <div className={styles.fieldWrap}>
                <label className={styles.label}>Nickname: </label>
                <input type="text" onChange={(event) => setForm({...form, nickname: event.target.value})} className={styles.field}/>
            </div>
            <div className={styles.fieldWrap}>
                <label className={styles.label}>Password: </label>
                <input type="password" onChange={(event) => setForm({...form, password: event.target.value})} className={styles.field}/>
            </div>
            <input type="submit" value="Sign-up" className={styles.submit}/>
        </form>
    </div>
  )
}

export default RegisterPage