import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import config from '../jwtConfig'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if(req.method === "OPTIONS") next()

    try{
        const token = req.headers.authorization?.split(' ')[1]
        if(!token) return res.status(403).json({message: `User is not authorized`})

        const verifiedTokenData = jwt.verify(token, config.secret)
        //req.user = verifiedTokenData
        next()
    }catch(e){
        console.log(e)
        res.status(403).json({message: `User is not authorized`})
    }
}