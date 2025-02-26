import { useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import { counterReducer, initialState } from "./reducer";
import { useUsers } from "./hooks/useUsers";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import { ReactNode } from "react";
import { getUserToken } from "./utils/auth";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  return getUserToken() ? children : <Navigate to="/" />;
};

const Home = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { users, loading, error } = useUsers();

  return (
    <div className="App">
      <h1>React + TypeScript</h1>
      <p>Contador: {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h2>Usuarios:</h2>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      <Card title="Tarjeta de prueba" description="Este es un componente en TypeScript" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
    </Routes>
  );
};

export default App;
