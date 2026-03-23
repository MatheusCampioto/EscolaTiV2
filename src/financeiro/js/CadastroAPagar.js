import "../css/CadastroAPagar.css";

function CadastroAPagar() {
  return (
    <div className="cadastro-apagar">
      <h1>Cadastro de Contas a Pagar</h1>
      <form>
        <div className="form-group">
          <label>Fornecedor:</label>
          <input type="text" placeholder="Digite o fornecedor" />
        </div>

        <div className="form-group">
          <label>Valor:</label>
          <input type="number" placeholder="Digite o valor" />
        </div>

        <div className="form-group">
          <label>Data de Vencimento:</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Descrição:</label>
          <input type="text" placeholder="Digite a descrição" />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroAPagar;