import {useEffect, useState} from 'react'
import axios from 'axios'
import {IReview} from "../model/Review";

export function useReviews() {
    const [reviews, setReviews] = useState<IReview[]>([])

    const getReviews = () => {
        fetchReviews()
    }

    async function fetchReviews() {
        const response = await axios.get<IReview[]>('http://localhost:8080/reviews'
            , {
                auth: {
                    username: "user",
                    password: "user"
                }
            }
        )
        setReviews(response.data)
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    return {reviews, getReviews}
}