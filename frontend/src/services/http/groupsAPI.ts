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
    const response = await $authHost.post<{id: string}>(`api/groups/delete`, {token, groupId})
    
    if(response.status === 200){
        return response.data.id
    }
    
    return ''
}

export const clearGroup = async (groupId: string) =>{
    const token = localStorage.getItem('token') || ''
    const response = await $authHost.post(`api/groups/clear`, {token, groupId})
    console.log(response.status);
}

export const editGroup = async (groupId: string, newName: string) => {
    const token = localStorage.getItem('token') || ''
    const response = await $authHost.post<{result: boolean}>("api/groups/edit", {groupId, newName, token})
    console.log(response.data);
    if(response.status === 200){
        return response.data.result
    }

    return false
    
}

