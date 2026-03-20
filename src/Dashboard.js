import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard EscolaTI</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Clientes</h3>
          <p>Total: 120</p>
        </div>
        <div className="dashboard-card">
          <h3>Produtos</h3>
          <p>Total: 350</p>
        </div>
        <div className="dashboard-card">
          <h3>Pedidos</h3>
          <p>Total: 45</p>
        </div>
        <div className="dashboard-card">
          <h3>Relatórios</h3>
          <p>Último: Março/2026</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;