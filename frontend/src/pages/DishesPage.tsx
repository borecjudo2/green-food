import {Dish} from "../components/Dish";
import {Menu, Transition} from '@headlessui/react'
import {Fragment} from "react";
import {useDishes} from "../hooks/dishes";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface DishProps {
    setCount: (n: number) => void
}

export function DishesPage({setCount}: DishProps) {
    const {loading, error, dishes, addDish} = useDishes()

    return (
        <div className="m-20">
            <div className="grid place-content-end mb-10">
                <div className="grid grid-cols-2">
                    <div>
                        <text>All dishes</text>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button
                                    className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="rounded-xl"
                                        src="settings.png"
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Your Profile
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({active}) => (
                                            <a
                                                href="#"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                Sign out
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-20">
                {dishes.map(dish =>
                    <Dish dish={dish} setCount={setCount} key={dish.id}/>
                )}
            </div>
        </div>


    )
}