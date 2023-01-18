import { Request, Response } from "express";


class TodosController{

    public async createTodo(req: Request, res: Response){
        try{
            
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