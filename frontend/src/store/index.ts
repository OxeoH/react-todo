
import React from "react";
import GroupsStore from "./groups/groups.store";
import TodosStore from "./todos/todos.store";
import UserStore from "./user/user.store";

export class RootStore{
    userStore: UserStore
    groupStore: GroupsStore
    todosStore: TodosStore
    constructor(){
        this.userStore = new UserStore(this)
        this.groupStore = new GroupsStore(this)
        this.todosStore = new TodosStore(this)
    }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)