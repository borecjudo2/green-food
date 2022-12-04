import React from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";
import {Navigation} from "./components/Navigation";
import {DishesPage} from "./pages/DishesPage";
import {OrderPage} from "./pages/OrderPage";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/dishes" element={<DishesPage/>}/>
                <Route path="/orders" element={<OrderPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>

    );
}

export default App;
