import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Group } from "../Groups/groups.entity";
import { Todo } from "./todo.entity";

export class TodosService{
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

    public async deleteTodoById(todoId: string, group: Group){
        const candidate = await this.todosRepository.findOne({where: {id: todoId, group}})
        if(candidate){
            const deletedTodo = await this.todosRepository.remove(candidate)

            return deletedTodo
        }else{
            return null
        }
    }

    public async deleteTodosFromGroup(todos: Todo[]){
        todos.map(todo => this.todosRepository.delete({id: todo.id}))
    }

    public async changeTodoStatus(todoId: string, group: Group){
        const candidate = await this.todosRepository.findOne({where: {id: todoId, group}})
        if(candidate){
            await this.todosRepository
                .createQueryBuilder()
                .update(Todo)
                .set({completed: !candidate.completed})
                .where("id = :id", { id: todoId })
                .execute()

            return true
        }else{
            return false
        }
    }
}

export default new TodosService