import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "..";
import { SortNames, SortTypes } from "../sorts/sorts.types";
import { TodoType } from "../todos/todos.types";
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

    findTodosByParameters(id: string){
        const groupIndex = this.findGroupIndex(id)

        const searchValue = this.rootStore.sortStore.todoSearch
        const typeSort = this.rootStore.sortStore.filter.sortType
        
        if(typeof(groupIndex) !== "undefined" && groupIndex >= 0){
            let groupTodos = this.groups[groupIndex].todos
                .filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
            
            switch(typeSort){
                case SortTypes.ALPHA_TYPE:
                    return groupTodos.sort()
                case SortTypes.ALPHA_TYPE_R:
                    return groupTodos.sort().reverse()
                case SortTypes.DEFAULT:
                    return groupTodos
                default:
                    break
            }

            return groupTodos
        }else{
            return []
        }
    }

    findGroupsByParameters(){
        if(this.groups.length){
            const searchValue = this.rootStore.sortStore.groupSearch
            const typeSort = this.rootStore.sortStore.filter.sortType


            let currentGroups = this.groups
                    .filter(group => group.name.toLowerCase().includes(searchValue.toLowerCase()))
                
            switch(typeSort){
                case SortTypes.ALPHA_TYPE:
                    return currentGroups.sort()
                case SortTypes.ALPHA_TYPE_R:
                    return currentGroups.sort().reverse()
                case SortTypes.DEFAULT:
                    return currentGroups
                default:
                    break
            }
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
        }else{
            console.log("Error: cannot find group by index ", groupId)
        }
        
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

    addTodoByGroup(todo: TodoType){
        if(todo){

            const groupIndex = this.findGroupIndex(`${todo.group.id}`)

            if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
                this.groups[groupIndex].todos.push(todo)
                return
            }else{
                console.log("Error: cannot find group by index ", todo.group.id)
            }
            
        }
    }
}

export default GroupsStore


