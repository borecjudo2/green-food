import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {IDish} from "../model/Dish";

export function useDishes() {
    const [dishes, setDishes] = useState<IDish[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addDish(dish: IDish) {
        setDishes(prev => [...prev, dish])
    }

    async function fetchDishes() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IDish[]>('http://localhost:8080/dishes')
            setDishes(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchDishes()
    }, [])

    return { loading, error, dishes, addDish }
}