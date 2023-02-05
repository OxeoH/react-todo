import { $authHost } from "./index";
import { TodoType } from "../../store/todos/todos.types";


export const createTask = async (todoName: string, groupId: string) => {
    const token = localStorage.getItem('token') || ''
    const {data} = await $authHost.post<TodoType>("api/todos/create", {todoName, groupId, token})
    console.log("Created task: ", data);
    
    return data
}
// export const deleteGroup = async (groupId: string) => {
//     const token = localStorage.getItem('token') || ''
//     const response = await $authHost.post<{id: string}>(`api/todos/delete`, {token, groupId})
    
//     if(response.status === 200){
//         return response.data.id
//     }
    
//     return ''
// }

// export const clearGroup = async (groupId: string) =>{
//     const token = localStorage.getItem('token') || ''
//     const response = await $authHost.post(`api/groups/clear`, {token, groupId})
//     console.log(response.status);
// }

