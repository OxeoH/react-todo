import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GROUPS_ROUTE } from "../../routes/utils/consts";
import { registration } from "../../services/http/userAPI";
import { useStore } from "../../store";
import { LoginProps } from "../../types/UserProps";
import styles from "./RegisterPage.module.scss";

const RegisterPage: React.FC = () => {
  const initialForm: LoginProps = {
    login: "",
    password: "",
    admin: false,
  };

  const [form, setForm] = React.useState<LoginProps>(initialForm);
  const navigate = useNavigate();
  const { userStore, groupStore, todosStore } = useStore();

  const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);

    const newUser = await registration(form);

    userStore.setIsAuth(true);
    userStore.setUser(newUser);
    todosStore.setTodos([]);
    groupStore.setGroups([]);

    navigate(GROUPS_ROUTE);
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)}
        className={styles.form}
      >
        <div className={styles.text}>Registration</div>
        <div className={styles.fieldWrap}>
          <label className={styles.label}>Nickname: </label>
          <input
            type="text"
            onChange={(event) =>
              setForm({ ...form, login: event.target.value })
            }
            className={styles.field}
          />
        </div>
        <div className={styles.fieldWrap}>
          <label className={styles.label}>Password: </label>
          <input
            type="password"
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
            className={styles.field}
          />
        </div>
        <input type="submit" value="Sign-up" className={styles.submit} />
      </form>
    </div>
  );
};

export default RegisterPage;
