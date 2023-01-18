import { TodoType } from "../todos/todos.types"

export type GroupType={
    id: number,
    name: string,
    todos: TodoType[]
}