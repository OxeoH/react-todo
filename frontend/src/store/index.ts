
import React from "react";
import GroupsStore from "./groups/groups.store";
import UserStore from "./user/user.store";

export class RootStore{
    userStore: UserStore
    groupStore: GroupsStore
    constructor(){
        this.userStore = new UserStore(this)
        this.groupStore = new GroupsStore(this)
    }
}

const storeContext = React.createContext(new RootStore())

export const useStore = () => React.useContext(storeContext)