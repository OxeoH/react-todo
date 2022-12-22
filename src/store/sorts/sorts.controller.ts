import { makeAutoObservable } from "mobx";
import { Sort } from "./sorts.types";

class Sorts{
    sorts: Sort[] = [
        {name: "A - Z / А - Я", sortType: "alphabetAsc"},
        {name: "Z - A / Я - А", sortType: "alphabetDesc"}
      ];

    activeSort: Sort = this.sorts[0]

    constructor(){
        makeAutoObservable(this)
    }

    changeActiveSort(sort: Sort){
        this.activeSort = sort
    }

    // removeAll(){
    //     this.todo = []
    // }

    // addTodo(todo: Todo){
    //     this.todo.push(todo)
    // }

    // changeTodoStatus(id: number){
    //     this.todo.map((item) => item.id === id ? {...item, completed: !item.completed}: item) 
    // }

    // async fetchTodos(){
    //     try{
    //         const responce = await fetch('https://6348936e0b382d796c73f4b1.mockapi.io/todos')
    //         const todosList = await responce.json()
    //         this.todo = todosList
    //     }catch(error){
    //         console.log("FetchTodosError: Error parsing todos");
    //     }
    // }

}
export default new Sorts()