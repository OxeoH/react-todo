import { Request, Response, Router } from "express";
import groupsController from "./groups.controller";

const groupsRouter = Router()

groupsRouter.post('/create', async (req: Request, res: Response) => {
    await groupsController.createGroup(req, res)
})

groupsRouter.post('/delete/:id', async (req: Request, res: Response) => {
    await groupsController.deleteGroup(req, res);
})

groupsRouter.post('/clear/:id', async (req: Request, res: Response) => {
    await groupsController.clearGroup(req, res);
})

export default groupsRouter