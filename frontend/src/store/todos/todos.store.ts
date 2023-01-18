import { makeAutoObservable } from "mobx";
import { GroupType } from "../groups/groups.types";
import { TodoType } from "./todos.types";

class TodosStore{
    todo: TodoType[] = []

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

    addTodo(todo: TodoType){
        this.todo.push(todo)
    }

    

}
export default new TodosStore()