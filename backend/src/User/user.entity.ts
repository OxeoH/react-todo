import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Group } from "../Groups/groups.entity"

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    login: string

    @Column()
    password: string

    @OneToMany(() => Group, (group: Group) => group.user)
    groups: Group[]
}