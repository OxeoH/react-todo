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

    

}
export default new Todos()