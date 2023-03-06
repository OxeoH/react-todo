import { $authHost } from "./index";
import { TodoType } from "../../store/todos/todos.types";


export const createTask = async (todoName: string, groupId: string) => {
    const token = localStorage.getItem('token') || ''
    const {data} = await $authHost.post<TodoType>("api/todos/create", {todoName, groupId, token})
    console.log("Created task: ", data);
    
    return data
}

export const deleteTask = async (todoId: string, groupId: string) => {
    const token = localStorage.getItem('token') || ''
    const response = await $authHost.post<{id: string}>("api/todos/delete", {todoId, groupId, token})
    if(response.status === 200){
        console.log("Deleted task: ", response.data);
        return response.data.id
    }
    
    return ''
}

export const changeTaskStatus = async (todoId: string, groupId: string) => {
    const token = localStorage.getItem('token') || ''
    const response = await $authHost.post<{result: boolean}>("api/todos/check", {todoId, groupId, token})
    console.log(response.data.result);
    if(response.status === 200){
        return response.data.result
    }else{
        return false
    }
    
}