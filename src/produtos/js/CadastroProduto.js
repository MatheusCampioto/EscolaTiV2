import "../css/CadastroProduto.css";

function CadastroProduto() {
  return (
    <div className="cadastro-produto">
      <h1>Cadastro de Produto</h1>
      <form>
        <div className="form-group">
          <label>Nome do Produto:</label>
          <input type="text" placeholder="Digite o nome do produto" />
        </div>

        <div className="form-group">
          <label>Categoria:</label>
          <input type="text" placeholder="Digite a categoria" />
        </div>

        <div className="form-group">
          <label>Preço:</label>
          <input type="number" placeholder="Digite o preço" />
        </div>

        <div className="form-group">
          <label>Quantidade em Estoque:</label>
          <input type="number" placeholder="Digite a quantidade" />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroProduto;