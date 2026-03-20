import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Clientes from "./Clientes";
import Produtos from "./Produtos";
import Pedidos from "./Pedidos";
import Relatorios from "./Relatorios";
import Usuarios from "./Usuarios";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;