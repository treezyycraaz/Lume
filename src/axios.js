import axios from "axios";

// экземпляр axios с базовой конфигурацией

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
})

// Добавляем перехватчик запросов
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Берём токен из localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Вставляем токен в заголовки запроса
    }
    return config; // Возвращаем конфигурацию
});

export default api;