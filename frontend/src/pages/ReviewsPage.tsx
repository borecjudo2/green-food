import {Review} from "../components/Review";

const reviews: Review[] = [
    {
        username: "Glenn Green",
        userIcon: "https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
        comment: "1st time to try the app & So satisfied. Within 10 mints they were outside the gate. Thank You so much 👍👍So efficient. Would def recommend to others"
    },
    {
        username: "Glenn Green",
        userIcon: "https://st2.depositphotos.com/2777531/6975/v/950/depositphotos_69756347-stock-illustration-laughing-cartoon-guy.jpg",
        comment: "1st time to try the app & So satisfied. Within 10 mints they were outside the gate. Thank You so much 👍👍So efficient. Would def recommend to others"
    },
    {
        username: "Glenn Green",
        userIcon: "https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg",
        comment: "1st time to try the app & So satisfied. Within 10 mints they were outside the gate. Thank You so much 👍👍So efficient. Would def recommend to others"
    },
]

export function ReviewsPage() {
    return (
        <div className="p-20">
            <text className="font-bold text-5xl">Reviews</text>
            <div className="pt-4 grid grid-cols-2 gap-5">

                {reviews.map(review => <Review review={review}/>)}
            </div>
            <div className="pt-20">
                <text className="font-bold text-5xl">Analytics</text>
                <div className="pt-4 grid grid-cols-2 gap-5">

                    {reviews.map(review => <Review review={review}/>)}
                </div>
            </div>

        </div>

    )
}