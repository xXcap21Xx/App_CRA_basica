import { useState, useEffect } from "react";
import { fetchUsers, User } from "../services/API";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError("Error al obtener usuarios");
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return { users, loading, error };
};
