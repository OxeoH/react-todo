import { Group } from "../../Groups/groups.entity"

export const fixTodos = (groups: Group[]) => {//Mess
    const newGroups: Group[] = []
    for(let group of groups){
        if(group.todos.length){
            group = {...group, todos: group.todos.map(todo => todo = {...todo, group})}
            newGroups.push(group)
        }else{
            newGroups.push(group)
        }
        
    }
    return newGroups
}