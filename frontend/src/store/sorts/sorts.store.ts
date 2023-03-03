import { makeAutoObservable } from "mobx";
import { RootStore } from "..";
import { defaultSort, Sort } from "./sorts.types";

class SortStore{
    todoSearch: string
    groupSearch: string
    filter: Sort
    rootStore: RootStore

    constructor(rootStore: RootStore){
        this.rootStore = rootStore
        this.todoSearch = ''
        this.groupSearch = ''
        this.filter = defaultSort
        makeAutoObservable(this) 
    }

    resetFilter(){
        this.filter = defaultSort
    }

    setTodoSearch(searchString: string){
        this.todoSearch = searchString
    }
    setGroupSearch(searchString: string){
        this.groupSearch = searchString
    }

    resetSearch(){
        this.groupSearch = this.todoSearch = ''
    }

}
export default SortStore