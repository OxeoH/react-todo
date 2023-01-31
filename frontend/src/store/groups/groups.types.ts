import { TodoType } from "../todos/todos.types"

export type GroupType={
    id: string,
    name: string,
    todos: TodoType[]
}