import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";
import {Navigation} from "./components/Navigation";
import {DishesPage} from "./pages/DishesPage";
import {OrderPage} from "./pages/OrderPage";
import {ReviewsPage} from "./pages/ReviewsPage";

function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <Navigation  count={count}/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/dishes" element={<DishesPage setCount={setCount}/>}/>
                <Route path="/reviews" element={<ReviewsPage/>}/>
                <Route path="/orders" element={<OrderPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>

    );
}

export default App;
