import { Request, Response, Router } from "express";
import groupsController from "./groups.controller";

const groupsRouter = Router()

groupsRouter.post('/create', async (req: Request, res: Response) => {
    await groupsController.createGroup(req, res)
})

groupsRouter.post('/delete', async (req: Request, res: Response) => {
    await groupsController.deleteGroup(req, res);
})

groupsRouter.post('/clear', async (req: Request, res: Response) => {
    await groupsController.clearGroup(req, res);
})

groupsRouter.post('/edit', async (req: Request, res: Response) => {
    await groupsController.editGroupName(req, res);
})


export default groupsRouter