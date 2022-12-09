import {UserCredentials} from "../model/UserCredentials";
import {IUser} from "../model/User";
import {UserType} from "../model/UserType";

export function getUserCredentials(): UserCredentials {
    const credentialsString: string = localStorage.getItem("credentials") as string;
    return JSON.parse(credentialsString) as UserCredentials
}

export function getUsername(): string {
    const credentialsString: string = localStorage.getItem("credentials") as string;
    const credentials: UserCredentials = JSON.parse(credentialsString) as UserCredentials;
    return credentials.username
}

export function getUserPassword(): string {
    const credentialsString: string = localStorage.getItem("credentials") as string;
    const credentials: UserCredentials = JSON.parse(credentialsString) as UserCredentials;
    return credentials.password
}

export function isUserAdmin(): boolean {
    console.log("isUserAdmin")
    const userString: string | null = localStorage.getItem("user")
    console.log(userString)
    if (userString === null) {
        console.log("userString")
        return false;
    }
    const user: IUser = JSON.parse(userString) as IUser;
    console.log(user)
    return user.userType === UserType.ADMIN
}
