import React from "react";
import "../styles/index.css";
import { SocialMedia } from "../types/socialMedia";


export const SocialMediaCard = (props: SocialMedia) => {
  
  let icon = require("https://static.vecteezy.com/ti/vetor-gratis/p1/7126739-icone-de-ponto-de-interrogacao-gratis-vetor.jpg")

  switch(props.name){
    case "Instagram" :
        icon = require("../assets/instagram.png")
        break
    case "Linkedlin" :
        icon = require("../assets/linkedin.png")
        break
    case "Github" :
        icon = require("../assets/github.png")
        break
    default:
        break
  }

  return (
    <div className="flex flex-col justify-between items-center h-80 w-96 border cursor-pointer" onClick={() => window.open(props.link, '_blank')}>
      <p className="text-[40px] font-orbitron text-white text-center hover:text-glitch pt-6">
        {props.name}
      </p>
      <img src={icon} alt="social media icon" className="h-28 w-28" />
      <p className="text-2xl font-orbitron text-white text-center hover:text-glitch pb-6">
        {props.username}
      </p>
    </div>
  );
};
