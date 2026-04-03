import React, { useState, useContext } from "react";
import "../css/ListaPessoas.css";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaRedo,
  FaFileExport,
  FaUser,
  FaIdCard,
  FaCity,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { PessoasContext } from "../../context/PessoasContext";

function ListaPessoas() {
  const {
    pessoas,
    atualizarPessoa,
    excluirPessoa,
    adicionarPessoa,
    resetarPessoas,
    exportarPessoas,
  } = useContext(PessoasContext);

  const [filtroNome, setFiltroNome] = useState("");
  const [filtroCpf, setFiltroCpf] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");

  const pessoasFiltradas = pessoas.filter((p) => {
    const nome = p.nome ? p.nome.toLowerCase() : "";
    const cpf = p.cpfcnpj ? p.cpfcnpj.toLowerCase() : "";
    const cidade = p.cidade ? p.cidade.toLowerCase() : "";
    const estado = p.estado ? p.estado.toLowerCase() : "";

    return (
      nome.includes(filtroNome.toLowerCase()) &&
      cpf.includes(filtroCpf.toLowerCase()) &&
      cidade.includes(filtroCidade.toLowerCase()) &&
      estado.includes(filtroEstado.toLowerCase())
    );
  });

  return (
    <div className="lista-pessoas">
      <h1>Lista de Pessoas</h1>

      {/* Botões de topo */}
      <div className="acoes-topo">
        <button
          className="btn-novo"
          onClick={() =>
            adicionarPessoa({
              nome: "Nova Pessoa",
              cpfcnpj: "",
              cidade: "",
              estado: "",
            })
          }
          title="Nova Pessoa"
        >
          <FaPlus />
        </button>
        <button
          className="btn-recarregar"
          onClick={resetarPessoas}
          title="Recarregar Lista"
        >
          <FaRedo />
        </button>
        <button
          className="btn-exportar"
          onClick={exportarPessoas}
          title="Exportar"
        >
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
          <label>CPF/CNPJ</label>
          <div className="input-icon">
            <FaIdCard />
            <input
              type="text"
              placeholder="Digite o CPF ou CNPJ..."
              value={filtroCpf}
              onChange={(e) => setFiltroCpf(e.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label>Cidade</label>
          <div className="input-icon">
            <FaCity />
            <input
              type="text"
              placeholder="Digite a cidade..."
              value={filtroCidade}
              onChange={(e) => setFiltroCidade(e.target.value)}
            />
          </div>
        </div>

        <div className="campo">
          <label>Estado</label>
          <div className="input-icon">
            <FaMapMarkerAlt />
            <select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="PR">Paraná</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
            </select>
          </div>
        </div>

        <div className="campo limpar">
          <button
            className="btn-limpar"
            onClick={() => {
              setFiltroNome("");
              setFiltroCpf("");
              setFiltroCidade("");
              setFiltroEstado("");
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
            <th>CPF/CNPJ</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pessoasFiltradas.length > 0 ? (
            pessoasFiltradas.map((pessoa) => (
              <tr key={pessoa.id || pessoa.cpfcnpj}>
                <td>{pessoa.nome || "—"}</td>
                <td>{pessoa.cpfcnpj || "—"}</td>
                <td>{pessoa.cidade || "—"}</td>
                <td>{pessoa.estado || "—"}</td>
                <td>
                  <button
                    className="btn-editar"
                    onClick={() =>
                      atualizarPessoa(pessoa.id, {
                        ...pessoa,
                        nome: pessoa.nome + " (editado)",
                      })
                    }
                    title="Editar"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn-remover"
                    onClick={() => excluirPessoa(pessoa.id)}
                    title="Excluir"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", color: "#888" }}>
                Nenhuma pessoa encontrada.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaPessoas;