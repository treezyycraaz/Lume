import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setIsAuth }) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsAuth(false);
        navigate("/login")
    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <p className="text-white text-3xl font-medium text-center">Lume в разработке !</p>
            <a href="https://t.me/lumeSocial" className="text-white text-3xl font-medium text-center mt-10 hover:text-yellow-400 transition-colors duration-200">Следите за обновлениями в нашем телеграмм канале</a>
            <button type="button" className=" mt-10 w-72 h-12 bg-[#454545] hover:bg-[#606060] text-white font-medium rounded-lg transition duration-200 active:scale-[0.99] ease-out mb-6" onClick={handleLogout}>Выйти из аккаунта</button>
        </div>
    );

}

export default Home;