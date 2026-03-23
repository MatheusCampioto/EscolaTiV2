import "../css/CadastroUsuario.css";

function CadastroUsuario() {
  return (
    <div className="cadastro-usuario">
      <h1>Cadastro de Usuário</h1>
      <form>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" placeholder="Digite o nome" />
        </div>

        <div className="form-group">
          <label>E-mail:</label>
          <input type="email" placeholder="Digite o e-mail" />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input type="password" placeholder="Digite a senha" />
        </div>

        <div className="form-group">
          <label>Perfil:</label>
          <input type="text" placeholder="Digite o perfil (ex: admin)" />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroUsuario;