import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/Login.css";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples: só aceita admin / 1234
    if (usuario === "admin" && senha === "1234") {
      navigate("/dashboard");
    } else {
      setErro("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuário"
              required
            />
          </div>
          <div className="login-form-group">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        {erro && <p className="erro">{erro}</p>}
      </div>
    </div>
  );
}

export default Login;