import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { User } from "./user.entity";
import { AuthProps } from "./user.types";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
import config from './jwtConfig'


const generateAccessToken = (id: string, login: string) => {

    const payload = {
        id,
        login
    }

    return jwt.sign(payload, config.secret, {expiresIn: "24h"})
}

class UserService{
    userRepository: Repository<User>

    constructor(){
        this.userRepository = AppDataSource.getRepository<User>(User)
    }

    public async checkIsNewUser(login: string){
        const candidate = await this.userRepository.find({where: {login}})
        
        if(candidate.length === 0){
            return true
        }
        return false
    }

    public async getUserByLogin(login: string){
        
        
        
        return null
    }

    public async createNewUser(registerParams: AuthProps): Promise<User | null>{
        
        if(await this.checkIsNewUser(registerParams.login)){
            const newUser = new User
            newUser.login = registerParams.login
            newUser.password = registerParams.password

            const createdUser = await this.userRepository.save(newUser)

            return createdUser
        }else{
            return null
        }
        
    }

    public async authorizeUser(authParams: AuthProps){
        try{
            const user = await this.userRepository.findOne({where: {login: authParams.login}})

            if(!user){
                return null
            }

            const validPassword = bcrypt.compareSync(authParams.password, user.password)

            if(!validPassword){
                return null
            }

            const token = generateAccessToken(user.id, user.login)

            return token
        }catch(e){
            return null
        }
    }
}

export default new UserService