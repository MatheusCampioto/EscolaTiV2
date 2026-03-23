import "../css/Produtos.css";

function Produtos() {
  return (
    <div className="produtos-container">
      <h1>Página de Produtos</h1>
      <div className="produtos-list">
        <div className="produto-card">
          <h3>Notebook Dell</h3>
          <p>Preço: R$ 3.500,00</p>
        </div>
        <div className="produto-card">
          <h3>Mouse Gamer</h3>
          <p>Preço: R$ 150,00</p>
        </div>
      </div>
    </div>
  );
}

export default Produtos;