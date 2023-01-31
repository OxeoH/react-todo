import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Todo } from "../Todo/todo.entity"
import { User } from "../User/user.entity"

@Entity()
export class Group {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => Todo, (todo) => todo.group)
    todos: Todo[]

    @ManyToOne(() => User, (user) => user.groups)
    user: User
} 