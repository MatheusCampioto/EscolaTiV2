import { Link } from "react-router-dom";
import "./Menu.css"; // Importa o CSS para o menu

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Logar</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/relatorios">Relatórios</Link></li>
        <li><Link to="/usuarios">Usuários</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;