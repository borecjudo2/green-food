import React from 'react'
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();

    const sighIn = () => {
        navigate("/");
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
                        <text>Email</text>
                        <br/>
                        <input placeholder="Enter your email"
                               className="w-full h-10 border-gray-300 border-2 rounded-md px-3"/>
                        <br/>
                        <br/>
                        <text>Password</text>
                        <br/>
                        <input placeholder="Enter your password"
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