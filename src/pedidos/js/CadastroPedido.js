import { useState, useContext } from "react";
import { PedidosContext } from "../../context/PedidosContext";
import "../css/CadastroPedido.css";

function CadastroPedido() {
  const { adicionarPedido } = useContext(PedidosContext);

  const [formData, setFormData] = useState({
    cliente: "",
    produto: "",
    quantidade: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarPedido(formData);
    alert("Pedido salvo com sucesso!");
    setFormData({ cliente: "", produto: "", quantidade: "", data: "" });
  };

  return (
    <div className="cadastro-pedido">
      <h1>Cadastro de Pedido</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cliente:</label>
          <input
            type="text"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
            placeholder="Nome do cliente"
            required
          />
        </div>
        <div>
          <label>Produto:</label>
          <input
            type="text"
            name="produto"
            value={formData.produto}
            onChange={handleChange}
            placeholder="Produto"
            required
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            placeholder="Quantidade"
            required
          />
        </div>
        <div>
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Salvar Pedido</button>
      </form>
    </div>
  );
}

export default CadastroPedido;