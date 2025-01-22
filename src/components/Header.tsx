import React from "react";


const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md">
       <div className="container  items-center p-4">
        <nav className="flex gap-4 ">
          <a href="/" className="hover:underline">
            Login
          </a>
          <a href="Autenticado" className="hover:underline">
            teste page autenticado
          </a>
          <a href="#contact" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;