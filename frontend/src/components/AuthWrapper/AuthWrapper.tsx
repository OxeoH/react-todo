import React, { useEffect } from "react";
import { LOGIN_ROUTE } from "../../routes/utils/consts";
import { useNavigate } from "react-router";
import { useStore } from "../../store";
import { check, checkIsAdmin } from "../../services/http/userAPI";

export const AuthWrapper = ({ children }: { children: any }) => {
  //const navigate = useNavigate();
  const { userStore, groupStore, todosStore } = useStore();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const userData = await check();
        const isAdmin = await checkIsAdmin();
        userStore.isAdmin = isAdmin;
        userStore.setIsAuth(true);
        userStore.setUser(userData.user);
        groupStore.setGroups(userData.groups);
        todosStore.setTodos(userData.todos);
      } catch (e: any) {
        //TODO: Error type
        alert(e.message);
        //navigate(LOGIN_ROUTE);
      }
    };
    checkToken();
  }, []);

  return <>{children}</>;
};
