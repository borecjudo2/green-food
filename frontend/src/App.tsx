import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Navigation} from "./components/Navigation";
import {AboutPage} from "./pages/AboutPage";
import {LoginPage} from "./pages/LoginPage";
import {MainPage} from "./pages/MainPage";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
            <Route path="/" element={ <MainPage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
        </Routes>
      </>

  );
}

export default App;
