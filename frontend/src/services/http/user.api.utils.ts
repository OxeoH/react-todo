import { GroupType } from "../../store/groups/groups.types";
import { TodoType } from "../../store/todos/todos.types";

export const getTodosFromGroups = (groups: GroupType[]) => {
    let tasks: TodoType[] = []

    for(let group of groups){
        for(let todo of group.todos){            
            tasks.push({...todo, group})
        }
    }

    return tasks
}