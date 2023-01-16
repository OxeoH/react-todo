import { Request, Response } from "express";
//import groupsService from "./groups.service";
import { AuthProps } from "../User/user.types";
import bcrypt from "bcryptjs"


class GroupsController{

    public async createGroup(req: Request, res: Response){
        try{
            
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