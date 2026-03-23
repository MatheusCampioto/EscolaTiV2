import "../css/Relatorios.css";

function Relatorios() {
  return (
    <div className="relatorios-container">
      <h1>Página de Relatórios</h1>
      <div className="relatorio-card">
        <h3>Vendas Mensais</h3>
        <p>Total: R$ 45.000,00</p>
      </div>
      <div className="relatorio-card">
        <h3>Clientes Ativos</h3>
        <p>Total: 120</p>
      </div>
      <div className="relatorio-card">
        <h3>Produtos em Estoque</h3>
        <p>Total: 350</p>
      </div>
    </div>
  );
}

export default Relatorios;