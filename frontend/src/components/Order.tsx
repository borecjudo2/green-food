import React from "react";
import {OrderDish} from "../model/OrderDish";

export interface OrderProps {
    isLogin: boolean
    order: OrderDish,
    onDelete: (dishId: string) => void,
    removeOrdersCount: () => void
}

export function Order({isLogin, order, onDelete, removeOrdersCount}: OrderProps) {

    const removeDishFromOrder = () => {
        onDelete(order.dish.id)
        removeOrdersCount()
    }

    return (
        <div className="grid grid-cols-2 gap-5 border-b py-3">
            <div className="col-span-1 place-self-center object-cover">
                <img src={order.dish.iconUrl}
                     className="rounded-xl"/>
            </div>
            <div className="col-span-1 grid grid-rows-3 p-3">
                <div className="place-self-center">
                    <text className="font-bold text-l">{order.dish.name} {order.dish.dishType}</text>
                </div>
                <div className="place-self-center">
                    <text className="font-bold text-sm">${order.dish.price}</text>
                    <text> x</text>
                    <text className="text-sm">{order.count}</text>
                </div>
                {isLogin ?
                    <div className="place-self-center">
                        <button className="bg-red-200 hover:bg-red-400 p-2 rounded-xl" onClick={removeDishFromOrder}>
                            <img src="delete.png"/>
                        </button>
                    </div>
                    :
                    <></>
                }

            </div>
        </div>
    )
}