import { GroupType } from "../../store/groups/groups.types"
import { TodoType } from "../../store/todos/todos.types"
import { User } from "../../store/user/user.types"

export type AuthResponse={
    token: string,
    groups: GroupType[]
}

export type RegisterResponse={
    token: string
}

export type AuthResult={
    user: User,
    groups: GroupType[],
    todos: TodoType[]
}