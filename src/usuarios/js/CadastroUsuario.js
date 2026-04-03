import { useState } from "react";
import "../css/CadastroUsuario.css";

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    cargo: "",
    departamento: "",
    perfil: "",
    status: "ativo"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário cadastrado:", formData);
    // Aqui você faria o POST para o backend
    setFormData({
      nome: "",
      email: "",
      senha: "",
      telefone: "",
      cargo: "",
      departamento: "",
      perfil: "",
      status: "ativo"
    });
  };

  return (
    <div className="cadastro-usuario">
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome completo:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome completo"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>E-mail corporativo:</label>
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite a senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="tel"
            name="telefone"
            placeholder="(44) 99999-9999"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Cargo:</label>
          <select
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Gerente">Gerente</option>
            <option value="Analista">Analista</option>
            <option value="Assistente">Assistente</option>
            <option value="Diretor">Diretor</option>
            <option value="TI">TI</option>
          </select>
        </div>

        <div className="form-group">
          <label>Departamento:</label>
          <select
            name="departamento"
            value={formData.departamento}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Comercial">Comercial</option>
            <option value="Produção">Produção</option>
            <option value="Logística">Logística</option>
            <option value="RH">Recursos Humanos</option>
          </select>
        </div>

        <div className="form-group">
          <label>Perfil de acesso:</label>
          <select
            name="perfil"
            value={formData.perfil}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuário</option>
            <option value="readonly">Somente leitura</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <button type="submit" className="btn-salvar">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroUsuario;