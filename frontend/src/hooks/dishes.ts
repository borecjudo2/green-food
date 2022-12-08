import {useEffect, useState} from 'react'
import axios from 'axios'
import {IDish} from "../model/Dish";
import {DishType} from "../model/DishType";

export function useDishes() {
    const [dishes, setDishes] = useState<IDish[]>([])
    const  [dishesType, setDishesType] = useState(DishType.ALL)


    function addDish(dish: IDish) {
        setDishes(prev => [...prev, dish])
    }

    const dishesByType = (dishType: DishType) => {
        if (dishType === DishType.ALL) {
            getDishes()
        } else {
            getDishesByType(dishType)
        }
        setDishesType(dishType)
    }

    async function getDishes() {
        const response = await axios.get<IDish[]>('http://localhost:8080/dishes')
        setDishes(response.data)
    }

    async function getDishesByType(dishType: string) {
        const response = await axios.get<IDish[]>('http://localhost:8080/dishes', {
            params: {
                dishType: dishType
            }
        })
        setDishes(response.data)
    }

    useEffect(() => {
        getDishes()
    }, [])

    return {dishesType, dishes, dishesByType}
}