import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { saveUserToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/API";

const LoginForm = () => {
    const { values, handleChange } = useForm({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await loginUser(values);
            saveUserToken(response.token);
            navigate("/dashboard");
        } catch (err) {
            setError("Correo o contraseña incorrectos");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-white text-2xl font-bold text-center mb-4">
                    Iniciar Sesión
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required
                    />
                    <input
                        className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        disabled={loading}
                    >
                        {loading ? "Cargando..." : "Ingresar"}
                    </button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
