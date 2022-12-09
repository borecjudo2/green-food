import {Review} from "../components/Review";
import {useReviews} from "../hooks/reviews";
import React, {useState} from "react";
import axios from "axios";
import {IReview} from "../model/Review";

export function ReviewsPage() {
    const {reviews, getReviews} = useReviews()

    const [isReadyForOrder, setIsReadyForOrder] = useState(false)
    const [isShowAddReviewView, setIsShowAddReviewView] = useState(false)

    const [review, setReview] = useState('')

    const setReviewHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(event.target.value)
    }

    const getColorIfRequired = (value: string): string => {
        if (isReadyForOrder) {
            if (value.length === 0) {
                return "red"
            }
            return "lime";
        }
        return "lime";
    }

    const applyReview = () => {
        setIsReadyForOrder(true);
        if (review.length !== 0) {
            const userId: string = localStorage.getItem('userId') as string;
            const reviewDto: IReview = {
                id: "",
                userId: userId,
                review: review,
                reviewDate: ""
            }
            applyReviewRequest(reviewDto).then(() => getReviews())
            setIsReadyForOrder(false);
            setIsShowAddReviewView(false);
        }

    }

    async function applyReviewRequest(dtoForCreate: IReview) {
        await axios.post<IReview>('http://localhost:8080/reviews', dtoForCreate
            , {
            auth: {
                username: 'user',
                password: 'user'
            }
        }
        );
    }

    const deleteReview = (reviewId: string) => {
        deleteReviewRequest(reviewId).then(() => getReviews())
    }

    async function deleteReviewRequest(reviewId: string) {
        await axios.delete<any>('http://localhost:8080/reviews/' + reviewId);
    }

    return (
        <div className="p-20">
            {isShowAddReviewView ?
                <div className="grid place-items-center gap-4">
                    <button onClick={() => setIsShowAddReviewView(false)}
                            className="rounded-xl border p-2 text-white w-96
                            border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                        Back
                    </button>
                    <div>
                        <text>Review *</text>
                        <br/>
                        <textarea value={review}
                                  onChange={setReviewHandler}
                                  placeholder="Enter Review"
                                  className={"w-full h-10 w-96 rounded-xl px-3 mt-2 border-" + getColorIfRequired(review) + "-400 border"}/>
                    </div>
                    <button onClick={applyReview}
                            className="rounded-xl border p-2 text-white w-96
                            bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                        Save
                    </button>
                </div>
                :
                <>
                    <div className="flex justify-between">
                        <text className="font-bold text-5xl">Reviews</text>

                        <button onClick={() => setIsShowAddReviewView(true)}
                                className="rounded-xl border p-2 text-white mt-3
                            bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            Add my review
                        </button>
                    </div>

                    <div className="pt-4 grid grid-cols-2 gap-5">

                        {reviews.map(review => <Review review={review} key={review.id} deleteReview={deleteReview}/>)}
                    </div>
                    <div className="pt-20">
                        <text className="font-bold text-5xl">Analytics</text>
                        <div className="pt-4 grid grid-cols-2 gap-5">

                            {reviews.map(review => <Review review={review} key={review.id}
                                                           deleteReview={deleteReview}/>)}
                        </div>
                    </div>
                </>
            }


        </div>

    )
}