import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PessoasContext } from "../../context/PessoasContext";
import "../css/Pessoas.css";


function Pessoas() {
  const { pessoas, excluirPessoa, setPessoaEditando, resetarPessoas } = useContext(PessoasContext);
  const navigate = useNavigate();

  // Filtros
  const [filtroNome, setFiltroNome] = useState("");
  const [filtroEmail, setFiltroEmail] = useState("");
  const [filtroTelefone, setFiltroTelefone] = useState("");
  const [filtroCidade, setFiltroCidade] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  // Editar pessoa
  const handleEdit = (pessoa) => {
    setPessoaEditando(pessoa);
    navigate("/pessoas/cadastro");
  };

  // Excluir pessoa
  const handleDelete = (id) => {
    if (window.confirm("Deseja realmente excluir esta pessoa?")) {
      excluirPessoa(id);
    }
  };

  // Nova pessoa
  const handleNovaPessoa = () => {
    setPessoaEditando(null);
    navigate("/pessoas/cadastro");
  };

  // Resetar lista
  const handleResetar = () => {
    if (window.confirm("Deseja realmente apagar todas as pessoas?")) {
      resetarPessoas();
    }
  };

  // Exportar CSV
  const handleExportarCSV = () => {
    if (!pessoas || pessoas.length === 0) {
      alert("Nenhuma pessoa para exportar!");
      return;
    }

    const header = ["ID","Nome","Email","Telefone","CPF/CNPJ","CEP","Endereço","Cidade","Estado","Status","Tipo"];
    const rows = pessoas.map((p) => [
      p.id, p.nome, p.email, p.telefone,
      p.cpfcnpj || "", p.cep || "", p.endereco || "",
      p.cidade, p.estado || "", p.status, p.tipo || ""
    ]);

    const csvContent = [header, ...rows].map((e) => e.join(";")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "pessoas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Exportar PDF (placeholder simples)
  const handleExportarPDF = () => {
    alert("Exportar para PDF ainda não implementado!");
  };

  // Aplica filtros
  const pessoasFiltradas = pessoas.filter(
    (p) =>
      p.nome.toLowerCase().includes(filtroNome.toLowerCase()) &&
      p.email.toLowerCase().includes(filtroEmail.toLowerCase()) &&
      p.telefone.toLowerCase().includes(filtroTelefone.toLowerCase()) &&
      p.cidade.toLowerCase().includes(filtroCidade.toLowerCase()) &&
      (filtroStatus === "" || p.status === filtroStatus)
  );

  return (
    <div className="pessoas-container">
      <h1>Lista de Pessoas</h1>

      {/* Botões principais */}
      <div className="acoes-pessoas">
        <button className="btn-salvar" onClick={handleNovaPessoa}>Nova Pessoa</button>
        <button className="btn-resetar" onClick={handleResetar}>Resetar Lista</button>

        {/* Botão Exportar com opções */}
        <div className="exportar-menu">
          <button className="btn-exportar">Exportar ▼</button>
          <div className="exportar-opcoes">
            <button onClick={handleExportarCSV}>CSV</button>
            <button onClick={handleExportarPDF}>PDF</button>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="pessoas-filtros">
        <input type="text" placeholder="Nome..." value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)} />
        <input type="text" placeholder="E-mail..." value={filtroEmail} onChange={(e) => setFiltroEmail(e.target.value)} />
        <input type="text" placeholder="Telefone..." value={filtroTelefone} onChange={(e) => setFiltroTelefone(e.target.value)} />
        <input type="text" placeholder="Cidade..." value={filtroCidade} onChange={(e) => setFiltroCidade(e.target.value)} />
        <select value={filtroStatus} onChange={(e) => setFiltroStatus(e.target.value)}>
          <option value="">Todos</option>
          <option value="Ativo">Ativo</option>
          <option value="Inativo">Inativo</option>
        </select>
      </div>

      {/* Tabela */}
      {pessoasFiltradas.length === 0 ? (
        <p>Nenhuma pessoa encontrada.</p>
      ) : (
        <table className="pessoas-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cidade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pessoasFiltradas.map((pessoa) => (
              <tr key={pessoa.id}>
                <td>{pessoa.nome}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.telefone}</td>
                <td>{pessoa.cidade}</td>
                <td>{pessoa.status}</td>
                <td>
                  <button className="btn-salvar" onClick={() => handleEdit(pessoa)}>Editar</button>
                  <button className="btn-excluir" onClick={() => handleDelete(pessoa.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Pessoas;