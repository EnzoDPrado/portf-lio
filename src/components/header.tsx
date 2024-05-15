import React from "react";
import "../styles/index.css";

const logo = require("../assets/logo.png");

export const Header = () => {
  return (
    <div className="h-20 w-screen pt-9 pl-14 pr-14 flex justify-between items-center">
      <img src={logo} alt="logo" className="h-20 w-28" />
      <ul className="flex gap-8">
        <li className="font-orbitron text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer">
          home
        </li>
        <li className="font-orbitron text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer">
          sobre
        </li>
        <li className="font-orbitron text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer">
          projetos
        </li>
        <li className="font-orbitron text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer">
          contato
        </li>
      </ul>
    </div>
  );
};
