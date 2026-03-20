import { useState } from "react";
import "./Clientes.css";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoCliente = { nome, email, telefone, cidade };

    if (editIndex !== null) {
      // Atualiza cliente existente
      const clientesAtualizados = [...clientes];
      clientesAtualizados[editIndex] = novoCliente;
      setClientes(clientesAtualizados);
      setEditIndex(null);
    } else {
      // Adiciona novo cliente
      setClientes([...clientes, novoCliente]);
    }

    limparCampos();
  };

  const handleEdit = (index) => {
    const cliente = clientes[index];
    setNome(cliente.nome);
    setEmail(cliente.email);
    setTelefone(cliente.telefone);
    setCidade(cliente.cidade);
    setEditIndex(index);
  };

  const handleDelete = () => {
    if (editIndex !== null) {
      const clientesAtualizados = clientes.filter((_, i) => i !== editIndex);
      setClientes(clientesAtualizados);
      setEditIndex(null);
      limparCampos();
    }
  };

  const limparCampos = () => {
    setNome("");
    setEmail("");
    setTelefone("");
    setCidade("");
  };

  return (
    <div className="clientes-container">
      <h1>Página de Clientes</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Cidade:</label>
          <select value={cidade} onChange={(e) => setCidade(e.target.value)} required>
            <option value="">Selecione...</option>
            <option value="Maringá">Maringá</option>
            <option value="Curitiba">Curitiba</option>
            <option value="Londrina">Londrina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </select>
        </div>

       <div className="form-actions">
  {/* Botão principal alterna entre cadastrar e editar */}
  <button type="submit">
    {editIndex !== null ? "Editar" : "Cadastrar"}
  </button>

  {/* Botão de excluir só aparece quando há cliente selecionado */}
  {editIndex !== null && (
    <button type="button" onClick={handleDelete} className="btn-excluir">
      Excluir
    </button>
  )}

  {/* Se quiser manter o limpar, pode deixar aqui */}
  <button type="button" onClick={limparCampos} className="btn-limpar">
    Limpar
  </button>
</div>
      </form>

      <table className="clientes-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index} onClick={() => handleEdit(index)}>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.cidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clientes;