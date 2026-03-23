import React, { useState } from "react";
import "../css/Relatorios.css";

function RelatorioProdutos() {
  const produtos = [
    { nome: "Notebook", estoque: 12, categoria: "Eletrônicos", preco: "R$ 3500" },
    { nome: "Mouse", estoque: 45, categoria: "Periféricos", preco: "R$ 80" },
    { nome: "Teclado", estoque: 0, categoria: "Periféricos", preco: "R$ 120" },
  ];

  const [filtroNome, setFiltroNome] = useState("");

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtroNome.toLowerCase())
  );

  // Totais
  const totalDisponiveis = produtos.filter(p => p.estoque > 0).length;
  const totalEsgotados = produtos.filter(p => p.estoque === 0).length;
  const total = produtos.length;

  return (
    <div className="relatorios-container">
      <h1>📦 Relatório de Produtos</h1>
      <p>Total de produtos cadastrados: {total}</p>

      {/* Cards de resumo */}
      <div className="resumo-cards">
        <div className="resumo-card verde">Disponíveis: {totalDisponiveis}</div>
        <div className="resumo-card vermelho">Esgotados: {totalEsgotados}</div>
        <div className="resumo-card azul">Total: {total}</div>
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
      {produtosFiltrados.length === 0 ? (
        <div className="relatorios-vazio">Nenhum produto encontrado</div>
      ) : (
        <table className="relatorios-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{p.nome}</td>
                <td>{p.categoria}</td>
                <td>{p.preco}</td>
                <td>
                  <span
                    className={`status-badge ${
                      p.estoque > 0 ? "status-verde" : "status-vermelho"
                    }`}
                  >
                    {p.estoque > 0 ? `${p.estoque} em estoque` : "Esgotado"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatorioProdutos;