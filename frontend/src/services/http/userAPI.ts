import { LoginProps } from "../../types/UserProps";
import { $host } from "./index";
import jwt_decode from "jwt-decode";
import { AuthResponse, AuthResult, RegisterResponse } from "./user.api.types";
import { User } from "../../store/user/user.types";
import { getTodosFromGroups } from "./user.api.utils";

export const registration = async ({ login, password, admin }: LoginProps) => {
  console.log(login, password, admin);
  const { data } = await $host.post<RegisterResponse>("api/user/registration", {
    login,
    password,
    admin,
  });
  localStorage.setItem("token", `${data.token}`);

  return jwt_decode<User>(data.token);
};

export const authorization = async ({ login, password, admin }: LoginProps) => {
  const { data } = await $host.post<AuthResponse>("api/user/login", {
    login,
    password,
    admin,
  });

  localStorage.setItem("token", `${data.token}`);

  const result: AuthResult = {
    user: jwt_decode<User>(data.token),
    groups: data.groups,
    todos: getTodosFromGroups(data.groups),
  };

  return result;
};

export const check = async () => {
  const { data } = await $host.post<AuthResponse>("api/user/check", {
    token: localStorage.getItem("token") ?? "",
  });

  localStorage.setItem("token", `${data.token}`);

  const result: AuthResult = {
    user: jwt_decode<User>(data.token),
    groups: data.groups,
    todos: getTodosFromGroups(data.groups),
  };

  return result;
};

export const checkIsAdmin = async () => {
  const { data } = await $host.post<boolean>("api/user/admin/check", {
    token: localStorage.getItem("token") ?? "",
  });

  return data;
};
