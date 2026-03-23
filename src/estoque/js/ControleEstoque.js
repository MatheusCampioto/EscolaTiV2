import { useState } from "react";
import "../css/ControleEstoque.css";

function ControleEstoque() {
  const [estoque, setEstoque] = useState([
    { id: 1, nome: "Produto A", quantidade: 10 },
    { id: 2, nome: "Produto B", quantidade: 5 },
    { id: 3, nome: "Produto C", quantidade: 20 },
  ]);

  const atualizarEstoque = (id, tipo) => {
    setEstoque((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantidade:
                tipo === "entrada"
                  ? item.quantidade + 1
                  : item.quantidade > 0
                  ? item.quantidade - 1
                  : 0,
            }
          : item
      )
    );
  };

  return (
    <div className="controle-estoque">
      <h1>Controle de Estoque</h1>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>
                <button
                  className="btn-entrada"
                  onClick={() => atualizarEstoque(item.id, "entrada")}
                >
                  Entrada
                </button>
                <button
                  className="btn-saida"
                  onClick={() => atualizarEstoque(item.id, "saida")}
                >
                  Saída
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ControleEstoque;