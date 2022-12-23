import { makeAutoObservable, runInAction } from "mobx";
import groupsService from "../../services/groups.service";
import { GroupType } from "./groups.types";


class Groups{
    
    groups: GroupType[] = []

    constructor(){
        makeAutoObservable(this)
    }

     *getGroups(){
        try{
            this.groups = yield groupsService.getGroups()
        }catch(error){
            console.log(error);
        }
    }

    findTodosByGroupIndex(id: string){
        const groupIndex = this.findGroupIndex(id)
        
        if(typeof(groupIndex) !== "undefined" && groupIndex >= 0){  
            const groupTodos = this.groups[groupIndex].items
            
            return groupTodos
        }

        return []
    }

    removeAll(){
        this.groups=[]
    }

    findGroupIndex(id: string){
        const index = this.groups.findIndex(group => `${group.id}` === id)
        if(index < 0) {
            console.log("Error: cannot find group by index ", id);
            return
        }
        return index
    }

    findTodoIndex(id: number, groupIndex: number){
        const index = this.groups[groupIndex].items.findIndex(task => task.id === id)
        if(index < 0) {
            console.log("Error: cannot find task by index ", id);
            return
        }
        return index
    }


    removeAllByGroup(id: string){
        const groupIndex = this.findGroupIndex(id)
        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            this.groups[groupIndex].items = []
            return
        }
        console.log("Error: cannot find group by index ", id);
    }

    removeTodo(taskId: number, groupId: number){    
        const groupIndex = this.findGroupIndex(`${groupId}`)

        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            const taskItem = this.groups[groupIndex].items.find(item => item.id === taskId)
            this.groups[groupIndex].items = this.groups[groupIndex].items.filter((task) => task !== taskItem)
            return
        }
        console.log("Error: cannot find group by index ", groupId)
    }   

    changeTodoStatus(taskId: number, groupId: number){
        const groupIndex = this.findGroupIndex(`${groupId}`)
        
        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            const taskIndex = this.findTodoIndex(taskId, groupIndex)
            if((typeof(taskIndex) !== 'undefined' && taskIndex >= 0)){
                const task = this.groups[groupIndex].items[taskIndex]
                task.completed = !task.completed
                return
            }
            console.log("Error: cannot find task by index ", taskId)
            return
        } 
        console.log("Error: cannot find group by index ", groupId)
    }
}

export default new Groups()


