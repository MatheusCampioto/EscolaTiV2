import "./Usuarios.css";

function Usuarios() {
  return (
    <div className="usuarios-container">
      <h1>Página de Usuários</h1>
      <div className="usuario-card">
        <strong>Admin</strong> - admin@escolati.com
      </div>
      <div className="usuario-card">
        <strong>Maria Silva</strong> - maria@escolati.com
      </div>
      <div className="usuario-card">
        <strong>João Souza</strong> - joao@escolati.com
      </div>
    </div>
  );
}

export default Usuarios;