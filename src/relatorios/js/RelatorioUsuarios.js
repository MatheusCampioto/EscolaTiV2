import React, { useState } from "react";
import "../css/Relatorios.css";

function RelatorioUsuarios() {
  const usuarios = [
    { nome: "João", acesso: "Admin", email: "joao@email.com" },
    { nome: "Maria", acesso: "Financeiro", email: "maria@email.com" },
    { nome: "Carlos", acesso: "Vendas", email: "carlos@email.com" },
  ];

  const [filtroNome, setFiltroNome] = useState("");

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nome.toLowerCase().includes(filtroNome.toLowerCase())
  );

  // Totais por acesso
  const totalAdmin = usuarios.filter(u => u.acesso === "Admin").length;
  const totalFinanceiro = usuarios.filter(u => u.acesso === "Financeiro").length;
  const totalVendas = usuarios.filter(u => u.acesso === "Vendas").length;

  return (
    <div className="relatorios-container">
      <h1>👤 Relatório de Usuários</h1>
      <p>Total de usuários cadastrados: {usuarios.length}</p>

      {/* Cards de resumo */}
      <div className="resumo-cards">
        <div className="resumo-card azul">Admins: {totalAdmin}</div>
        <div className="resumo-card verde">Financeiro: {totalFinanceiro}</div>
        <div className="resumo-card amarelo">Vendas: {totalVendas}</div>
      </div>

      {/* Filtro */}
      <div className="relatorios-filtros">
        <input
          type="text"
          className="input-busca"
          placeholder="Buscar por nome..."
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
      </div>

      {/* Tabela */}
      {usuariosFiltrados.length === 0 ? (
        <div className="relatorios-vazio">Nenhum usuário encontrado</div>
      ) : (
        <table className="relatorios-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Acesso</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{u.nome}</td>
                <td>
                  <span
                    className={`status-badge ${
                      u.acesso === "Admin"
                        ? "status-azul"
                        : u.acesso === "Financeiro"
                        ? "status-verde"
                        : "status-amarelo"
                    }`}
                  >
                    {u.acesso}
                  </span>
                </td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatorioUsuarios;