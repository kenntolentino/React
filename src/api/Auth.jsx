import api from "./axios";

export const csrf = () => api.get('/sanctum/csrf-cookie');

export const login = async (email, password) => {
    //await csrf();
    return api.post('/api/login', {email, password });
};

export const register = async (data) => {
    //await csrf();
    return api.post('/api/register', {data });
};

export const logout = async () => {
    await api.post('/api/login');
};

export const getCars = async () => {
    //await csrf();
    return api.post('/api/v1/cars');
}