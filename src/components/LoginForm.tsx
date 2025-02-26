import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { saveUserToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/API';

const LoginForm = () => {
    const { formData, handleChange } = useForm({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await loginUser(formData);
            saveUserToken(response.token); // Guardar el token
            navigate('/dashboard'); // Redirigir a otra pantalla
        } catch (err) {
            setError('Credenciales incorrectas');
        } 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
            <button type="submit">Iniciar sesión</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default LoginForm;
