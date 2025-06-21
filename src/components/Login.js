import React from "react";

function Login() {
return (
    <div className="flex w-full h-screen">
      {/* Левая часть — форма */}
    <div className="w-1/2 flex justify-start items-center pl-20">
        <div className="w-3/4 max-w-md">
        <form className="flex flex-col justify-center items-start">
            <h1 className="text-white text-3xl font-medium mb-8 tracking-tight flex">Войти в&nbsp;<p className="text-yellow-400">Lume</p></h1>

            <label className="text-[#AAAAAA] text-sm">Email</label>
            <input
            className="mb-8 mt-2 w-full h-12 px-5 rounded-lg border border-[#404040] bg-[#232323] focus:outline-none focus:border-[#FFFFFF] focus:ring-1 focus:ring-[#555555] text-white placeholder-[#7A7A7A] transition-colors duration-200"
            placeholder="username@user.com"
            type="email"
            />

            <label className="text-[#AAAAAA] text-sm">Password</label>
            <input 
            className="mt-2 w-full h-12 px-5 rounded-lg border border-[#404040] bg-[#232323] focus:outline-none focus:border-[#FFFFFF] focus:ring-1 focus:ring-[#555555] text-white placeholder-[#7A7A7A] transition-colors duration-200"
            placeholder="******"
            type="password"
            />

            <button className="mt-10 w-full h-12 bg-[#454545] hover:bg-[#606060] text-white font-medium rounded-lg transition duration-200 active:scale-[0.99] ease-out">
            Продолжить
            </button>
        </form>
        </div>
    </div>

      {/* Правая часть — графика и слоган */}
    <div className="w-1/2 flex flex-col justify-center items-center text-center px-10">
        <div className="w-72 h-72 mb-10">
          {/* Тут можно вставить SVG или Canvas позже */}
        <div className="w-full h-full bg-gradient-to-br from-[#2A2A2A] via-[#1E1E1E] to-[#111] rounded-2xl shadow-xl opacity-80 animate-pulse" />
        </div>
        <h2 className="text-white text-3xl font-semibold tracking-tight"><p className="text-yellow-400">Lume.&nbsp;</p>Тут будет какой-то слоган или нет</h2>
        <p className="text-[#888888] text-sm mt-4 max-w-xs">Пока напишу, что Витя слабоумный</p>
    </div>
    </div>
);
}

export default Login;
