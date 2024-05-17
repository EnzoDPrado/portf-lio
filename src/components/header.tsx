import React from "react";
import "../styles/index.css";

interface HeaderParams {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const Header = (props: HeaderParams) => {
  const logo = require("../assets/logo.png");

  const scrollToHome = () => {
    if (props.homeRef.current) {
      props.homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (props.aboutRef.current) {
      props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    if (props.projectRef.current) {
      props.projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (props.contactRef.current) {
      props.contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-20 w-screen lg:pl-14 lg:pr-14 flex justify-center lg:justify-between items-center fixed bg-backgroundDefault z-50">
      <img src={logo} alt="logo" className="h-20 w-28 hidden sm:block" />
      <ul className="flex gap-8">
        <li
          onClick={scrollToHome}
          className="font-orbitron lg:text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer"
        >
          home
        </li>
        <li
          onClick={scrollToAbout}
          className="font-orbitron lg:text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer"
        >
          sobre
        </li>
        <li
          onClick={scrollToProjects}
          className="font-orbitron lg:text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer"
        >
          projetos
        </li>
        <li
          onClick={scrollToContact}
          className="font-orbitron lg:text-3xl hover:text-glitch text-glitch-duration-slow text-white cursor-pointer"
        >
          contato
        </li>
      </ul>
    </div>
  );
};
