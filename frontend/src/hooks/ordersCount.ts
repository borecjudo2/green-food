import {useEffect, useState} from 'react'
import axios from 'axios'

export function useOrdersCount() {
    const [ordersCount, setOrdersCount] = useState<number>(0)

    const addOrdersCount = () => {
        setOrdersCount(prevState => prevState + 1)
    }

    const removeOrdersCount = () => {
        setOrdersCount(prevState => prevState - 1)
    }

    const clearOrderCount = () => {
        setOrdersCount(0)
    }

    async function getOrdersCount() {
        const userId = localStorage.getItem('userId');
        const response = await axios.get<number>('http://localhost:8080/users/' + userId + '/dishes/count')
        setOrdersCount(response.data)
    }

    useEffect(() => {
        getOrdersCount()
    }, [])

    return {ordersCount, addOrdersCount, removeOrdersCount, clearOrderCount}
}