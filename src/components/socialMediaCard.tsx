import React from "react";
import "../styles/index.css";
import { SocialMedia } from "../types/socialMedia";


export const SocialMediaCard = (props: SocialMedia) => {
  
  let icon = require("../assets/empty.jpg")

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
    <div className="flex flex-col justify-between items-center h-80 lg:w-96 border cursor-pointer" onClick={() => window.open(props.link, '_blank')}>
      <p className="text-[40px] font-orbitron text-white text-center hover:text-glitch pt-6">
        {props.name}
      </p>
      <img src={icon} alt="social media icon" className="h-20 w-20" />
      <p className="text-2xl font-orbitron text-white text-center hover:text-glitch pb-6 pr-1 pl-1">
        {props.username}
      </p>
    </div>
  );
};
