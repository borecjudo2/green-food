import {Dish} from "../components/Dish";
import {Listbox, Menu, Transition} from '@headlessui/react'
import React, {Fragment, useEffect, useState} from "react";
import {useDishes} from "../hooks/dishes";
import {DishType} from "../model/DishType";
import {IDish} from "../model/Dish";
import axios from "axios";
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {isUserAdmin} from "../hooks/userCredentialUtils";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface DishProps {

    isLogin: boolean
    setCount: () => void
}

export function DishesPage({setCount, isLogin}: DishProps) {
    const {dishesType, dishes, dishesByType, addDish} = useDishes()

    const [isReadyForOrder, setIsReadyForOrder] = useState(false)
    const [isShowCreateDishView, setIsShowCreateDishView] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    const [name, setName] = useState('')
    const [dishType, setDishType] = useState(DishType.SUSHI)
    const [iconUrl, setIconUrl] = useState('')
    const [price, setPrice] = useState('')

    const setNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const setIconUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIconUrl(event.target.value)
    }

    const setPriceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }
    const showCreateDishView = (value: boolean) => {
        setIsShowCreateDishView(value)
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

    const applyOrder = () => {
        setIsReadyForOrder(true);
        if (name.length !== 0 && dishType.length !== 0 &&
            iconUrl.length !== 0 && price.length !== 0) {

            const dish: IDish = {
                id: "",
                iconUrl: iconUrl,
                dishType: dishType,
                description: "",
                name: name,
                price: parseFloat(price)
            }
            applyDishRequest(dish).then(() => dishesByType(DishType.ALL))
            setIsReadyForOrder(false);
            setIsShowCreateDishView(false);
        }

    }

    async function applyDishRequest(dtoForCreate: IDish) {
        await axios.post<IDish>('http://localhost:8080/dishes', dtoForCreate);
    }

    useEffect(() => setIsAdmin(isUserAdmin()), [isLogin])

    return (
        <div className="m-20">
            {isShowCreateDishView ?
                <div className="grid place-items-center gap-4">
                    <button onClick={() => showCreateDishView(false)}
                            className="rounded-xl border p-2 text-white w-96
                            border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                        Back
                    </button>
                    <div>
                        <text>Name *</text>
                        <br/>
                        <input value={name}
                               onChange={setNameHandler}
                               placeholder="Enter Name"
                               className={"w-full h-10 w-96 rounded-xl px-3 mt-2 border-" + getColorIfRequired(name) + "-400 border"}/>
                    </div>
                    <Listbox value={dishType} onChange={setDishType}>
                        {({open}) => (
                            <div className="w-96">
                                <text>Dish type *</text>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="relative w-full h-10 cursor-default rounded-xl border border-lime-400 bg-white py-2 pl-3 pr-10 text-left shadow-sm 1 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{dishType}</span>
              </span>
                                        <span
                                            className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {Object.keys(DishType)
                                                .filter(type => type !== "ALL")
                                                .map((type) => (
                                                    <Listbox.Option
                                                        key={type}
                                                        className={({active}) =>
                                                            classNames(
                                                                active ? 'text-white bg-lime-400' : 'text-gray-900',
                                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                                            )
                                                        }
                                                        value={type}
                                                    >
                                                        {({selected, active}) => (
                                                            <>
                                                                <div className="flex items-center">
                                                                <span
                                                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                >
                            {type}
                          </span>
                                                                </div>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active ? 'text-white' : 'text-lime-400',
                                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                        )}
                                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </div>
                        )}
                    </Listbox>
                    <div>
                        <text>Icon URL *</text>
                        <br/>
                        <input value={iconUrl}
                               onChange={setIconUrlHandler}
                               placeholder="Enter Icon URL"
                               className={"w-full h-10 w-96 rounded-xl px-3 mt-2 border-" + getColorIfRequired(iconUrl) + "-400 border"}/>
                    </div>
                    <div>
                        <text>Price($) *</text>
                        <br/>
                        <input value={price}
                               type="number"
                               onChange={setPriceHandler}
                               placeholder="Enter Price"
                               className={"w-full h-10 w-96 rounded-xl px-3 mt-2 border-" + getColorIfRequired(price) + "-400 border"}/>
                    </div>
                    <button onClick={applyOrder}
                            className="rounded-xl border p-2 text-white w-96
                            bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                        Save
                    </button>
                </div>
                :
                <>
                    <div className="grid grid-cols-2 flex justify-between mb-10">
                        <div>
                            {isAdmin ?
                                <button onClick={() => showCreateDishView(true)}
                                        className="rounded-xl border p-2 text-white
                            bg-gradient-to-r from-lime-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                    Add new dish
                                </button>
                                :
                                <></>}
                        </div>
                        <div className="grid grid-cols-2 place-self-end">
                            <div>
                                <text>{dishesType}</text>
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
                                                        onClick={() => dishesByType(DishType.ALL)}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {DishType.ALL}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        onClick={() => dishesByType(DishType.PLATTERS)}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {DishType.PLATTERS}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        onClick={() => dishesByType(DishType.SUSHI)}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {DishType.SUSHI}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        onClick={() => dishesByType(DishType.ROLLS)}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {DishType.ROLLS}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <a
                                                        onClick={() => dishesByType(DishType.SOUP)}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        {DishType.SOUP}
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
                            <Dish dish={dish} setCount={setCount} key={dish.id} isLogin={isLogin}/>
                        )}
                    </div>
                </>
            }
        </div>


    )
}