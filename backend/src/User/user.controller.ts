import { Request, Response } from "express";
import userService from "./user.service";
import { AuthProps } from "./user.types";


class UserController{
    public async authUser(req: Request, res: Response){
        try{
            const authParams: AuthProps  = req.body

            if(!authParams.password || !authParams.login){
                res.status(400).json({message: "Error: Login and password are requared"})
            }

            const authorizedUser = await userService.authorizeUser(authParams)

            res.status(200).json(authorizedUser)
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

            const newUser = await userService.createNewUser(registerParams)

            res.status(200).json({message: `User with login ${newUser.login} and password ${newUser.password} was created with id ${newUser.id}`})
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }
}

export default new UserController