import {UserType} from "./UserType";

export interface IUser {
    id: string,
    username: string,
    iconUrl: string,
    userType: UserType
}

export const emptyUser: IUser = {
    id: "",
    username: "",
    iconUrl: "",
    userType: UserType.USER
}