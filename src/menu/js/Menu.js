import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Menu.css";   // CSS está em src/menu/css/Menu.css

function Menu() {
  const [open, setOpen] = useState({
    relatorios: false,
    pessoas: false,
    produtos: false,
    pedidos: false,
    financeiro: false,
    usuarios: false,
    estoque: false,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <nav className="sidebar">
      <h2>Mini ERP</h2>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>

        {/* Relatórios */}
        <li>
          <span onClick={() => toggle("relatorios")} className="toggle">
            Relatórios {open.relatorios ? "▼" : "▶"}
          </span>
          {open.relatorios && (
            <ul className="submenu">
              <li><Link to="/relatorios/pessoas">Relatório de Pessoas</Link></li>
              <li><Link to="/relatorios/produtos">Relatório de Produtos</Link></li>
              <li><Link to="/relatorios/pedidos">Relatório de Pedidos</Link></li>
              <li><Link to="/relatorios/financeiro">Relatório Financeiro</Link></li>
              <li><Link to="/relatorios/usuarios">Relatório de Usuários</Link></li>
            </ul>
          )}
        </li>

        {/* Pessoas */}
        <li>
          <span onClick={() => toggle("pessoas")} className="toggle">
            Pessoas {open.pessoas ? "▼" : "▶"}
          </span>
          {open.pessoas && (
            <ul className="submenu">
              <li><Link to="/pessoas">Lista de Pessoas</Link></li>
              <li><Link to="/pessoas/cadastro">Cadastro Pessoas</Link></li>
            </ul>
          )}
        </li>

        {/* Produtos */}
        <li>
          <span onClick={() => toggle("produtos")} className="toggle">
            Produtos {open.produtos ? "▼" : "▶"}
          </span>
          {open.produtos && (
            <ul className="submenu">
              <li><Link to="/produtos">Lista de Produtos</Link></li>
              <li><Link to="/produtos/cadastro">Cadastro Produto</Link></li>
            </ul>
          )}
        </li>

        {/* Pedidos */}
        <li>
          <span onClick={() => toggle("pedidos")} className="toggle">
            Pedidos {open.pedidos ? "▼" : "▶"}
          </span>
          {open.pedidos && (
            <ul className="submenu">
              <li><Link to="/pedidos/cadastro">Cadastro Pedido</Link></li>
              <li><Link to="/pedidos/controle">Controle Pedido</Link></li>
            </ul>
          )}
        </li>

        {/* Financeiro */}
        <li>
          <span onClick={() => toggle("financeiro")} className="toggle">
            Financeiro {open.financeiro ? "▼" : "▶"}
          </span>
          {open.financeiro && (
            <ul className="submenu">
              <li><Link to="/financeiro/pagar">Cadastro A Pagar</Link></li>
              <li><Link to="/financeiro/receber">Cadastro A Receber</Link></li>
            </ul>
          )}
        </li>

        {/* Usuários */}
        <li>
          <span onClick={() => toggle("usuarios")} className="toggle">
            Usuários {open.usuarios ? "▼" : "▶"}
          </span>
          {open.usuarios && (
            <ul className="submenu">
              <li><Link to="/usuarios">Lista de Usuários</Link></li>
              <li><Link to="/usuarios/cadastro">Cadastro Usuário</Link></li>
              <li><Link to="/usuarios/acessos">Liberação de Acessos</Link></li>
            </ul>
          )}
        </li>

        {/* Estoque */}
        <li>
          <span onClick={() => toggle("estoque")} className="toggle">
            Estoque {open.estoque ? "▼" : "▶"}
          </span>
          {open.estoque && (
            <ul className="submenu">
              <li><Link to="/estoque/controle">Controle de Estoque</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Menu;