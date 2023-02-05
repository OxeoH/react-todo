import { makeAutoObservable } from "mobx";
import { RootStore } from "..";
import { TodoType } from "./todos.types";

class TodosStore{
    todos: TodoType[] = []
    rootStore: RootStore

    constructor(rootStore: RootStore){
        this.rootStore = rootStore
        this.todos = []
        makeAutoObservable(this)
    }

    setTodos(todos: TodoType[]){
        this.todos = todos
    }

    removeTodo(id: string){
        console.log(id);
        
        this.todos = this.todos.filter((item) => item.id !== id)
    }

    removeAll(){
        this.todos = []
    }

    addTodo(Todos: TodoType){
        this.todos.push(Todos)
    }

}

export default TodosStore