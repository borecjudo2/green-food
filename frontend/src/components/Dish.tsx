import {IDish} from "../model/Dish";
import {IOrder} from "../model/Order";
import axios from "axios";
import {Rating} from "@mui/material";
import React, {SyntheticEvent, useState} from "react";

export interface DishProps {
    isLogin: boolean
    dish: IDish
    setCount: () => void
}

export function Dish({isLogin, dish, setCount}: DishProps) {

    const addDishToOrder = () => {
        addDishToOrderRequest().then(function () {
            setCount()
        })
    }

    async function addDishToOrderRequest() {
        const userId = localStorage.getItem('userId');
        await axios.post<IOrder>('http://localhost:8080/users/' + userId + '/dishes/' + dish.id)
    }

    const [dishRate, setDishRate] = useState(dish.rate)
    const setRateHandler = (event: SyntheticEvent, newValue: number | null) => {
        if (newValue !== null) {
            setDishRate(newValue)
            updateDishRate(dish, newValue).then()
        }
        setDishRate(dish.rate)
    }

    async function updateDishRate(dish: IDish, newRate: number) {
        dish.rate = newRate
        await axios.put<IDish>('http://localhost:8080/dishes/' + dish.id, dish)
    }

    return (
        <div className="grid grid-rows-5 h-[300px] border-lime-500">
            <div className="row-span-4 rounded-full">
                <img className="object-cover h-full w-full rounded-xl" src={dish.iconUrl} alt={dish.name}/>
            </div>
            <div className="row-span-1 mt-4">
                <div className="flex justify-between mb-1">
                    <span>
                        <text className="text-xl">{dish.name}</text>
                    </span>
                    <span>
                        <text className="font-bold">{dish.price}$</text>
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>
                        <Rating
                            name="simple-controlled"
                            value={dishRate}
                            onChange={setRateHandler}
                        />
                    </span>
                    <span>
                        {isLogin ?
                            <button className="bg-lime-400 hover:bg-gray-200 h-8 w-8 rounded-md"
                                    onClick={addDishToOrder}>
                                <img src="bag.svg" className="fill-white p-2 object-cover"/>
                            </button>
                            :
                            <div/>
                        }
                    </span>
                </div>
            </div>

        </div>
    )
}