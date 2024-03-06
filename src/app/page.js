"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [endereco, setEndereco] = useState({});
  const [cep, setCep] = useState("");
  const baseURL = "https://viacep.com.br/ws/";

  const fetchApi = async () => {
    try {
      const response = await fetch(`${baseURL}${cep}/json/`);
      const data = await response.json();
      setEndereco(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  const handleInputChange = (e) => {
    setCep(e.target.value);
  };

  const handleSearch = () => {
    fetchApi();
  };

  return (
    <div className="">
      <Header />
      <div className="md:container mx-auto p-4 md:py-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 h-screen">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold">CEP</h1>
            <div className="flex flex-col md:flex-row items-center">
              <input
                className="p-3 mb-2 md:mb-0 md:mr-2 bg-gray-100 rounded"
                value={cep}
                onChange={handleInputChange}
                placeholder="Digite o CEP"
              />
              <button
                onClick={handleSearch}
                className="font-bold bg-gray-500 p-3 rounded text-white cursor-pointer"
              >
                Buscar
              </button>
            </div>
          </div>
          {Object.keys(endereco).length > 0 && (
            <div className="border-t md:border-0 md:border-l-2 border-gray-400 mt-4 md:mt-0 pt-4 md:pl-4">
              <pre className="m-3">{JSON.stringify(endereco, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
