
export interface Review {
    username: string,
    userIcon: string,
    comment: string
}

export interface ReviewProps {
    review: Review
}

export function Review({review}: ReviewProps) {
    return (
        <div className="w-full rounded-xl p-3 border-lime-500 border">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1">
                    <div className="h-10">
                        <img src={review.userIcon} className="rounded-full"/>
                    </div>

                </div>
                <div className="col-span-11 grid grid-rows-2">
                    <div>
                        <text className="font-bold">{review.username}</text>
                    </div>
                    <div>
                        <text className="font-light">{review.comment}</text>
                    </div>
                </div>
            </div>
        </div>
    )
}