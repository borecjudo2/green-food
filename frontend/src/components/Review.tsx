import {IReview} from "../model/Review";
import {IUser} from "../model/User";
import axios from "axios";
import React, {useEffect, useState} from "react";

export interface ReviewProps {
    review: IReview
    deleteReview: (reviewId: string) => void
}

const emptyUser = {
    id: "",
    username: "",
    iconUrl: ""
}


export function Review({review, deleteReview}: ReviewProps) {
    const userId: string = localStorage.getItem('userId') as string;

    const [user, setUser] = useState(emptyUser)

    async function getUser() {
        try {
            const response = await axios.get<IUser>('http://localhost:8080/users/' + review.userId)
            setUser(response.data)
        } catch (e: unknown) {
            return emptyUser
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className="w-full rounded-xl p-3 border-lime-500 border">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1">
                    <div className="h-10">
                        <img src={user.iconUrl} className="rounded-full"/>
                    </div>

                </div>
                <div className="col-span-11 grid grid-rows-8 gap-4">
                    <div className="row-span-3">
                        <text className="font-bold">{user.username}</text>
                        <br/>
                        <text
                            className="font-light text-sm text-gray-400">{new Date(review.reviewDate).toDateString()}</text>
                    </div>
                    <div className="row-span-5">
                        <text className="font-light">{review.review}</text>
                    </div>
                    {userId === review.userId ?
                        <div className="place-self-end">
                            <button className="bg-red-200 hover:bg-red-400 p-2 rounded-xl"
                                    onClick={() => deleteReview(review.id)}>
                                <img src="delete.png"/>
                            </button>
                        </div>
                        :
                        <></>
                    }

                </div>
            </div>
        </div>
    )
}