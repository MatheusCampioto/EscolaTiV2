import React, { useState } from "react";
import "../css/CadastroProduto.css";
import {
  FaBox, FaTags, FaDollarSign, FaWarehouse, FaBarcode, FaIndustry,
  FaTruck, FaBalanceScale, FaRulerCombined, FaCalendarAlt, FaToggleOn,
  FaSave, FaTimes, FaMapMarkerAlt
} from "react-icons/fa";

function CadastroProduto() {
  const [produto, setProduto] = useState({
    id: Date.now(),
    nome: "",
    categoria: "",
    descricao: "",
    marca: "",
    fornecedor: "",
    codigoBarras: "",
    precoCusto: "",
    precoVenda: "",
    margemLucro: "",
    quantidade: "",
    estoqueMinimo: "",
    peso: "",
    dimensoes: "",
    validade: "",
    localizacao: "",
    status: "ativo",
    dataCadastro: new Date().toLocaleDateString(),
    observacoes: "",
    ncm: "",
    cfop: "",
    categoriaFiscal: "",
    unidade: "",
    garantia: "",
    fotoPrincipal: "",
    galeria: [],
    localizacaoDetalhada: "",
    leadTime: ""
  });

  const [mensagem, setMensagem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prev) => ({ ...prev, [name]: value }));
  };

  const calcularMargem = () => {
    const custo = parseFloat(produto.precoCusto);
    const venda = parseFloat(produto.precoVenda);
    if (!isNaN(custo) && !isNaN(venda) && custo > 0) {
      return (((venda - custo) / custo) * 100).toFixed(2);
    }
    return "";
  };

  const limparCampos = () => {
    setProduto({
      id: Date.now(),
      nome: "",
      categoria: "",
      descricao: "",
      marca: "",
      fornecedor: "",
      codigoBarras: "",
      precoCusto: "",
      precoVenda: "",
      margemLucro: "",
      quantidade: "",
      estoqueMinimo: "",
      peso: "",
      dimensoes: "",
      validade: "",
      localizacao: "",
      status: "ativo",
      dataCadastro: new Date().toLocaleDateString(),
      observacoes: "",
      ncm: "",
      cfop: "",
      categoriaFiscal: "",
      unidade: "",
      garantia: "",
      fotoPrincipal: "",
      galeria: [],
      localizacaoDetalhada: "",
      leadTime: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!produto.nome || !produto.categoria || !produto.precoCusto || !produto.precoVenda) {
      setMensagem({
        tipo: "erro",
        texto: "Preencha todos os campos obrigatórios: Nome, Categoria, Preço de Custo e Preço de Venda."
      });
      setTimeout(() => setMensagem(null), 4000);
      return;
    }

    const produtoFinal = { ...produto, margemLucro: calcularMargem() };
    console.log("Produto cadastrado:", produtoFinal);

    setMensagem({
      tipo: "sucesso",
      texto: "Produto cadastrado com sucesso!"
    });

    setTimeout(() => setMensagem(null), 4000);
    limparCampos();
  };

  return (
    <div className="cadastro-produto">
      <h1>Cadastro de Produto</h1>

      {mensagem && (
        <div className={`mensagem-feedback ${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}

      <form onSubmit={handleSubmit}>
{/* Identificação */}
  <fieldset>
    <legend>Identificação</legend>
    <div className="form-group">
      <label>ID:</label>
      <input type="text" value={produto.id} disabled />
    </div>
    <div className="form-group">
      <label>Nome:</label>
      <div className="input-icon">
        <FaBox />
        <input type="text" name="nome" value={produto.nome} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Categoria:</label>
      <div className="input-icon">
        <FaTags />
        <input type="text" name="categoria" value={produto.categoria} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Descrição:</label>
      <textarea name="descricao" value={produto.descricao} onChange={handleChange} />
    </div>
  </fieldset>

  {/* Comercial */}
  <fieldset>
    <legend>Comercial</legend>
    <div className="form-group">
      <label>Marca:</label>
      <div className="input-icon">
        <FaIndustry />
        <input type="text" name="marca" value={produto.marca} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Fornecedor:</label>
      <div className="input-icon">
        <FaTruck />
        <input type="text" name="fornecedor" value={produto.fornecedor} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Código de Barras:</label>
      <div className="input-icon">
        <FaBarcode />
        <input type="text" name="codigoBarras" value={produto.codigoBarras} onChange={handleChange} />
      </div>
    </div>
  </fieldset>

  {/* Preços */}
  <fieldset>
    <legend>Preços</legend>
    <div className="form-group">
      <label>Preço de Custo:</label>
      <div className="input-icon">
        <FaDollarSign />
        <input type="number" name="precoCusto" value={produto.precoCusto} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Preço de Venda:</label>
      <div className="input-icon">
        <FaDollarSign />
        <input type="number" name="precoVenda" value={produto.precoVenda} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Margem de Lucro (%):</label>
      <input type="text" value={calcularMargem()} disabled />
    </div>
  </fieldset>

  {/* Estoque */}
  <fieldset>
    <legend>Estoque</legend>
    <div className="form-group">
      <label>Quantidade:</label>
      <div className="input-icon">
        <FaWarehouse />
        <input type="number" name="quantidade" value={produto.quantidade} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Estoque Mínimo:</label>
      <input type="number" name="estoqueMinimo" value={produto.estoqueMinimo} onChange={handleChange} />
    </div>
  </fieldset>

  {/* Fiscal */}
<fieldset>
  <legend>Fiscal</legend>
  <div className="form-group">
    <label>NCM:</label>
    <input type="text" name="ncm" value={produto.ncm} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>CFOP:</label>
    <input type="text" name="cfop" value={produto.cfop} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Categoria Fiscal:</label>
    <input type="text" name="categoriaFiscal" value={produto.categoriaFiscal} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Unidade:</label>
    <input type="text" name="unidade" value={produto.unidade} onChange={handleChange} />
  </div>
</fieldset>

{/* Garantia */}
<fieldset>
  <legend>Garantia</legend>
  <div className="form-group">
    <label>Garantia (meses):</label>
    <input type="number" name="garantia" value={produto.garantia} onChange={handleChange} />
  </div>
</fieldset>

  {/* Logística */}
  <fieldset>
    <legend>Logística</legend>
    <div className="form-group">
      <label>Peso:</label>
      <div className="input-icon">
        <FaBalanceScale />
        <input type="text" name="peso" value={produto.peso} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Dimensões:</label>
      <div className="input-icon">
        <FaRulerCombined />
        <input type="text" name="dimensoes" value={produto.dimensoes} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Validade:</label>
      <div className="input-icon">
        <FaCalendarAlt />
        <input type="date" name="validade" value={produto.validade} onChange={handleChange} />
      </div>
    </div>
    <div className="form-group">
      <label>Localização:</label>
      <div className="input-icon">
        <FaMapMarkerAlt />
        <input type="text" name="localizacao" value={produto.localizacao} onChange={handleChange} />
      </div>
    </div>
  </fieldset>

  {/* Status */}
  <fieldset>
    <legend>Status</legend>
    <div className="form-group">
      <label>Status:</label>
      <div className="input-icon">
        <FaToggleOn />
        <select name="status" value={produto.status} onChange={handleChange}>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>
    </div>
  </fieldset>

  {/* Observações */}
  <fieldset>
    <legend>Observações</legend>
    <textarea name="observacoes" value={produto.observacoes} onChange={handleChange} />
  </fieldset>

  {/* Botões */}
  <div className="acoes-form">
    <button type="submit" className="btn-salvar">
      <FaSave /> Salvar
    </button>
    <button type="button" className="btn-limpar" onClick={limparCampos}>
      <FaTimes /> Limpar
    </button>
  </div>
</form>
    </div>
  );
}

export default CadastroProduto;