
import React from "react";
import GroupsStore from "./groups/groups.store";
import SortStore from "./sorts/sorts.store";
import TodosStore from "./todos/todos.store";
import UserStore from "./user/user.store";

export class RootStore{
    userStore: UserStore
    groupStore: GroupsStore
    todosStore: TodosStore
    sortStore: SortStore
    constructor(){
        this.userStore = new UserStore(this)
        this.groupStore = new GroupsStore(this)
        this.todosStore = new TodosStore(this)
        this.sortStore = new SortStore(this)
    }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)