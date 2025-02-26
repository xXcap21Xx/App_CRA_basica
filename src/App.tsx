import { useReducer } from "react";
import "./App.css";
import Card from "./components/Card";
import { counterReducer, initialState } from "./reducer";
import { useUsers } from "./hooks/useUsers";

const App: React.FC = () => {
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

export default App;
