import { Request, Response } from "express";
import userService from "./user.service";
import { AuthProps } from "./user.types";
import bcrypt from "bcryptjs"


class UserController{
    hashSalt: number

    constructor(){
        this.hashSalt = 8
    }

    public async authUser(req: Request, res: Response){
        try{
            const {login, password}: AuthProps  = req.body

            if(!password || !login){
                res.status(400).json({message: "Error: Login and password are requared"})
            }

            const authorizedUserToken = await userService.authorizeUser({login, password})

            if(!authorizedUserToken){
                return res.status(400).json({message: "Error: Cannot authorize"})
            }

            res.status(200).json({accessToken: authorizedUserToken})
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }

    public async registerUser(req: Request, res: Response){
        try{
            const registerParams: AuthProps = req.body
            
            if(!registerParams.password || !registerParams.login){
                res.status(400).json({message: "Error: Login and password are requared"})
            }

            const hashPassword = bcrypt.hashSync(registerParams.password, this.hashSalt)

            const newUser = await userService.createNewUser({...registerParams, password: hashPassword})

            if(newUser){
                return res.status(200).json({message: `User with login ${newUser.login} and password ${newUser.password} was created with id ${newUser.id}`})
            }else{
                return res.status(400).json({message: `User with login ${registerParams.login} is already exists`})
            }

        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }
}

export default new UserController