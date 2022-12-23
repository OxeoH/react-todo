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
 
    findTodoIndex(todoId:string){
        
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
        console.log("Group INdex: \n\n", groupIndex);

        if(typeof(groupIndex) !== 'undefined' && groupIndex >= 0){
            const taskItem = this.groups[groupIndex].items.find(item => item.id === taskId)
            this.groups[groupIndex].items = this.groups[groupIndex].items.filter((task) => task !== taskItem)
        }
        console.log("Error: cannot find group by index ", groupId)
        return
    }   

    changeTodoStatus(id: number){
        // const todoIndex = this.group.findIndex(todo => todo.id === id)
        // if(todoIndex < 0) {
        //     //console.log("");
        //     return null
        // }
        // const todoItem = this.todo[todoIndex]
        // todoItem.completed = !todoItem.completed   
        //this.todo.map((item) => item.id === id ? {...item, completed: !item.completed}: item) 
    }
}

export default new Groups()


