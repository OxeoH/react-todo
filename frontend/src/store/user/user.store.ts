import { makeAutoObservable } from "mobx";

export default class UserStore{
    _isAuth: boolean;
    private _user: {};
    constructor(){
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(value: boolean){
        this._isAuth = value
    }

    setUser(user: {}){
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}