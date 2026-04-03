import React, { useState, useEffect } from "react";
import "../css/Usuarios.css";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaRedo,
  FaFileExport,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
} from "react-icons/fa";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("");
  const [filtroTelefone, setFiltroTelefone] = useState("");
  const [filtroCargo, setFiltroCargo] = useState("");

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = () => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Erro ao carregar usuários:", err));
  };

  const excluirUsuario = async (id) => {
    if (!window.confirm("Deseja realmente excluir este usuário?")) return;

    try {
      const res = await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
      if (res.ok) {
        setUsuarios((prev) => prev.filter((u) => u.id !== id));
      }
    } catch (err) {
      console.error("Erro ao excluir usuário:", err);
    }
  };

  // Corrigido: checagem segura para evitar erro de undefined
  const usuariosFiltrados = usuarios.filter((u) => {
    const nome = u.nome ? u.nome.toLowerCase() : "";
    const email = u.email ? u.email.toLowerCase() : "";
    const telefone = u.telefone ? u.telefone.toLowerCase() : "";
    const cargo = u.cargo ? u.cargo.toLowerCase() : "";

    return (
      nome.includes(filtroNome.toLowerCase()) &&
      email.includes(filtroEmail.toLowerCase()) &&
      telefone.includes(filtroTelefone.toLowerCase()) &&
      cargo.includes(filtroCargo.toLowerCase())
    );
  });

  return (
    <div className="lista-usuarios">
      <h1>Lista de Usuários</h1>

      {/* Botões de topo */}
      <div className="acoes-topo">
        <button className="btn-novo" title="Novo Usuário">
          <FaPlus />
        </button>
        <button className="btn-recarregar" onClick={carregarUsuarios} title="Recarregar">
          <FaRedo />
        </button>
        <button className="btn-exportar" title="Exportar">
          <FaFileExport />
        </button>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="campo">
          <label>Nome</label>
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              placeholder="Digite o nome..."
              value={filtroNome}
              onChange={(e) => setFiltroNome(e.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label>E-mail</label>
          <div className="input-icon">
            <FaEnvelope />
            <input
              type="text"
              placeholder="Digite o e-mail..."
              value={filtroEmail}
              onChange={(e) => setFiltroEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label>Telefone</label>
          <div className="input-icon">
            <FaPhone />
            <input
              type="text"
              placeholder="Digite o telefone..."
              value={filtroTelefone}
              onChange={(e) => setFiltroTelefone(e.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label>Cargo</label>
          <div className="input-icon">
            <FaBriefcase />
            <input
              type="text"
              placeholder="Digite o cargo..."
              value={filtroCargo}
              onChange={(e) => setFiltroCargo(e.target.value)}
            />
          </div>
        </div>

        <div className="campo limpar">
          <button
            className="btn-limpar"
            onClick={() => {
              setFiltroNome("");
              setFiltroEmail("");
              setFiltroTelefone("");
              setFiltroCargo("");
            }}
          >
            Limpar filtros
          </button>
        </div>
      </div>

      {/* Tabela */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.length > 0 ? (
            usuariosFiltrados.map((u) => (
              <tr key={u.id}>
                <td>{u.nome || "—"}</td>
                <td>{u.email || "—"}</td>
                <td>{u.telefone || "—"}</td>
                <td>{u.nascimento || "—"}</td>
                <td>{u.cargo || "—"}</td>
                <td>
                  <button className="btn-editar" title="Editar">
                    <FaEdit />
                  </button>
                  <button
                    className="btn-remover"
                    onClick={() => excluirUsuario(u.id)}
                    title="Excluir"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
                Nenhum usuário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Usuarios;