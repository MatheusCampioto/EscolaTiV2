import { useState, useEffect, useContext } from "react";
import { PessoasContext } from "../../context/PessoasContext";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
import "../css/CadastroPessoas.css";

function CadastroPessoas() {
  const navigate = useNavigate();
  const { adicionarPessoa, atualizarPessoa, pessoaEditando } = useContext(PessoasContext);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    whatsapp: "",
    cpfcnpj: "",
    dataNascimento: "",
    genero: "",
    estadoCivil: "",
    empresa: "",
    cargo: "",
    cep: "",
    endereco: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    status: "Ativo",
    tipo: "Pessoa Física",
    tipoPessoa: "",       // NOVO: Cliente, Colaborador, Fornecedor
    dataCadastro: "",     // NOVO: Data de Cadastro
    observacoes: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (pessoaEditando) {
      setFormData(pessoaEditando);
    }
  }, [pessoaEditando]);

  useEffect(() => {
    if (!formData.cep) return;
    const cepLimpo = formData.cep.replace(/\D/g, "");
    if (cepLimpo.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (data && !data.erro) {
            setFormData(prev => ({
              ...prev,
              endereco: data.logradouro || prev.endereco,
              bairro: data.bairro || prev.bairro,
              cidade: data.localidade || prev.cidade,
              estado: data.uf || prev.estado
            }));
          }
        })
        .catch(err => console.error("Erro ao buscar CEP:", err));
    }
  }, [formData.cep]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório";
    if (!formData.email.includes("@")) newErrors.email = "E-mail inválido";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (pessoaEditando) {
      atualizarPessoa(pessoaEditando.id, formData);
      alert("Pessoa atualizada com sucesso!");
    } else {
      adicionarPessoa(formData);
      alert("Pessoa cadastrada com sucesso!");
    }

    setFormData({
      nome: "",
      email: "",
      telefone: "",
      whatsapp: "",
      cpfcnpj: "",
      dataNascimento: "",
      genero: "",
      estadoCivil: "",
      empresa: "",
      cargo: "",
      cep: "",
      endereco: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      status: "Ativo",
      tipo: "Pessoa Física",
      tipoPessoa: "",
      dataCadastro: "",
      observacoes: "",
    });

    navigate("/pessoas");
  };

  return (
    <div className="cadastro-pessoas">
      <h1>{pessoaEditando ? "Editar Pessoa" : "Cadastro de Pessoas"}</h1>
      <form onSubmit={handleSubmit}>

        {/* Dados Pessoais */}
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>
          <div className="form-group">
            <label>Data de Nascimento:</label>
            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gênero:</label>
            <select name="genero" value={formData.genero} onChange={handleChange}>
              <option value="">Selecione</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Estado Civil:</label>
            <select name="estadoCivil" value={formData.estadoCivil} onChange={handleChange}>
              <option value="">Selecione</option>
              <option>Solteiro</option>
              <option>Casado</option>
              <option>Divorciado</option>
              <option>Viúvo</option>
            </select>
          </div>
        </fieldset>

        {/* Contato */}
        <fieldset>
          <legend>Contato</legend>
          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>WhatsApp:</label>
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>CPF/CNPJ:</label>
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
              name="cpfcnpj"
              value={formData.cpfcnpj}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        {/* Endereço */}
        <fieldset>
          <legend>Endereço</legend>
          <div className="form-group">
            <label>CEP:</label>
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Rua:</label>
            <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Número:</label>
            <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bairro:</label>
            <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Estado:</label>
            <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
          </div>
        </fieldset>

        {/* Classificação */}
        <fieldset>
          <legend>Classificação</legend>
          <div className="form-group">
            <label>Tipo:</label>
            <select name="tipo" value={formData.tipo} onChange={handleChange}>
              <option>Pessoa Física</option>
              <option>Pessoa Jurídica</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option>Ativo</option>
              <option>Inativo</option>
            </select>
          </div>
        </fieldset>

                {/* Observações */}
<fieldset>
  <legend>Observações</legend>
  <div className="form-group">
    <label>Observações:</label>
    <textarea
      name="observacoes"
      value={formData.observacoes}
      onChange={handleChange}
      rows="4"
      placeholder="Digite aqui informações adicionais..."
    ></textarea>
  </div>

  {/* Classificação */}
<fieldset>
  <legend>Classificação</legend>

  <div className="form-group">
    <label>Tipo:</label>
    <select name="tipo" value={formData.tipo} onChange={handleChange}>
      <option>Pessoa Física</option>
      <option>Pessoa Jurídica</option>
    </select>
  </div>

  {/* NOVO CAMPO: Tipo de Pessoa para a empresa */}
  <div className="form-group">
    <label>Tipo de Pessoa:</label>
    <select name="tipoPessoa" value={formData.tipoPessoa} onChange={handleChange}>
      <option value="">Selecione</option>
      <option value="Cliente">Cliente</option>
      <option value="Colaborador">Colaborador</option>
      <option value="Fornecedor">Fornecedor</option>
    </select>
  </div>

  <div className="form-group">
    <label>Status:</label>
    <select name="status" value={formData.status} onChange={handleChange}>
      <option>Ativo</option>
      <option>Inativo</option>
      <option>Bloqueado</option>
    </select>
  </div>

  <div className="form-group">
    <label>Data de Cadastro:</label>
    <input
      type="date"
      name="dataCadastro"
      value={formData.dataCadastro}
      onChange={handleChange}
    />
  </div>
</fieldset>
</fieldset>

        {/* Botões */}
        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <button type="submit" className="btn-salvar">
            {pessoaEditando ? "Salvar Alterações" : "Cadastrar"}
          </button>
          <button
            type="button"
            className="btn-lista"
            onClick={() => navigate("/pessoas")}
          >
            Ir para Lista
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroPessoas;
