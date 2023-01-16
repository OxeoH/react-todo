import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Group } from "../Groups/groups.entity"

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    completed: boolean

    @ManyToOne(() => Group, (group) => group.items)
    group: Group
}