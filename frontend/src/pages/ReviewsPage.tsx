import {Review} from "../components/Review";
import {useReviews} from "../hooks/reviews";

export function ReviewsPage() {
    const {loading, error, reviews, setReviews} = useReviews()

    return (
        <div className="p-20">
            <text className="font-bold text-5xl">Reviews</text>
            <div className="pt-4 grid grid-cols-2 gap-5">

                {reviews.map(review => <Review review={review} key={review.id}/>)}
            </div>
            <div className="pt-20">
                <text className="font-bold text-5xl">Analytics</text>
                <div className="pt-4 grid grid-cols-2 gap-5">

                    {reviews.map(review => <Review review={review} key={review.id}/>)}
                </div>
            </div>

        </div>

    )
}