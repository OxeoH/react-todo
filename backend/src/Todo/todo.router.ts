import { Request, Response, Router } from "express";
import todosController from "./todo.controller";

const todosRouter = Router()

todosRouter.post('/create', async (req: Request, res: Response) => {
    await todosController.createTodo(req, res)
})

todosRouter.post('/delete', async (req: Request, res: Response) => {
    await todosController.deleteTodo(req, res);
})

todosRouter.post('/update/:id', async (req: Request, res: Response) => {
    await todosController.updateTodoStatus(req, res);
})

export default todosRouter