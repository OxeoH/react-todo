import { makeAutoObservable } from "mobx";
import { GroupType } from "../groups/groups.types";
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
        const todoIndex = this.todo.findIndex(todo => todo.id === id)
        if(todoIndex < 0) {
            //console.log("");
            return null
        }
        const todoItem = this.todo[todoIndex]
        todoItem.completed = !todoItem.completed   
        //this.todo.map((item) => item.id === id ? {...item, completed: !item.completed}: item) 
    }

}
export default new Todos()