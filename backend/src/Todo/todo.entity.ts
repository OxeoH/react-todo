import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Group } from "../Groups/groups.entity"

@Entity()
export class Todo {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    completed: boolean

    @ManyToOne(() => Group, (group) => group.todos)
    group: Group
}