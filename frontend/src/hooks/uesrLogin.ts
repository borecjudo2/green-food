import {useEffect, useState} from 'react'
import {IUser} from "../model/User";
import {UserCredentials} from "../model/UserCredentials";
import axios from "axios";
import {getUsername, getUserPassword} from "./userCredentialUtils";

export function useUserLogin() {
    const [isLogin, setIsLogin] = useState(false)

    const saveUserToLocalStore = (user: IUser, credentials: UserCredentials) => {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('credentials', JSON.stringify(credentials));

        setIsLogin(true)

        axios.defaults.auth = {
            username: getUsername(),
            password: getUserPassword()
        }
    }

    const removeUserFromLocalStore = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
        localStorage.removeItem('credentials');

        setIsLogin(false)
    }

    const checkIsLogin = () => {
        const userId: string | null = localStorage.getItem('userId');
        if (userId === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    }
    useEffect(() => {
        checkIsLogin()
    }, [])

    return {isLogin, saveUserToLocalStore, removeUserFromLocalStore}
}