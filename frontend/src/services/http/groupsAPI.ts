import { $authHost } from "./index";
import jwt_decode from 'jwt-decode'
import { GroupType } from "../../store/groups/groups.types";


export const createGroup = async (groupName: string) => {
    const token = localStorage.getItem('token') || ''
    const {data} = await $authHost.post<GroupType>("api/groups/create", {groupName, token})
    console.log("Created data: ", data);
    
    return data
}
export const deleteGroup = async (groupId: string) => {
    const token = localStorage.getItem('token') || ''
    const {data} = await $authHost.post<GroupType>(`api/groups/delete/${groupId}`, {token})
    console.log("Deleted data: ", data);
    console.log("Deleted id", data.id);
}

export const clearGroup = async (groupId: string) =>{
    const token = localStorage.getItem('token') || ''
    const response = await $authHost.post(`api/groups/clear/${groupId}`, {token})
    console.log(response.status);
}

