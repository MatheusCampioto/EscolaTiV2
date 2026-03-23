import React, { useContext } from "react";
import { PessoasContext } from "../../context/PessoasContext";
import { PedidosContext } from "../../context/PedidosContext";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../css/Dashboard.css";

function Dashboard() {
  const { pessoas } = useContext(PessoasContext);
  const { pedidos } = useContext(PedidosContext);

  // Contagem de pedidos por status
  const pedidosPorStatus = {
    labels: ["Concluído", "Pendente", "Cancelado"],
    datasets: [
      {
        label: "Pedidos",
        data: [
          pedidos.filter((p) => p.status === "Concluído").length,
          pedidos.filter((p) => p.status === "Pendente").length,
          pedidos.filter((p) => p.status === "Cancelado").length,
        ],
        backgroundColor: ["#66bb6a", "#ffa726", "#ef5350"],
      },
    ],
  };

  // Exemplo de vendas por mês (mockado)
  const vendasPorMes = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [
      {
        label: "Vendas",
        data: [5000, 7000, 4000, 8000, 6500],
        backgroundColor: "#2196f3",
      },
    ],
  };

  // Opções para os gráficos
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percentage =
              total > 0 ? ((value / total) * 100).toFixed(1) : 0;
            return `${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard EscolaTI</h1>

      {/* Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Clientes</h3>
          <p>Total: {pessoas.length}</p>
        </div>
        <div className="dashboard-card">
          <h3>Produtos</h3>
          <p>Total: 350</p>
        </div>
        <div className="dashboard-card">
          <h3>Pedidos</h3>
          <p>Total: {pedidos.length}</p>
        </div>
        <div className="dashboard-card">
          <h3>Relatórios</h3>
          <p>Último: Março/2026</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="dashboard-charts">
        <div className="dashboard-chart">
          <h2>Pedidos por Status</h2>
          {pedidos.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>
              Nenhum pedido cadastrado ainda
            </p>
          ) : (
            <Pie data={pedidosPorStatus} options={pieOptions} />
          )}
          <div className="status-summary">
            <p className="concluido">
              <span className="icon">✔️</span>
              Concluídos: {pedidos.filter((p) => p.status === "Concluído").length}
            </p>
            <p className="pendente">
              <span className="icon">⏳</span>
              Pendentes: {pedidos.filter((p) => p.status === "Pendente").length}
            </p>
            <p className="cancelado">
              <span className="icon">❌</span>
              Cancelados: {pedidos.filter((p) => p.status === "Cancelado").length}
            </p>
          </div>
        </div>

        <div className="dashboard-chart">
          <h2>Vendas por Mês</h2>
          <Bar data={vendasPorMes} options={barOptions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;