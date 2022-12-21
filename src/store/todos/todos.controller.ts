import { makeAutoObservable } from "mobx";
import { Todo } from "./todos.types";

class Todos{
    todo: Todo[] = []

    constructor(){
        makeAutoObservable(this)
    }

    removeTodo(id: number){
        console.log(id);
        
        this.todo = this.todo.filter((item) => item.id !== id)
    }

    removeAll(){
        this.todo = []
    }

    addTodo(todo: Todo){
        this.todo.push(todo)
    }

    changeTodoStatus(id: number){
        this.todo.map((item) => item.id === id ? {...item, completed: !item.completed}: item) 
    }

    async fetchTodos(){
        try{
            const responce = await fetch('https://6348936e0b382d796c73f4b1.mockapi.io/todos')
            const todosList = await responce.json()
            this.todo = todosList
        }catch(error){
            console.log("FetchTodosError: Error parsing todos");
        }
    }

}
export default new Todos()