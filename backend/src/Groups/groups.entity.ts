import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm"
import { Todo } from "../Todo/todo.entity"
import { User } from "../User/user.entity"

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Todo, (todo) => todo.group)
    items: Todo[]

    @ManyToOne(() => User, (user) => user.groups)
    user: User
} 