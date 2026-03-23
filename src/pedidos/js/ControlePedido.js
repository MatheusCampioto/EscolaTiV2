import { useContext } from "react";
import { PedidosContext } from "../../context/PedidosContext";
import "../css/ControlePedido.css";

function ControlePedido() {
  const { pedidos } = useContext(PedidosContext);

  return (
    <div className="controle-pedido">
      <h1>Controle de Pedidos</h1>
      {pedidos.length === 0 ? (
        <p>Nenhum pedido cadastrado ainda.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td>{pedido.cliente}</td>
                <td>{pedido.produto}</td>
                <td>{pedido.quantidade}</td>
                <td>{pedido.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ControlePedido;