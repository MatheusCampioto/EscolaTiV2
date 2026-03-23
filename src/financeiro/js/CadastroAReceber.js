import "../css/CadastroAReceber.css";

function CadastroAReceber() {
  return (
    <div className="cadastro-areceber">
      <h1>Cadastro de Contas a Receber</h1>
      <form>
        <div className="form-group">
          <label>Cliente:</label>
          <input type="text" placeholder="Digite o cliente" />
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

export default CadastroAReceber;