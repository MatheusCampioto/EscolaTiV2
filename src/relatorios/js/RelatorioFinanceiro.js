import React from "react";
import "../css/Relatorios.css";

function RelatorioFinanceiro() {
  const financeiro = [
    { descricao: "Conta de Luz", tipo: "A Pagar", valor: "R$ 250,00", data: "2024-03-01" },
    { descricao: "Venda Notebook", tipo: "A Receber", valor: "R$ 3.500,00", data: "2024-03-05" },
    { descricao: "Aluguel", tipo: "A Pagar", valor: "R$ 1.200,00", data: "2024-03-10" },
  ];

  const totalPagar = financeiro.filter(f => f.tipo === "A Pagar").length;
  const totalReceber = financeiro.filter(f => f.tipo === "A Receber").length;
  const total = financeiro.length;

  return (
    <div className="relatorios-container">
      <h1>💰 Relatório Financeiro</h1>
      <p>Total de lançamentos: {total}</p>

      {/* Cards de resumo */}
      <div className="resumo-cards">
        <div className="resumo-card vermelho">A Pagar: {totalPagar}</div>
        <div className="resumo-card verde">A Receber: {totalReceber}</div>
        <div className="resumo-card azul">Total: {total}</div>
      </div>

      {/* Tabela */}
      {financeiro.length === 0 ? (
        <div className="relatorios-vazio">Nenhum registro financeiro encontrado</div>
      ) : (
        <table className="relatorios-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {financeiro.map((f, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{f.descricao}</td>
                <td>
                  <span
                    className={`status-badge ${
                      f.tipo === "A Pagar" ? "status-vermelho" : "status-verde"
                    }`}
                  >
                    {f.tipo}
                  </span>
                </td>
                <td>{f.valor}</td>
                <td>{f.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatorioFinanceiro;