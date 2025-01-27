import viteLogo from "/vite.svg";
import NavBar from "../components/NavBar";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-container">
      <div className="logo-container justify-between items-center flex p-4 bg-black">
        <img src={viteLogo} className="logo w-8" alt="Vite logo" />
        <h1 className="title text-white ml-4 text-[15pt]">
          Selling Management App
        </h1>
        <button
          className="menu-btn border pl-1 pr-1 pt-sm pb-sm rounded-lg"
          onClick={() => toggleNavbar()}
        >
          <i className="bi bi-list text-white text-3xl"></i>
        </button>
      </div>
      <div className="nav-bar-container">
        {isOpen ? <NavBar closeNavbar={() => closeNavbar()} /> : null}
      </div>
    </div>
  );
}
