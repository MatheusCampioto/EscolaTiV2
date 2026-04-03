// server.js
const express = require("express");
const app = express();
const PORT = 3001;

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Lista de usuários em memória (simulação de banco de dados)
let usuarios = [
  { id: 1, nome: "Admin", email: "admin@escolati.com" },
  { id: 2, nome: "Maria Silva", email: "maria@escolati.com" },
  { id: 3, nome: "João Souza", email: "joao@escolati.com" }
];

// Rota de teste
app.get("/", (req, res) => {
  res.send("Backend rodando na porta 3001!");
});

// Rota para listar usuários
app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});

// Rota para cadastrar novo usuário
app.post("/api/usuarios", (req, res) => {
  const novoUsuario = req.body;
  novoUsuario.id = usuarios.length + 1; // gera ID simples
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});