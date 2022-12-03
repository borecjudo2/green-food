import React from 'react'

export function LoginPage() {
    return (
        <div className="grid grid-cols-2 w-full h-screen">
            <div className="py-28 px-52">
                <div className="bg-white place-self-center place-self-stretch w-full h-full grid grid-cols-1">
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
                               className="w-full h-10 border-gray-300 border-2 rounded-md"/>
                        <br/>
                        <br/>
                        <text>Password</text>
                        <br/>
                        <input placeholder="Enter your password"
                               className="w-full h-10 border-gray-300 border-2 rounded-md"/>
                    </div>
                    <div>
                        <button className="w-full h-10 bg-lime-500 rounded-md">Sign in</button>
                    </div>

                </div>
            </div>
            <div className="bg-lime-100 p-52 blur-2xl">
                <img src="blob.svg"/>
            </div>
        </div>
    )
}