import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  const [openPessoas, setOpenPessoas] = useState(false);
  const [openFinanceiro, setOpenFinanceiro] = useState(false);
  const [openProdutos, setOpenProdutos] = useState(false);
  const [openUsuarios, setOpenUsuarios] = useState(false);
  const [openEstoque, setOpenEstoque] = useState(false);
  const [openPedidos, setOpenPedidos] = useState(false);

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        {/* Dashboard primeiro */}
        <li><Link to="/dashboard">Dashboard</Link></li>

        {/* Pessoas */}
        <li onClick={() => setOpenPessoas(!openPessoas)}>
          Pessoas {openPessoas ? "▼" : "▶"}
          <ul className={`submenu ${openPessoas ? "open" : ""}`}>
            <li><Link to="/pessoas/cadastro">Cadastro de Pessoas</Link></li>
            <li><Link to="/pessoas">Lista de Pessoas</Link></li>
          </ul>
        </li>

        {/* Financeiro */}
        <li onClick={() => setOpenFinanceiro(!openFinanceiro)}>
          Financeiro {openFinanceiro ? "▼" : "▶"}
          <ul className={`submenu ${openFinanceiro ? "open" : ""}`}>
            <li><Link to="/financeiro/pagar">Contas a Pagar</Link></li>
            <li><Link to="/financeiro/receber">Contas a Receber</Link></li>
          </ul>
        </li>

        {/* Produtos */}
        <li onClick={() => setOpenProdutos(!openProdutos)}>
          Produtos {openProdutos ? "▼" : "▶"}
          <ul className={`submenu ${openProdutos ? "open" : ""}`}>
            <li><Link to="/produtos/cadastro">Cadastro de Produtos</Link></li>
            <li><Link to="/produtos">Lista de Produtos</Link></li>
          </ul>
        </li>

        {/* Usuários */}
        <li onClick={() => setOpenUsuarios(!openUsuarios)}>
          Usuários {openUsuarios ? "▼" : "▶"}
          <ul className={`submenu ${openUsuarios ? "open" : ""}`}>
            <li><Link to="/usuarios/cadastro">Cadastro de Usuários</Link></li>
            <li><Link to="/usuarios">Lista de Usuários</Link></li>
            <li><Link to="/usuarios/acessos">Liberação de Acessos</Link></li>
          </ul>
        </li>

        {/* Estoque */}
        <li onClick={() => setOpenEstoque(!openEstoque)}>
          Estoque {openEstoque ? "▼" : "▶"}
          <ul className={`submenu ${openEstoque ? "open" : ""}`}>
            <li><Link to="/estoque/controle">Controle de Estoque</Link></li>
          </ul>
        </li>

        {/* Pedidos */}
        <li onClick={() => setOpenPedidos(!openPedidos)}>
          Pedidos {openPedidos ? "▼" : "▶"}
          <ul className={`submenu ${openPedidos ? "open" : ""}`}>
            <li><Link to="/pedidos/cadastro">Cadastro de Pedido</Link></li>
            <li><Link to="/pedidos/controle">Controle de Pedido</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;