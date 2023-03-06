import { makeAutoObservable } from "mobx";
import { RootStore } from "..";
import { Sort, SortNames, SortTypes } from "./sorts.types";

class SortStore{
    todoSearch: string
    groupSearch: string
    filter: Sort
    rootStore: RootStore

    constructor(rootStore: RootStore){
        this.rootStore = rootStore
        this.todoSearch = ''
        this.groupSearch = ''
        this.filter = {name: SortNames.DEFAULT, sortType: SortTypes.DEFAULT}
        makeAutoObservable(this) 
    }

    resetFilter(){
        this.filter = {name: SortNames.DEFAULT, sortType: SortTypes.DEFAULT}
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

    setFilter(sort: Sort){
        this.filter = sort
        console.log(this.filter);
        
    }
}
export default SortStore