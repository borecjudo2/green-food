import {useEffect, useState} from 'react'
import axios from 'axios'

export function useOrdersCount() {
    const [ordersCount, setOrdersCount] = useState<number>(0)

    const userId = localStorage.getItem('userId');
    const credentials = localStorage.getItem('credentials')
    const basicAuth = 'Basic ' + credentials;

    function updateOrderCount() {
        getOrdersCount()
    }
    async function getOrdersCount() {
        try {
            const response = await axios.get<number>('http://localhost:8080/users/' + userId + '/dishes/count'
            //     , {
            //     // Axios looks for the `auth` option, and, if it is set, formats a
            //     // basic auth header for you automatically.
            //     auth: {
            //         username: 'user',
            //         password: 'user'
            //     }
            // }
            )
            setOrdersCount(response.data)
        } catch (e: unknown) {
            setOrdersCount(0)
        }
    }

    useEffect(() => {
        getOrdersCount()
    }, [])

    return {ordersCount, updateOrderCount}
}