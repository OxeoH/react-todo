import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

import config from '../jwtConfig'
import { userProps } from '../user.types'

export const verifyTokenMiddleware = (token: string) => {
    try{
        if(!token) return null

        const verifiedTokenData = jwt.verify(token, config.secret)
        console.log(verifiedTokenData);
        
        if(typeof(verifiedTokenData) === 'string') return null
        console.log("JWT_DECODE: ", jwt_decode(token));
        
        
        return jwt_decode<userProps>(token)
    }catch(e){
        console.log(e)
        return null
    }
}