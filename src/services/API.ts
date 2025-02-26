import axios from "axios";

const API_URL = "https://reqres.in/api";

export interface LoginData {
    email: string;
    password: string;
}

export const loginUser = async (data: LoginData) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data; // Retorna el token si las credenciales son correctas
};
