import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import todoService from "../Todo/todo.service"
import { Group } from "./groups.entity"
import { CreateGroupProps, DeleteGroupProps } from "./groups.types"

class GroupService{
    groupRepository: Repository<Group>

    constructor(){
        this.groupRepository = AppDataSource.getRepository<Group>(Group)
    }

    public async createNewGroup(createParams: CreateGroupProps): Promise<Group | null>{
        if(createParams){
            const newGroup = new Group
            newGroup.name = createParams.groupName
            newGroup.user = createParams.user
            newGroup.todos = []

            const createdGroup = await this.groupRepository.save(newGroup)
            
            return createdGroup
        }else{
            return null
        }
        
    }

    public async deleteGroup(deleteParams: DeleteGroupProps): Promise<Group | null>{
        if(deleteParams){
            const {groupId, user} = deleteParams
            const group = await this.groupRepository.findOne({where: {id: groupId, user}, relations: ['todos']})
            console.log("GRoup to delete: ", group);
            
            
            
            if(group){
                await todoService.deleteTodosFromGroup(group.todos)

                const deletedGroup = await this.groupRepository.remove(group)
                console.log("Group deleted back: ", deletedGroup);
                return deletedGroup
            }
            return null
        }else{
            return null
        }
    }


    public async getGroupById(groupId: string){
        if(groupId.length){
            
            const candidate = await this.groupRepository.findOne({where: {id: groupId}})

            if(candidate){
                return candidate
            }
        }
        return null
    }
}

export default new GroupService