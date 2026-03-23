import React, { useState } from "react";
import "../css/Relatorios.css";

function RelatorioPedidos() {
  const pedidos = [
    { id: 101, cliente: "João", status: "Concluído", data: "2024-01-15" },
    { id: 102, cliente: "Maria", status: "Pendente", data: "2024-02-02" },
    { id: 103, cliente: "Carlos", status: "Cancelado", data: "2024-02-10" },
  ];

  const [filtroCliente, setFiltroCliente] = useState("");

  const pedidosFiltrados = pedidos.filter((p) =>
    p.cliente.toLowerCase().includes(filtroCliente.toLowerCase())
  );

  // Totais por status
  const totalConcluido = pedidos.filter(p => p.status === "Concluído").length;
  const totalPendente = pedidos.filter(p => p.status === "Pendente").length;
  const totalCancelado = pedidos.filter(p => p.status === "Cancelado").length;

  // Função para cor do badge
  const getStatusColor = (status) => {
    switch (status) {
      case "Concluído":
        return "#27ae60"; // verde
      case "Pendente":
        return "#f39c12"; // amarelo
      case "Cancelado":
        return "#c0392b"; // vermelho
      default:
        return "#7f8c8d"; // cinza
    }
  };

  return (
    <div className="relatorios-container">
      <h1>🧾 Relatório de Pedidos</h1>
      <p>Total de pedidos cadastrados: {pedidos.length}</p>

      {/* Cards de resumo */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ background: "#27ae60", color: "#fff", padding: "10px", borderRadius: "6px" }}>
          Concluídos: {totalConcluido}
        </div>
        <div style={{ background: "#f39c12", color: "#fff", padding: "10px", borderRadius: "6px" }}>
          Pendentes: {totalPendente}
        </div>
        <div style={{ background: "#c0392b", color: "#fff", padding: "10px", borderRadius: "6px" }}>
          Cancelados: {totalCancelado}
        </div>
      </div>

      {/* Filtro */}
      <div className="relatorios-filtros">
        <input
          type="text"
          className="input-busca"
          placeholder="Buscar por cliente..."
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
        />
      </div>

      {/* Tabela */}
      {pedidosFiltrados.length === 0 ? (
        <div className="relatorios-vazio">Nenhum pedido encontrado</div>
      ) : (
        <table className="relatorios-tabela">
          <thead>
            <tr>
              <th>#</th>
              <th>Cliente</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {pedidosFiltrados.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.cliente}</td>
                <td>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "4px",
                      color: "#fff",
                      backgroundColor: getStatusColor(p.status),
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td>{p.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RelatorioPedidos;