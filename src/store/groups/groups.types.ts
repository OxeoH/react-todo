import { Todo } from "../todos/todos.types"

export type GroupType={
    id: number,
    name: string,
    items: Todo[]
}