import {IDish} from "../model/Dish";

export interface DishProps {
    dish: IDish
    setCount: (n: number) => void
}

export function Dish({dish, setCount}: DishProps) {
    const set = () => {
        setCount(1)
    }

    return (
        <div className="grid grid-rows-5 h-[300px] border-lime-500">
            <div className="row-span-4 rounded-full">
                <img className="object-cover h-full w-full rounded-xl" src={dish.iconUrl} alt={dish.name}/>
            </div>
            <div className="row-span-1 mt-4">
                <div className="flex justify-between mb-1">
                    <span>
                        <text className="text-xl">{dish.name}</text>
                    </span>
                    <span>
                        <text className="font-bold">{dish.price}$</text>
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>
                        <text className="font-light">Dish type: {dish.dishType}</text>
                    </span>
                    <span>
                        <button className="bg-lime-400 hover:bg-gray-200 h-8 w-8 rounded-md"
                                onClick={set}>
                            <img src="bag.svg" className="fill-white p-2 object-cover"/>
                        </button>
                    </span>
                </div>
            </div>

        </div>
    )
}