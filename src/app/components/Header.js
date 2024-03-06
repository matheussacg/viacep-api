'use client'

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold">ViaCEP</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-xl font-bold focus:outline-none"
          >
            ☰
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? "flex-col" : "hidden"}`}>
          <Link href="/">
            <span
              className="text-xl font-bold md:mr-4 mb-2 md:mb-0 md:ml-4"
              onClick={toggleMenu}
            >
              Pesquisa
            </span>
          </Link>
          <Link href="/autopreenchimento">
            <span className="text-xl font-bold md:ml-4" onClick={toggleMenu}>
              Autopreenchimento
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
