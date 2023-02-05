import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "..";
import { GroupType } from "./groups.types";


class GroupsStore{
    
    groups: GroupType[]
    rootStore: RootStore

    constructor(rootStore: RootStore){
        this.rootStore = rootStore
        this.groups = []
        makeAutoObservable(this)
    }

    //  *getGroups(){
    //     try{
    //         this.groups = yield groupsService.getGroups()
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    getGroups(){
        return this.groups
    }

    setGroups(groups: GroupType[]){
        this.groups = groups
    }

    clearGroup(){

    }

    addGroup(group: GroupType){
        this.groups.push(group)
    }

    deleteGroup(id: string){
        const index = this.findGroupIndex(id)
        if(index < 0) alert("Error: Cannot find this group")
        this.groups = this.groups.filter((group) => group.id !== this.groups[index].id)
    }

    removeAll(){
        this.groups=[]
    }

    findGroupIndex(id: string){
        const index = this.groups.findIndex(group => group.id === id)
        if(index < 0) {
            console.log("Error: cannot find group with that index: ", id);
            return -1
        }
        return index
    }

    findTodosByGroupIndex(id: string){
        const groupIndex = this.findGroupIndex(id)
        
        if(typeof(groupIndex) !== "undefined" && groupIndex >= 0){  
            const groupTodos = this.groups[groupIndex].todos
            
            return groupTodos
        }

        return []
    }

    findTodoIndex(id: string, groupIndex: number){
        const index = this.groups[groupIndex].todos.findIndex(task => task.id === id)
        if(index < 0) {
            console.log("Error: cannot find task by index ", id);
            return
        }
        return index
    }


    removeAllByGroup(id: string){
        const groupIndex = this.findGroupIndex(id)
        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            this.groups[groupIndex].todos = []
            return
        }
        console.log("Error: cannot find group by index ", id);
    }

    removeTodo(taskId: string, groupId: string){    
        const groupIndex = this.findGroupIndex(`${groupId}`)

        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            const taskItem = this.groups[groupIndex].todos.find(item => item.id === taskId)
            this.groups[groupIndex].todos = this.groups[groupIndex].todos.filter((task) => task !== taskItem)
            return
        }
        console.log("Error: cannot find group by index ", groupId)
    }   

    changeTodoStatus(taskId: string, groupId: string){
        const groupIndex = this.findGroupIndex(`${groupId}`)
        
        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            const taskIndex = this.findTodoIndex(taskId, groupIndex)
            if((typeof(taskIndex) !== 'undefined' && taskIndex >= 0)){
                const task = this.groups[groupIndex].todos[taskIndex]
                task.completed = !task.completed
                return
            }
            console.log("Error: cannot find task by index ", taskId)
            return
        } 
        console.log("Error: cannot find group by index ", groupId)
    }
}

export default GroupsStore


