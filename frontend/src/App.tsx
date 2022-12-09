import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";
import {Navigation} from "./components/Navigation";
import {DishesPage} from "./pages/DishesPage";
import {OrderPage} from "./pages/OrderPage";
import {ReviewsPage} from "./pages/ReviewsPage";
import {useOrdersCount} from "./hooks/ordersCount";
import {useUserLogin} from "./hooks/uesrLogin";

function App() {
    const {ordersCount, addOrdersCount, removeOrdersCount, clearOrderCount, updateOrderCount} = useOrdersCount()
    const {isLogin, saveUserToLocalStore, removeUserFromLocalStore} = useUserLogin()

    return (
        <>
            <Navigation count={ordersCount}
                        isLogin={isLogin}
                        removeUserToLocalStore={removeUserFromLocalStore}
                        updateOrderCount={updateOrderCount}/>

            <Routes>
                <Route path="/" element={<MainPage isLogin={isLogin}/>}/>
                <Route path="/dishes" element={<DishesPage setCount={addOrdersCount} isLogin={isLogin}/>}/>
                <Route path="/reviews" element={<ReviewsPage isLogin={isLogin}/>}/>
                <Route path="/orders" element={
                    <OrderPage removeOrdersCount={removeOrdersCount} clearOrdersCount={clearOrderCount} isLogin={isLogin}/>}/>
                <Route path="/login" element={<LoginPage saveUserToLocalStore={saveUserToLocalStore}/>}/>
            </Routes>
        </>

    );
}

export default App;
