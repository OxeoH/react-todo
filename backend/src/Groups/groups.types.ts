import { User } from "../User/user.entity";

export type CreateGroupProps={
    user: User,
    groupName: string,
}

export type DeleteGroupProps={
    user: User,
    groupId: string,
}