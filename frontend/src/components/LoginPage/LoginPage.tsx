import { observer } from "mobx-react-lite";
import React, { FormEvent } from "react";
import { authorization } from "../../services/http/userAPI";
import { LoginProps } from "../../types/UserProps";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router";
import { GROUPS_ROUTE } from "../../routes/utils/consts";
import { useStore } from "../../store";

const LoginPage: React.FC = observer(() => {
  const navigate = useNavigate();

  const initialForm: LoginProps = {
    login: "",
    password: "",
    admin: false,
  };

  const { userStore, groupStore, todosStore } = useStore();

  const [form, setForm] = React.useState<LoginProps>(initialForm);

  const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userData = await authorization(form);
      userStore.setIsAuth(true);
      userStore.setUser(userData.user);
      groupStore.setGroups(userData.groups);
      todosStore.setTodos(userData.todos);

      navigate(GROUPS_ROUTE);
    } catch (e: any) {
      //TODO: Error type
      alert(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => sendForm(e)}
        className={styles.form}
      >
        <div className={styles.text}>Authorization</div>
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
        <input type="submit" value="Sign-in" className={styles.submit} />
      </form>
    </div>
  );
});

export default LoginPage;
