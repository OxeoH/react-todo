import "reflect-metadata"
import { DataSource } from "typeorm"
import { Group } from "./src/Groups/groups.entity"
import { Todo } from "./src/Todo/todo.entity"
import { User } from "./src/User/user.entity"


const AppDataSource = new DataSource({
    type: "postgres",//process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD?.toString(),
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [User, Group, Todo],
})


export default AppDataSource