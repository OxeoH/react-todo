import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    //user
}