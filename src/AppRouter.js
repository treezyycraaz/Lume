import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRouter = ({isAuth, setIsAuth}) => {

    return  (
            <Routes>
                {/* мы проверяем наличие токена в localStorage, если пользователь авторизован (токен есть), то он сможет попасть на /, иначе редирект на /login и наоборот , если он уже вошёл, то доступа к /login и /register не будет*/}
                <Route path="/" element={isAuth ? <Home setIsAuth={setIsAuth} /> : <Navigate to="/login" />}></Route>
                <Route path="/login" element={!isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/" />}></Route>
                <Route path="/register" element={!isAuth ? <Register /> : <Navigate to="/" />}></Route>
            </Routes>
    );


}

export default AppRouter;