import { Request, Response } from "express";
import groupsService from "./groups.service";
import {verifyTokenMiddleware} from '../User/userMiddleware/verifyTokenMiddleware'
import userService from "../User/user.service";
import { GroupProps } from "./groups.types";
import { User } from "../User/user.entity";


class GroupsController{

    public async createGroup(req: Request, res: Response){
        try{
            const {token, groupName} = req.body
            const userData = verifyTokenMiddleware(token)
            
            if(userData){
                const user = await userService.getUserById(userData.id);
                if(user){
                    const newGroup = await groupsService.createNewGroup({groupName, user})
                    console.log('Controller NeW GRoup: ', newGroup);
                    
                    if(newGroup){
                        const {id, name, todos} = newGroup
                        res.status(200).json({id, name, todos})
                    }
                }else{
                    res.status(500).json({message: `Error: Cannot find user`})
                }
            }else{
                res.status(403).json({message: `Error: Wrong token`})
            }
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }

    public async clearGroup(req: Request, res: Response){
        try{
            
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }

    public async deleteGroup(req: Request, res: Response){
        try{
            

        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }
}

export default new GroupsController