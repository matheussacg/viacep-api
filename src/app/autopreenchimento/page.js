"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Autopreenchimento() {
  const [cep, setCep] = useState("");

  const [endereco, setEndereco] = useState({
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const fetchEndereco = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setEndereco({
        logradouro: data.logradouro || "",
        complemento: data.complemento || "",
        bairro: data.bairro || "",
        localidade: data.localidade || "",
        uf: data.uf || "",
      });
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

//   useEffect(() => {
//     if (cep.length === 8) {
//       fetchEndereco();
//     }
//   }, [cep]);

  return (
    <div>
      <Header />
      <main className="h-screen">
        <div className="flex flex-col justify-center items-center gap-4 p-4 mt-20">
          <h1 className="font-bold text-2xl underline mb-10">
            Autopreenchimento CEP
          </h1>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">CEP:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={cep}
              onChange={handleInputChange}
              onBlur={fetchEndereco}
              placeholder="Digite o CEP"
            />
          </div>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">Rua:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={endereco.logradouro}
              readOnly
            />
          </div>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">Complemento:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={endereco.complemento}
              readOnly
            />
          </div>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">Bairro:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={endereco.bairro}
              readOnly
            />
          </div>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">Cidade:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={endereco.localidade}
              readOnly
            />
          </div>
          <div className="flex flex-col w-[80%] md:w-[30%]">
            <label className="font-bold">Estado:</label>
            <input
              className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
              value={endereco.uf}
              readOnly
            />
          </div>
          {endereco.uf === "" && cep !== "" && <p className="font-bold text-red-500 mt-6">CEP não encontrado...</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
