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

    getTodosByGroupIndex(id: string){
        const groupIndex = this.groups.findIndex(group => `${group.id}` === id)

        if(groupIndex < 0) {
            console.log("Error: cannot find group by index ", id);
            return []
        }

        const groupTodos = this.groups[groupIndex].items
        return groupTodos
    }

    removeAll(){
        this.groups=[]
    }
}

export default new Groups()


