import React, { useEffect, useState } from "react";
import api from "../axios"
import { Link, useNavigate } from "react-router-dom";


function Login({switchForm, setIsAuth}) {
  const [loaded, setLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // отмена стандартной перезагрузки формы

    try {
      const payload = {
        password: formData.password
      }

      if(isLogin) {
        payload.identifier = formData.email
      } else {
        payload.identifier = formData.username
      }

      const response = await api.post("auth/login", payload); // отправка post запроса на api

      const token = response.data.token; // получаем токен из ответа
      localStorage.setItem("token", token); // сохраняем токен в localStorage

      setIsAuth(true);

      setIsAuth(true);

      navigate("/")

    } catch (err) {
      console.error("Ошибка входа: ", err);
      alert("Ошибка: " + (err.response?.data?.message || "Проверьте данные"));
    }

  };

  useEffect(() => {
    // анимация загрузки особенностей
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex w-full h-screen">
      {/* форма */}
      <div className="w-1/2 flex justify-start items-center pl-20">
        <div className="w-3/4 max-w-md">
          <form className="flex flex-col justify-center items-start" onSubmit={handleLogin}>
            <h1 className="text-white text-3xl font-medium mb-8 tracking-tight flex">
              Войти в&nbsp;
              <p className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
                Lume
              </p>
            </h1>

          {
            isLogin
            ?
            <div className="flex">
            <label className="text-[#AAAAAA] text-sm">Email</label>
            <div className="border-s ml-3 pl-3 border-[#363636]" />
            <button type="button" className="text-[#AAAAAA] text-sm hover:text-yellow-400 transition-colors duration-200" onClick={() => {setIsLogin(false)}}>Войти по username</button>
            </div>
            :
            <div className="flex">
            <label className="text-[#AAAAAA] text-sm">Username</label>
            <div className="border-s ml-3 pl-3 border-[#363636]" />
            <button type="button" className="text-[#AAAAAA] text-sm hover:text-yellow-400 transition-colors duration-200" onClick={() => {setIsLogin(true)}}>Войти по Email</button>
            </div>
          }

          {isLogin
            ?
            <input
              className="mb-8 mt-2 w-full h-12 px-5 rounded-lg border border-[#404040] bg-[#232323] focus:outline-none focus:border-[#FFFFFF] focus:ring-1 focus:ring-[#555555] text-white placeholder-[#7A7A7A] transition-colors duration-200"
              placeholder="username@user.com"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            :
            <input
              className="mb-8 mt-2 w-full h-12 px-5 rounded-lg border border-[#404040] bg-[#232323] focus:outline-none focus:border-[#FFFFFF] focus:ring-1 focus:ring-[#555555] text-white placeholder-[#7A7A7A] transition-colors duration-200"
              placeholder="@username"
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          }

            <label className="text-[#AAAAAA] text-sm">Password</label>
            <input
              className="mt-2 w-full h-12 px-5 rounded-lg border border-[#404040] bg-[#232323] focus:outline-none focus:border-[#FFFFFF] focus:ring-1 focus:ring-[#555555] text-white placeholder-[#7A7A7A] transition-colors duration-200"
              placeholder="******"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />

            <button className="mt-10 w-full h-12 bg-[#454545] hover:bg-[#606060] text-white font-medium rounded-lg transition duration-200 active:scale-[0.99] ease-out mb-6">
              Продолжить
            </button>
            <Link className="ml-32 text-white hover:text-[#AAAAAA] transition-colors duration-200" to="/register" >Нет аккаунта ? Создать</Link>
          </form>
        </div>
      </div>

      {/* right side  */}
      <div className="w-1/2 h-full bg-[#1A1A1A] p-10 flex flex-col justify-center">
        <div
          className={`space-y-8 max-w-xs mx-auto transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-white text-2xl font-light">lume — это</h2>

          <ul className="space-y-6 text-[#AAAAAA] text-sm">
            {[
              "Минимализм вместо информационного шума",
              "0 алгоритмов — вы контролируете контент",
              "ИИ-помощник, а не навязчивый бот",
              "Open-source — прозрачность кода",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start cursor-pointer transition-all duration-300 hover:text-yellow-400 hover:scale-105"
              >
                <div className="w-1 h-1 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-[#363636]">
            <p className="text-[#7A7A7A] text-xs">
              Создано одним человеком. Для тех, кто устал от соцсетей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
