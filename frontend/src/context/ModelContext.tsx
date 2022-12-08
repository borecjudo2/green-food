import React, {createContext, useState} from 'react'

interface ModelContext {
    isModelSuccessOrder: boolean
    openModelSuccessOrder: () => void
    closeModelSuccessOrder: () => void
}

export const ModelContext = createContext<ModelContext>({
    isModelSuccessOrder: false,
    openModelSuccessOrder: () => {
    },
    closeModelSuccessOrder: () => {
    }
})

export const ModelState = ({children}: { children: React.ReactNode }) => {
    const [isModelSuccessOrder, setIsModelSuccessOrder] = useState(false)

    const openModelSuccessOrder = () => setIsModelSuccessOrder(true)

    const closeModelSuccessOrder = () => setIsModelSuccessOrder(false)

    return (
        <ModelContext.Provider value={{isModelSuccessOrder, openModelSuccessOrder, closeModelSuccessOrder}}>
            {children}
        </ModelContext.Provider>
    )
}