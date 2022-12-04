import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export function Navigation() {
    const location = useLocation();
    if (location.pathname !== "/login") {
        return (
            <nav className="h-[120px] flex justify-between px-20 bg-white items-center text-white">
            <span className="font-bold">
                <Link to="/">
                    <img src="nori.png" alt="sad" className="inline pb-3 pr-4"/>
                    <text className="text-lime-400 text-3xl">Green</text>
                    <text className="text-black text-3xl">Food</text>
                </Link>
            </span>

                <span>
                <Link to="/dishes" className="text-black text-xl mr-20 hover:text-lime-500">
                    <img src="chinese-food.png" alt="sad" className="inline pb-2 pr-2 object-cover h-9"/>
                    <text className="inline">Dishes</text>
                </Link>
                <Link to="/reviews" className="text-black text-xl mr-20 hover:text-lime-500">
                    <img src="favourite.png" alt="sad" className="inline pb-2 pr-2"/>
                    <text className="inline">Reviews</text>
                </Link>
                  <Link to="/orders" className="text-black text-xl mr-20 hover:text-lime-500 border-2 border-lime-500
                  rounded-3xl px-4 py-1">
                     <img src="shopping-bag.png" alt="sad" className="object-cover inline pb-2 pr-2 "/>
                     <text className="inline">Order</text>

                </Link>
                <Link to="/login" className="text-white font-light text-xl bg-black border-8 border-black rounded-3xl
                hover:text-lime-500">
                    <text className="p-4">
                        Order now
                    </text>
                </Link>
            </span>
            </nav>
        )
    }

    return (
        <></>
    )
}