'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          {/* Adicione sua logo de texto ou imagem aqui */}
          <span className="text-xl font-bold mr-4">ViaAPI</span>
        </div>
        {/* Menu Hamburguer para telas pequenas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl font-bold focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {/* Opções do Menu Hamburguer em uma div separada */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <nav>
          <Link href="/">
            <span className="block text-xl font-bold pt-6 text-center bg-gray-700">Pesquisa</span>
          </Link>
          <Link href="/autopreenchimento">
            <span className="block text-xl font-bold pt-6 pb-6 text-center bg-gray-700">Autopreenchimento</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
