import axios from "axios";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Función para obtener usuarios
export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
};

// Nueva función para login
export const loginUser = async (data: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:5000/api/login", data);
    return response.data; // Aquí el backend debe devolver un token o usuario autenticado
};
