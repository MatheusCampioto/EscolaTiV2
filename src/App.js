import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login
import Login from "./login/js/Login";

// Pessoas
import { ListaPessoas, CadastroPessoas } from "./pessoas/js";

// Produtos
import { Produtos, CadastroProduto } from "./produtos/js";

// Pedidos
import { CadastroPedido, ControlePedido } from "./pedidos/js";

// Relatórios
import Relatorios from "./relatorios/js/Relatorios";
import {
  RelatorioPessoas,
  RelatorioProdutos,
  RelatorioPedidos,
  RelatorioFinanceiro,
  RelatorioUsuarios,
} from "./relatorios/js";

// Usuários
import { Usuarios, CadastroUsuario, LiberaAcessos } from "./usuarios/js";

// Financeiro
import { CadastroAPagar, CadastroAReceber } from "./financeiro/js";

// Dashboard e Estoque
import Dashboard from "./dashboard/js/Dashboard";
import ControleEstoque from "./estoque/js/ControleEstoque";

// Menu lateral
import Menu from "./menu/js/Menu";

// Contextos globais
import { PessoasProvider } from "./context/PessoasContext";
import { PedidosProvider } from "./context/PedidosContext";

// Estilos globais
import "./App.css";
import "./styles/buttons.css";
import "./styles/reset.css";

// Layouts
import AuthLayout from "./layouts/AuthLayout";

function MainLayout({ children }) {
  return (
    <div className="app-container" style={{ display: "flex" }}>
      <Menu />
      <div className="content" style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <PessoasProvider>
        <PedidosProvider>
          <Routes>
            {/* Login isolado com fundo azul */}
            <Route
              path="/"
              element={
                <AuthLayout>
                  <Login />
                </AuthLayout>
              }
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              }
            />

            {/* Relatórios */}
            <Route
              path="/relatorios"
              element={
                <MainLayout>
                  <Relatorios />
                </MainLayout>
              }
            />
            <Route
              path="/relatorios/pessoas"
              element={
                <MainLayout>
                  <RelatorioPessoas />
                </MainLayout>
              }
            />
            <Route
              path="/relatorios/produtos"
              element={
                <MainLayout>
                  <RelatorioProdutos />
                </MainLayout>
              }
            />
            <Route
              path="/relatorios/pedidos"
              element={
                <MainLayout>
                  <RelatorioPedidos />
                </MainLayout>
              }
            />
            <Route
              path="/relatorios/financeiro"
              element={
                <MainLayout>
                  <RelatorioFinanceiro />
                </MainLayout>
              }
            />
            <Route
              path="/relatorios/usuarios"
              element={
                <MainLayout>
                  <RelatorioUsuarios />
                </MainLayout>
              }
            />

            {/* Pessoas */}
            <Route
              path="/pessoas"
              element={
                <MainLayout>
                  <ListaPessoas />
                </MainLayout>
              }
            />
            <Route
              path="/pessoas/cadastro"
              element={
                <MainLayout>
                  <CadastroPessoas />
                </MainLayout>
              }
            />

            {/* Produtos */}
            <Route
              path="/produtos"
              element={
                <MainLayout>
                  <Produtos />
                </MainLayout>
              }
            />
            <Route
              path="/produtos/cadastro"
              element={
                <MainLayout>
                  <CadastroProduto />
                </MainLayout>
              }
            />

            {/* Pedidos */}
            <Route
              path="/pedidos/cadastro"
              element={
                <MainLayout>
                  <CadastroPedido />
                </MainLayout>
              }
            />
            <Route
              path="/pedidos/controle"
              element={
                <MainLayout>
                  <ControlePedido />
                </MainLayout>
              }
            />

            {/* Financeiro */}
            <Route
              path="/financeiro/pagar"
              element={
                <MainLayout>
                  <CadastroAPagar />
                </MainLayout>
              }
            />
            <Route
              path="/financeiro/receber"
              element={
                <MainLayout>
                  <CadastroAReceber />
                </MainLayout>
              }
            />

            {/* Usuários */}
            <Route
              path="/usuarios"
              element={
                <MainLayout>
                  <Usuarios />
                </MainLayout>
              }
            />
            <Route
              path="/usuarios/cadastro"
              element={
                <MainLayout>
                  <CadastroUsuario />
                </MainLayout>
              }
            />
            <Route
              path="/usuarios/acessos"
              element={
                <MainLayout>
                  <LiberaAcessos />
                </MainLayout>
              }
            />

            {/* Estoque */}
            <Route
              path="/estoque/controle"
              element={
                <MainLayout>
                  <ControleEstoque />
                </MainLayout>
              }
            />
          </Routes>
        </PedidosProvider>
      </PessoasProvider>
    </Router>
  );
}

export default App;