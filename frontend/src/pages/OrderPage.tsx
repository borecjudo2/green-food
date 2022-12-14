import React, {useContext, useEffect, useState} from "react";

import {Order} from "../components/Order";
import {useOrders} from "../hooks/orders";
import {CreateOrderDto} from "../model/CreateOrderDto";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {ModelContext} from "../context/ModelContext";
import {emptyUser, IUser} from "../model/User";


interface DishProps {
    isLogin: boolean
    removeOrdersCount: () => void
    clearOrdersCount: () => void
}

export function OrderPage({isLogin, removeOrdersCount, clearOrdersCount}: DishProps) {
    const navigate = useNavigate();
    const userId: string = localStorage.getItem('userId') as string;
    const [user, setUser] = useState(emptyUser)

    const {orders, getDishSum, removeFromOrder, clearOrders} = useOrders()
    const {isModelSuccessOrder, openModelSuccessOrder, closeModelSuccessOrder} = useContext(ModelContext)

    const [address, setAddress] = useState('')
    const [apt, setApt] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [code, setCode] = useState('')

    const [isReadyForOrder, setIsReadyForOrder] = useState(false)

    const setAddressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    const setAptHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApt(event.target.value)
    }

    const setCityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value)
    }

    const setCountryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    const setCodeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    const applyOrder = () => {
        setIsReadyForOrder(true);
        if (address.length !== 0 && apt.length !== 0 &&
            city.length !== 0 && country.length !== 0 && code.length !== 0) {
            const order: CreateOrderDto = {
                userId: userId,
                address: address + apt + city + country + code,
            }
            applyOrderRequest(order)
            refreshPage()
        }

    }

    async function applyOrderRequest(dtoForCreate: CreateOrderDto) {
        await axios.post<CreateOrderDto>('http://localhost:8080/orders', dtoForCreate);
    }

    const refreshPage = () => {
        setIsReadyForOrder(false);
        clearOrdersCount()
        clearOrders()
        openModelSuccessOrder()
        setTimeout(function () {
            closeModelSuccessOrder()
            navigate("/")
        }, 3000);
    }

    async function getUserRequest() {
        const response = await axios.get<IUser>('http://localhost:8080/users/' + userId);
        setUser(response.data)
    }

    const getColorIfRequired = (value: string): string => {
        if (isReadyForOrder) {
            if (value.length === 0) {
                return "red"
            }
            return "lime";
        }
        return "lime";
    }

    useEffect(() => {
        getUserRequest()
    }, [])

    return (
        <>
            {!isModelSuccessOrder ?
                orders.length === 0 ?
                    <div className="grid">
                        <img className="place-self-center" src="https://www.ewshopping.com/img/EmptyCart.jpg"/>
                    </div>
                    :
                    <div className="m-20 grid grid-cols-3 gap-5 flex items-start">
                        <div className="rounded-xl col-span-2 border-lime-400 border">
                            <div
                                className="mx-6 my-6 p-3  bg-white flex justify-between rounded-xl border-lime-400 border">
                    <span className="grid grid-cols-3">
                        <div>
                            <img src="user-interface.png"/>
                        </div>
                       <div className="ml-4">
                             <text>LOGIN</text>
                        </div>
                        <div className="ml-4">
                             <img src="tick.png"/>
                        </div>

                    </span>
                                <span className="font-bold text-xl">
                         <text>{user.username.toUpperCase()}</text>
                    </span>
                            </div>

                            <div
                                className="mx-6 my-3 p-3 bg-white flex justify-between rounded-xl border-lime-400 border">
                    <span className="grid grid-cols-2">
                        <div>
                            <img src="gps.png"/>
                        </div>
                       <div className="-ml-8">
                             <text>SHIPPING ADDRESS</text>
                        </div>
                    </span>
                            </div>
                            <div className="m-3 p-3 grid grid-cols-4 gap-5">
                                <div className="w-full h-full col-span-3">
                                    <text>Address *</text>
                                    <br/>
                                    <input value={address}
                                           onChange={setAddressHandler}
                                           placeholder="Enter your Address"
                                           className={"w-full h-10 rounded-xl px-3 mt-2 border-" + getColorIfRequired(address) + "-400 border"}/>
                                </div>
                                <div>
                                    <text>Apt, Suite *</text>
                                    <br/>
                                    <input value={apt}
                                           onChange={setAptHandler}
                                           placeholder="Enter your Apt, Suite"
                                           className={"w-full h-10 rounded-xl px-3 mt-2 border-" + getColorIfRequired(apt) + "-400 border"}/>
                                </div>
                            </div>
                            <div className="m-3 p-3 grid grid-cols-3 gap-5">
                                <div>
                                    <text>City *</text>
                                    <br/>
                                    <input value={city}
                                           onChange={setCityHandler}
                                           placeholder="Enter your City"
                                           className={"w-full h-10 rounded-xl px-3 mt-2 border-" + getColorIfRequired(city) + "-400 border"}/>
                                </div>
                                <div>
                                    <text>Country *</text>
                                    <br/>
                                    <input value={country}
                                           onChange={setCountryHandler}
                                           placeholder="Enter your Country"
                                           className={"w-full h-10 rounded-xl px-3 mt-2 border-" + getColorIfRequired(country) + "-400 border"}/>
                                </div>
                                <div>
                                    <text>Postal Code *</text>
                                    <br/>
                                    <input value={code}
                                           onChange={setCodeHandler}
                                           placeholder="Enter your Postal Code"
                                           className={"w-full h-10 rounded-xl px-3 mt-2 border-" + getColorIfRequired(code) + "-400 border"}/>
                                </div>
                            </div>
                            <div className="mx-3 mb-6 px-3 grid grid-cols-1 gap-5 text-white">
                                <div>
                                    <button className="bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                         w-full h-10 rounded-xl px-3 mt-2 "
                                            onClick={applyOrder}>
                                        Save And Deliver Here
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl col-span-1 p-6 border-lime-400 border">
                            <div className="bg-white w-full h-full">
                                <div className="py-3 animate-bounce">
                                    <text className="text-xl">Your Order</text>
                                </div>
                                <div className="border-t">
                                    {orders.map(order =>
                                        <Order order={order}
                                               key={order.dish.id}
                                               removeOrdersCount={removeOrdersCount}
                                               onDelete={removeFromOrder}
                                               isLogin={isLogin}/>)}
                                </div>
                                <div className="border-b py-3">
                                    <div className="flex justify-between mb-3">
                            <span>
                                <text className="font-light">Delivery</text>
                            </span>
                                        <span>
                                <text className="font-bold">$20</text>
                            </span>
                                    </div>
                                    <div className="flex justify-between">
                            <span>
                                <text className="font-light">Discount</text>
                            </span>
                                        <span>
                                <text className="font-bold">-$10</text>
                            </span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between py-6">
                            <span>
                                <text className="font-bold text-3xl">Total</text>
                            </span>
                                        <span>
                                <text className="font-bold text-3xl">${getDishSum()}</text>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                :
                <div className="grid">
                    <div className="grid place-items-center mt-10 ml-20">
                        <img className="animate-bounce mt-32"
                             src="shopping-bag-big.png"/>
                    </div>
                </div>
            }
        </>

    )
}