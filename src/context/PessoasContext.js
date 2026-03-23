import React, { createContext, useState, useEffect } from "react";

export const PessoasContext = createContext();

export function PessoasProvider({ children }) {
  const [pessoas, setPessoas] = useState(() => {
    const pessoasSalvas = localStorage.getItem("pessoas");
    return pessoasSalvas ? JSON.parse(pessoasSalvas) : [];
  });

  const [pessoaEditando, setPessoaEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  }, [pessoas]);

  const adicionarPessoa = (pessoa) => {
    const novaPessoa = {
      id: Date.now(), // gera um ID único baseado no timestamp
      dataCadastro: pessoa.dataCadastro || new Date().toISOString().split("T")[0], // se não vier do form, usa a data atual
      ...pessoa,
    };
    setPessoas((prev) => [...prev, novaPessoa]);
  };

  const atualizarPessoa = (id, pessoaAtualizada) => {
    setPessoas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...pessoaAtualizada } : p))
    );
    setPessoaEditando(null);
  };

  const excluirPessoa = (id) => {
    setPessoas((prev) => prev.filter((p) => p.id !== id));
  };

  const resetarPessoas = () => {
    setPessoas([]);
    localStorage.removeItem("pessoas");
  };

  const exportarPessoas = () => {
    const dados = JSON.stringify(pessoas, null, 2);
    const blob = new Blob([dados], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pessoas.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PessoasContext.Provider
      value={{
        pessoas,
        adicionarPessoa,
        atualizarPessoa,
        excluirPessoa,
        resetarPessoas,
        exportarPessoas,
        pessoaEditando,
        setPessoaEditando,
      }}
    >
      {children}
    </PessoasContext.Provider>
  );
}