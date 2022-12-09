import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

interface NavigationProps {
    isLogin: boolean
    removeUserToLocalStore: () => void
    updateOrderCount: () => void
    count: number
}

export function Navigation({count, updateOrderCount, isLogin, removeUserToLocalStore}: NavigationProps) {
    const location = useLocation();

    useEffect(() => updateOrderCount(), [isLogin])

    if (location.pathname !== "/login") {
        return (
            <header
                className="bg-opacity-90 sticky top-0 h-[120px] flex justify-between px-20 bg-white items-center text-white">
                <div className="font-bold">
                    <Link to="/">
                        <img src="nori.png" alt="sad" className="inline pb-3 pr-4"/>
                        <text className="text-lime-400 text-3xl">Green</text>
                        <text className="text-black text-3xl">Food</text>
                    </Link>
                </div>
                <div className="flex justify-between">
                    <div>
                        <Link to="/dishes" className="text-black text-xl mr-20 hover:text-lime-500">
                            <img src="chinese-food.png" alt="sad" className="inline pb-2 pr-2 object-cover h-9"/>
                            <text className="inline">Dishes</text>
                        </Link>
                    </div>
                    <div>
                        <Link to="/reviews" className="text-black text-xl mr-20 hover:text-lime-500">
                            <img src="favourite.png" alt="sad" className="inline pb-2 pr-2"/>
                            <text className="inline">Reviews</text>
                        </Link>
                    </div>
                    {isLogin ?
                        <>
                            <div>
                                <Link to="/orders" className="text-black text-xl mr-20 hover:text-lime-500 ">
                                    <img src="shopping-bag.png" alt="sad" className="object-cover inline pb-2 pr-2 "/>
                                    <text className="inline">Order {count === 0 ?
                                        "" :
                                        <>
                                            <text className="rounded-full text-red-600">
                                                {count}
                                            </text>
                                        </>
                                    }</text>
                                </Link>
                            </div>
                            <div>
                                <Link to="/"
                                      onClick={removeUserToLocalStore}
                                      className="text-white font-light text-xl bg-black border-8 border-black rounded-3xl hover:text-lime-500">
                                    <text className="p-4">
                                        Log out
                                    </text>
                                </Link>
                            </div>
                        </>
                        :
                        <div>
                            <Link to="/login" className="text-white font-light text-xl bg-black border-8 border-black rounded-3xl
                hover:text-lime-500">
                                <text className="p-4">
                                    Order now
                                </text>
                            </Link>
                        </div>
                    }
                </div>
            </header>
        )
    }

    return (
        <></>
    )
}