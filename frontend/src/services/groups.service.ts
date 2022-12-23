import { Axios, AxiosInstance } from "axios"
import { GroupType } from "../store/groups/groups.types"
import { baseInstance } from "./http"

class GroupService{
    baseInstance: AxiosInstance

    constructor(baseInstance: AxiosInstance){
        this.baseInstance = baseInstance
    }
    
    async getGroups(): Promise<GroupType[]>{
        const {data} = await this.baseInstance.get<GroupType[]>('todo-groups')
        return data
    }
}

export default new GroupService(baseInstance)