import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios, {AxiosResponse} from 'axios'
import {IUser} from "../model/User";
import {UserCredentials} from "../model/UserCredentials";
import {getUsername, getUserPassword} from "../hooks/userCredentialUtils";

interface LoginPageProps {
    saveUserToLocalStore: (user: IUser, credentials: UserCredentials) => void
}

export function LoginPage({saveUserToLocalStore}: LoginPageProps) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userCredentials: UserCredentials = {
        username: username,
        password: password
    }

    const setUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const setPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    async function applyLoginRequest(): Promise<AxiosResponse<IUser>> {
        axios.defaults.auth = {
            username: username,
            password: password
        }
        return await axios.post<IUser>('http://localhost:8080/login', userCredentials);
    }


    const sighIn = () => {
        applyLoginRequest()
            .then((response) => {
                saveUserToLocalStore(response.data, userCredentials)
                navigate("/");
            })
            .catch((exc) => {
                console.log(exc)
            })
    }

    return (
        <div className="grid grid-cols-2 w-full h-screen">
            <div className="place-self-center">
                <div className="bg-white place-self-stretch w-full h-[350px] grid grid-cols-1">
                    <div>
                        <text className="font-bold text-4xl">Welcome back</text>
                        <br/>
                        <br/>
                        <text className="text-gray-400">Welcome back! Please enter your details.</text>
                    </div>
                    <div className="">
                        <text>Username</text>
                        <br/>
                        <input value={username}
                               onChange={setUsernameHandler}
                               placeholder="Enter your Username"
                               className="w-full h-10 border-gray-300 border-2 rounded-md px-3"/>
                        <br/>
                        <br/>
                        <text>Password</text>
                        <br/>
                        <input value={password}
                               onChange={setPasswordHandler}
                               placeholder="Enter your password"
                               type="password"
                               className="w-full h-10 border-gray-300 border-2 rounded-md px-3"/>
                    </div>
                    <div>
                        <button className="w-full h-10 bg-lime-500 rounded-md hover:text-white"
                                onClick={sighIn}>
                            Sign in
                        </button>
                    </div>

                </div>
            </div>
            <div className="bg-lime-100 p-52 blur-2xl w-full h-screen">
                <img src="blob.svg"/>
            </div>
        </div>
    )
}