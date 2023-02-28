import { GroupType } from "../groups/groups.types"

export type TodoType ={
    id: string,
    title: string,
    completed: boolean,
    group: GroupType
}

