import {useEffect, useState} from 'react'
import axios from 'axios'
import {IOrder} from "../model/Order";
import {IDish} from "../model/Dish";
import {OrderDish} from "../model/OrderDish";

export function useOrders() {
    const [orders, setOrders] = useState<OrderDish[]>([])

    const clearOrders = () => {
        setOrders([])
    }

    const removeFromOrder = (dishId: string) => {
        deleteDishFromOrder(dishId)

        const newOrders = orders.filter(order => {
            if (order.dish.id === dishId) {
                if (order.count === 1) {
                    return false;
                } else {
                    --order.count;
                    return true;
                }
            }
            return true;
        });

        setOrders(newOrders)
    }

    const userId = localStorage.getItem('userId');

    function getOrders() {
        axios.get<IOrder[]>('http://localhost:8080/users/' + userId + '/dishes')
            .then(function (response) {
                response.data.forEach(order => {
                    getDish(order.dishId)
                        .then(function (response) {
                                const dish: IDish = response.data;
                                const dishOrder: OrderDish = {
                                    count: order.count,
                                    dish: dish
                                }
                                setOrders(prevState => [...prevState, dishOrder])
                            }
                        )

                })
            })
    }

    async function getDish(dishId: string) {
        return await axios.get<IDish>('http://localhost:8080/dishes/' + dishId);
    }

    function deleteDishFromOrder(dishId: string) {
        axios.delete<any>('http://localhost:8080/users/' + userId + '/dishes/' + dishId).then()
    }

    function getDishSum(): number {
        return orders
            .map(order => order.count * order.dish.price)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 10);
    }

    useEffect(() => {
        getOrders()
    }, [])

    return {orders, getOrders, getDishSum, removeFromOrder, clearOrders}
}