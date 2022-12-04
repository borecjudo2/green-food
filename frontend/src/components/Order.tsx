import React from "react";
import {DishProps} from "./Dish";

export function Order({dish}: DishProps) {
    return (
        <div className="grid grid-cols-2 gap-5 border-b py-3">
            <div className="col-span-1">
                <img src={dish.iconUrl}
                     className="rounded-xl"/>
            </div>
            <div className="col-span-1 grid grid-rows-3 p-3">
                <div className="place-self-center">
                    <text className="font-bold text-xl">{dish.name} {dish.type}</text>
                </div>
                <div className="place-self-center">
                    <text className="font-bold text-l">${dish.price}</text>
                    <text> x </text>
                    <text className="text-l">01</text>
                </div>
                <div className="place-self-center">
                    <button className="bg-red-200 hover:bg-red-400 p-2 rounded-xl">
                        <img src="delete.png"/>
                    </button>
                </div>
            </div>
        </div>
    )
}