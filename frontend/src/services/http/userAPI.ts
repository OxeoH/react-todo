import { LoginProps } from "../../types/UserProps";
import { $authHost, $host } from "./index";

export const registration = async ({login, password}: LoginProps) => {
    const response = await $host.post("api/user/registration", {login, password})
    return response
}
export const authorization = async ({login, password}: LoginProps) => {
    const response = await $host.post("api/user/login", {login, password})
    return response
}

export const check = async () => {
    const response = await $host.post("api/login")
    return response
}