import { Request, Response, Router } from "express";
import userController from "./user.controller";

const userRouter = Router()

userRouter.post('/login', async (req: Request, res: Response) => {
    await userController.authUser(req, res)
})

userRouter.post('/registration', async (req: Request, res: Response) => {
    await userController.registerUser(req, res);
})


export default userRouter