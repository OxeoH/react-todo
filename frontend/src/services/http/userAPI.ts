import { LoginProps } from "../../types/UserProps";
import { $host } from "./index";
import jwt_decode from 'jwt-decode'
import { AuthResponse, AuthResult, RegisterResponse} from "./user.api.types";
import { User } from "../../store/user/user.types";
import { getTodosFromGroups } from "./user.api.utils";

export const registration = async ({login, password}: LoginProps) => {
    const {data} = await $host.post<RegisterResponse>("api/user/registration", {login, password})
    localStorage.setItem('token', `${data.token}`)
    
    
    return jwt_decode<User>(data.token)
}

export const authorization = async ({login, password}: LoginProps) => {
    const {data} = await $host.post<AuthResponse>("api/user/login", {login, password})
    console.log("Login res: ", data);
    
    localStorage.setItem('token', `${data.token}`)

    const result: AuthResult = {
        user: jwt_decode<User>(data.token),
        groups: data.groups,
        todos: getTodosFromGroups(data.groups)
    }

    return result
}

export const check = async () => {
    const response = await $host.post("api/login")
    return response
}

