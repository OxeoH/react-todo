import { Request, Response } from "express";
import groupsService from "../Groups/groups.service";
import { verifyTokenMiddleware } from "../User/userMiddleware/verifyTokenMiddleware";
import todoService from "./todo.service";


class TodosController{

    public async createTodo(req: Request, res: Response){
        try{
            const {todoName, groupId, token} = req.body
            const userData = verifyTokenMiddleware(token)
            if(userData){
                const group = await groupsService.getGroupById(groupId)
                if(group){
                    const newTodo = await todoService.createNewTodo(todoName, group)

                    res.status(200).json(newTodo)
                }else{
                    res.status(403).json({message: `Error: Cannot find group`})
                }
            }else{
                res.status(403).json({message: `Error: Wrong token`})
            }
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }

    public async updateTodoStatus(req: Request, res: Response){
        try{
            
        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }

    public async deleteTodo(req: Request, res: Response){
        try{
            

        }catch(e){
            res.status(500).json({message: `Error: ${e}`})
        }
    }
}

export default new TodosController