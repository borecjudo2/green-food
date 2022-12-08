import React from "react";

import {Order} from "../components/Order";
import {useOrders} from "../hooks/orders";

interface DishProps {
    removeOrdersCount: () => void
}

export function OrderPage({removeOrdersCount}: DishProps) {
    const {orders, getOrders, getDishSum, removeFromOrder} = useOrders()

    return (
        <>
            {orders.length === 0 ?
                <div className="grid">
                    <img className="place-self-center" src="https://www.ewshopping.com/img/EmptyCart.jpg"/>
                </div>
                :
                <div className="m-20 grid grid-cols-3 gap-5 flex items-start">
                    <div className="rounded-xl col-span-2 border-lime-400 border">
                        <div className="mx-6 my-6 p-3  bg-white flex justify-between rounded-xl border-lime-400 border">
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

                            <span className="font-bold">
                         <text>Michael Smith</text>
                    </span>
                        </div>

                        <div className="mx-6 my-3 p-3 bg-white flex justify-between rounded-xl border-lime-400 border">
                    <span className="grid grid-cols-2">
                        <div>
                            <img src="gps.png"/>
                        </div>
                       <div className="-ml-8">
                             <text>SHIPPING ADDRESS</text>
                        </div>
                    </span>
                        </div>

                        <div className="m-3 p-3 grid grid-cols-2 gap-5">
                            <div>
                                <text>First Name *</text>
                                <br/>
                                <input placeholder="Enter your First Name"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                            <div>
                                <text>Last Name *</text>
                                <br/>
                                <input placeholder="Enter your Last Name"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                        </div>
                        <div className="m-3 p-3 grid grid-cols-4 gap-5">
                            <div className="w-full h-full col-span-3">
                                <text>Address *</text>
                                <br/>
                                <input placeholder="Enter your Address"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                            <div>
                                <text>Apt, Suite *</text>
                                <br/>
                                <input placeholder="Enter your Apt, Suite"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                        </div>
                        <div className="m-3 p-3 grid grid-cols-3 gap-5">
                            <div>
                                <text>City *</text>
                                <br/>
                                <input placeholder="Enter your City"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                            <div>
                                <text>Country *</text>
                                <br/>
                                <input placeholder="Enter your Country"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                            <div>
                                <text>Postal Code *</text>
                                <br/>
                                <input placeholder="Enter your Postal Code"
                                       className="w-full h-10 rounded-xl px-3 mt-2 border-lime-400 border"/>
                            </div>
                        </div>
                        <div className="mx-3 mb-6 px-3 grid grid-cols-1 gap-5 text-white">
                            <div>
                                <button className="bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500
                         w-full h-10 rounded-xl px-3 mt-2 ">
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
                                           onDelete={removeFromOrder}/>)}
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
            }
        </>

    )
}