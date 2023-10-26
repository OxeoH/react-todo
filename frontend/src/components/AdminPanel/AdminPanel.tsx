import React, { useEffect } from "react";
import styles from "./AdminPanel.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { CreateTaskPopup } from "../CreateTaskPopup/CreateTaskPopup";
import { useStore } from "../../store";
import {
  GROUPS_ROUTE,
  MAIN_ROUTE,
  NOTFOUND_ROUTE,
} from "../../routes/utils/consts";

const AdminPanel: React.FC = observer(() => {
  const [popupVisibility, setPopupVisibility] = React.useState(false);
  const { groupStore, sortStore, userStore } = useStore();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const currentTodos = id ? groupStore.findTodosByParameters(id) : [];

  const showTaskCreator = () => {
    setPopupVisibility(!popupVisibility);
  };

  useEffect(() => {
    if (!userStore.isAdmin) navigate(NOTFOUND_ROUTE);
  }, [userStore.isAdmin]);

  return (
    <div className={styles.container}>
      <div className={styles.tools}>
        <h2>Admin Panel</h2>
      </div>
      <div className={styles.tools}>
        <Link to={`${GROUPS_ROUTE}`}>
          <button
            className={styles.back}
            onClick={() => sortStore.resetSearch()}
          >
            Back
          </button>
        </Link>
        <Link to={`${MAIN_ROUTE}`}>
          <button className={styles.back}>Menu</button>
        </Link>
      </div>
      <div className={styles.table}>
        {/* {!currentTodos.length ? (
          <div className={styles.empty}>☀️There are no active tasks🍸</div>
        ) : (
          <></>
        )}
        {currentTodos.map((task, index) => (
          // <TaskItem
          //   key={task.id}
          //   id={task.id}
          //   title={task.title}
          //   completed={task.completed}
          //   group={task.group}
          //   place={index + 1}
          // />))} */}
        <h4>User</h4>
        <br />
        <h4>User</h4>
        <br />
        <h4>User</h4>
        <br />
        <h4>User</h4>
        <br />
        <h4>User</h4>
        <br />
        <h4>User</h4>
        <br />
      </div>
    </div>
  );
});

export default AdminPanel;
