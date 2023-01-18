import { Repository } from "typeorm"
import AppDataSource from "../../data-source"
import { Group } from "./groups.entity"
import { GroupProps } from "./groups.types"

class GroupService{
    groupRepository: Repository<Group>

    constructor(){
        this.groupRepository = AppDataSource.getRepository<Group>(Group)
    }

    public async createNewGroup(createParams: GroupProps): Promise<Group | null>{
        
        if(createParams){
            const newGroup = new Group
            newGroup.name = createParams.groupName
            newGroup.description = createParams.description
            newGroup.user = createParams.user

            const createdGroup = await this.groupRepository.save(newGroup)

            return createdGroup
        }else{
            return null
        }
        
    }
}

export default new GroupService