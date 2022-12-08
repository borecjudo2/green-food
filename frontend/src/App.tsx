import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";
import {Navigation} from "./components/Navigation";
import {DishesPage} from "./pages/DishesPage";
import {OrderPage} from "./pages/OrderPage";
import {ReviewsPage} from "./pages/ReviewsPage";
import {useOrdersCount} from "./hooks/ordersCount";

function App() {
    const {ordersCount, addOrdersCount, removeOrdersCount, clearOrderCount} = useOrdersCount()

    localStorage.setItem('userId', 'e03a1618-f42f-4579-b006-e45f02b201ba');
    localStorage.setItem('credentials', 'dXNlcjp1c2Vy');

    return (
        <>
            <Navigation count={ordersCount}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/dishes" element={<DishesPage setCount={addOrdersCount}/>}/>
                <Route path="/reviews" element={<ReviewsPage/>}/>
                <Route path="/orders" element={
                    <OrderPage removeOrdersCount={removeOrdersCount} clearOrdersCount={clearOrderCount}/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>

    );
}

export default App;
