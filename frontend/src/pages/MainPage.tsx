import {Link} from "react-router-dom";
import React from "react";

export function MainPage() {
    return (
        <>
            <div className="bg-lime-300 h-[28rem] mx-20 mt-10 rounded-3xl grid grid-cols-2">
                <div className="h-[28rem] object-contain">
                    <div className="text-black font-bold text-6xl pt-20 px-10">
                        <text>Something hot.</text>
                        <br/>
                        <text>Something tasty.</text>

                    </div>
                    <div className="text-black text-2xl pt-7 px-10">
                        <text>
                            Order your foods at any time and we'll safely delivery them straight to your home and
                            <strong> MORE</strong>
                        </text>

                    </div>
                    <div className="text-black text-2xl pt-7 px-10">
                        <Link to={"/login"}
                              className="text-white font-light text-xl bg-black border-8 border-black rounded-3xl
                hover:text-lime-500">
                            <text className="p-4">
                                Order now
                            </text>
                        </Link>
                    </div>

                </div>
                <div className="border-black h-[28rem] object-cover">
                    <img
                        src="https://www.grab.com/ph/wp-content/uploads/sites/12/2018/05/GrabFood-EX-Desktop-HeaderImageV1.jpg"
                        className="object-cover h-full w-full rounded-r-3xl"/>
                </div>
            </div>
            <div className="bg-black rounded-t-3xl bottom-0 h-max mx-20 mt-20 grid grid-rows-3 text-white p-10">
                <div className="grid grid-cols-6 border-b-2">
                    <div className="col-span-5"/>
                    <div className="col-span-1">
                        <text>Get... to the point.</text>
                        <br/>
                        <text>What service we provide</text>
                    </div>
                </div>
                <div className="pt-4 font-bold text-5xl">Good food, Good mood.</div>
                <div className="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue venenatis leo nisi nec feugiat in amet vitae.
                </div>

            </div>
        </>
    )
}