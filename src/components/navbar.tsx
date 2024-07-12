import React from "react";

export function NavBar() {
  return (
    <nav className="text-x1 flex w-full items-center justify-between p-4 font-semibold md:flex-row md:items-center md:justify-between bg-dark">
      <div className="flex items-center">
        <a href="/">
          <button>
            <img
              src="/mango.png"
              alt="Logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </button>
        </a>
      </div>
      <div className={`space-x-4 font-montserrat md:flex`}>
        <a href="/" className="hover:text-gray-700">
          Search
        </a>
        <a href="/manga" className="hover:text-gray-700">
          TopManga
        </a>
      </div>
      <div className="flex flex-row"></div>
    </nav>
  );
}
