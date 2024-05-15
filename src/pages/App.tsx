import React from "react";
import "../styles/index.css";
import "../styles/reset.css";

import { Header } from "../components/header";
import { SocialMedia } from "../types/socialMedia";
import { SocialMediaCard } from "../components/socialMediaCard";
function App() {
  const sun = require("../assets/sun.png");
  const arrowDown = require("../assets/arrow.png");
  const statue = require("../assets/statue.png");
  const effects = require("../assets/effects.png")

  const socialMedias: Array<SocialMedia> = [
    {
      name: "Instagram",
      username: "enzo_skr15",
      link: "https://www.instagram.com/enzo_skr15/"
    },
    {
      name:"Linkedlin",
      username:"Enzo Diógenes do Prado",
      link: "https://www.linkedin.com/in/enzo-di%C3%B3genes-do-prado-8b4abb239/"
    },
    {
      name: "Github",
      username:"EnzoDPrado",
      link: "https://github.com/EnzoDPrado"
    }
  ];

  return (
    <div className=" bg-backgroundDefault flex flex-col overflow-x-hidden">
      <Header />
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex h-screen justify-center items-center">
          <img src={sun} alt="" className="absolute h-[600px] w-[750px]" />
          <h1 className="z-10 text-white text-8xl font-orbitron text-glitch">
            Enzo D. Prado
          </h1>
        </div>
        <img
          src={arrowDown}
          alt="arrow down"
          className="h-24 w-28  inset-0 mx-auto animate-bounce"
        />
      </section>

      <section className="w-screen h-screen flex flex-col">
        <div className="w-screen h-[380px] bg-angel bg-cover flex items-center justify-between">
          <div className="w-[470px] pl-16">
            <h1 className="text-5xl font-orbitron text-white text-center hover:text-glitch">
              Sobre mim
            </h1>
            <p className="text-base text-white font-orbitron text-center pt-8">
              Olá, eu me chamo Enzo, atualmente estou cursando engenharia de
              software na FIAP, e finalizei o curso técnico de desenvolvimento
              de sistemas no SENAI jandira.
            </p>
            <p className="text-base text-white font-orbitron text-center">
              Meu primeiro contato com programação foi durante a pandemia,
              depois que tive o primeiro contato resolvi me aprofundar mais e
              aqui estou hoje.
            </p>
          </div>
          <img src={statue} alt="statue" className="h-44 w-44" />
          <div className="w-[470px] pr-16">
            <h1 className="text-5xl font-orbitron text-white text-center hover:text-glitch">
              Proeficiências
            </h1>
            <ul className="pt-8">
              <li className="text-base text-white font-orbitron text-center">
                html
              </li>
              <li className="text-base text-white font-orbitron text-center">
                css
              </li>
              <li className="text-base text-white font-orbitron text-center">
                TypeScript
              </li>
              <li className="text-base text-white font-orbitron text-center">
                React
              </li>
              <li className="text-base text-white font-orbitron text-center">
                React Native
              </li>
              <li className="text-base text-white font-orbitron text-center">
                Node.js
              </li>
              <li className="text-base text-white font-orbitron text-center">
                Inglês avançado
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center pt-32">
          <div className="w-screen items-start justify-start z-0 relative">
            <img src={effects} alt="" className="absolute top-[-180px]"/>
          </div>
          <p className="text-5xl font-orbitron text-white text-center hover:text-glitch z-10">
            Contato - コンタクト
          </p>
          <div className="w-screen flex justify-between pl-16 pr-16 pt-10 z-10">
            {socialMedias.map((socialMedia) => (
              <SocialMediaCard
                name={socialMedia.name}
                username={socialMedia.username}
                link={socialMedia.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
