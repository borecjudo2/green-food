export interface IUser {
    id: string,
    username: string,
    iconUrl: string
}

export const emptyUser: IUser = {
    id: "",
    username: "",
    iconUrl: ""
}