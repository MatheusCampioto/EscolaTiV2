import { useState } from "react";
import "../css/LiberaAcessos.css";

function LiberaAcessos() {
  const [permissoes, setPermissoes] = useState({
    clientes: false,
    produtos: false,
    financeiro: false,
    estoque: false,
    relatorios: false,
    usuarios: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPermissoes((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSalvar = () => {
    console.log("Permissões salvas:", permissoes);
    alert("Permissões atualizadas com sucesso!");
  };

  return (
    <div className="libera-acessos">
      <h1>Liberação de Acessos</h1>
      <form>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="clientes"
              checked={permissoes.clientes}
              onChange={handleChange}
            />
            Clientes
          </label>

          <label>
            <input
              type="checkbox"
              name="produtos"
              checked={permissoes.produtos}
              onChange={handleChange}
            />
            Produtos
          </label>

          <label>
            <input
              type="checkbox"
              name="financeiro"
              checked={permissoes.financeiro}
              onChange={handleChange}
            />
            Financeiro
          </label>

          <label>
            <input
              type="checkbox"
              name="estoque"
              checked={permissoes.estoque}
              onChange={handleChange}
            />
            Estoque
          </label>

          <label>
            <input
              type="checkbox"
              name="relatorios"
              checked={permissoes.relatorios}
              onChange={handleChange}
            />
            Relatórios
          </label>

          <label>
            <input
              type="checkbox"
              name="usuarios"
              checked={permissoes.usuarios}
              onChange={handleChange}
            />
            Usuários
          </label>
        </div>

        <button type="button" className="btn-salvar" onClick={handleSalvar}>
          Salvar Permissões
        </button>
      </form>
    </div>
  );
}

export default LiberaAcessos;