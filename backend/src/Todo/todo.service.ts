import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Group } from "../Groups/groups.entity";
import { Todo } from "./todo.entity";

class TodosService{
    todosRepository: Repository<Todo>

    constructor(){
        this.todosRepository = AppDataSource.getRepository<Todo>(Todo)
    }

    public async createNewTodo(todoName: string, group: Group){
        const newTodo = new Todo
        newTodo.title = todoName
        newTodo.group = group
        newTodo.completed = false

        const createdTodo = await this.todosRepository.save(newTodo)

        return createdTodo
    }
}

export default new TodosService