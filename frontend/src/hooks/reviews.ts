import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {IReview} from "../model/Review";

export function useReviews() {
    const [reviews, setReviews] = useState<IReview[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addReview(review: IReview) {
        setReviews(prev => [...prev, review])
    }

    async function fetchReviews() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IReview[]>('http://localhost:8080/reviews')
            setReviews(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    return {loading, error, reviews, setReviews}
}