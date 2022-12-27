import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "./user.entity";
import { AuthProps } from "./user.types";


class UserService{
    userRepository: Repository<User>

    constructor(){
        this.userRepository = AppDataSource.getRepository<User>(User)
    }

    public async createNewUser(registerParams: AuthProps){
        const newUser = new User
        newUser.login = registerParams.login
        newUser.password = registerParams.password

        const createdUser = await this.userRepository.save(newUser)

        return createdUser
    }

    public async authorizeUser(authParams: AuthProps){
        
    }
}

export default new UserService