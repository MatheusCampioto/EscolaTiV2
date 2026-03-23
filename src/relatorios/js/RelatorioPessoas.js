import React, { useContext, useState } from "react";
import { PessoasContext } from "../../context/PessoasContext";
import "../css/Relatorios.css";

function RelatorioPessoas() {
  const { pessoas } = useContext(PessoasContext);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  const pessoasFiltradas = pessoas.filter((p) =>
    p.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
    (filtroEstado === "" || p.estado === filtroEstado)
  );

  // Totais por estado
  const totalPR = pessoas.filter(p => p.estado === "PR").length;
  const totalSP = pessoas.filter(p => p.estado === "SP").length;
  const totalRJ = pessoas.filter(p => p.estado === "RJ").length;

  return (
    <div className="relatorios-container">
      <h1>📋 Relatório de Pessoas</h1>
      <p>Total de pessoas cadastradas: {pessoas.length}</p>

      {/* Cards de resumo */}
      <div className="resumo-cards">
        <div className="resumo-card azul">Paraná: {totalPR}</div>
        <div className="resumo-card verde">São Paulo: {totalSP}</div>
        <div className="resumo-card amarelo">Rio de Janeiro: {totalRJ}</div>
      </div>

      {/* Filtros */}
      <div className="relatorios-filtros">
        <input
          type="text"
          className="input-busca"
          placeholder="Buscar por nome..."
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
        <select
          className="select-estado"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="">Todos os estados</option>
          <option value="PR">Paraná</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
        </select>
      </div>

      {/* Tabela */}
      {pessoasFiltradas.length === 0 ? (
        <div className="relatorios-vazio">Nenhuma pessoa encontrada</div>
      ) : (
        <table className="relatorios-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Estado</th>
              <th>Email</th>
              <th>Data de Cadastro</th>
            </tr>
          </thead>
          <tbody>
            {pessoasFiltradas.map((p, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{p.nome}</td>
                <td>
                  <span
                    className={`status-badge ${
                      p.estado === "PR"
                        ? "status-azul"
                        : p.estado === "SP"
                        ? "status-verde"
                        : "status-amarelo"
                    }`}
                  >
                    {p.estado}
                  </span>
                </td>
                <td>{p.email}</td>
                <td>{p.dataCadastro || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatorioPessoas;