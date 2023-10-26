import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Group } from "../Groups/groups.entity";
import { Todo } from "../Todo/todo.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @OneToMany(() => Group, (group: Group) => group.user)
  groups: Group[];
}
