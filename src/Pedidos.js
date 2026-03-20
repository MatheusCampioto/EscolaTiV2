import "./Pedidos.css";

function Pedidos() {
  return (
    <div className="pedidos-container">
      <h1>Página de Pedidos</h1>
      <div className="pedido-item">
        <strong>Pedido #001</strong> - Cliente: Maria Silva - Total: R$ 3.650,00
      </div>
      <div className="pedido-item">
        <strong>Pedido #002</strong> - Cliente: João Souza - Total: R$ 150,00
      </div>
    </div>
  );
}

export default Pedidos;