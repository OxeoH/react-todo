import axios from "axios";
import { config } from "process";

const $host = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({ 
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config: any) => {//Type?
    if(localStorage.getItem('accessToken') !== ""){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
        return config
    }
    return {headers:{authorization: ""}}
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}