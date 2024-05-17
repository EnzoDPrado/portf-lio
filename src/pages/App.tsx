import React, { useRef } from "react";
import "../styles/index.css";
import "../styles/reset.css";
import "swiper/css";
import { Header } from "../components/header";
import { SocialMedia } from "../types/socialMedia";
import { SocialMediaCard } from "../components/socialMediaCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EmailForms } from "../components/emailForms";

function App() {
  const sun = require("../assets/sun.png");
  const arrowDown = require("../assets/arrow.png");
  const statue = require("../assets/statue.png");
  const effects = require("../assets/effects.png");
  const crown = require("../assets/crown.png");

  const swiperRef = useRef<any>(null);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const socialMedias: Array<SocialMedia> = [
    {
      name: "Instagram",
      username: "enzo_skr15",
      link: "https://www.instagram.com/enzo_skr15/",
    },
    {
      name: "Linkedlin",
      username: "Enzo Diógenes do Prado",
      link: "https://www.linkedin.com/in/enzo-di%C3%B3genes-do-prado-8b4abb239/",
    },
    {
      name: "Github",
      username: "EnzoDPrado",
      link: "https://github.com/EnzoDPrado",
    },
  ];

  const projects: Array<NodeRequire> = [
    require("../assets/euLirio.png"),
    require("../assets/sukunaProject.png"),
    require("../assets/vinheriaProject.png"),
  ];

  return (
    <div className=" bg-backgroundDefault flex flex-col overflow-x-hidden">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectsRef}
        contactRef={contactRef}
      />
      <section
        ref={homeRef}
        className="w-screen h-min-screen flex flex-col justify-center items-center"
      >
        <div className="flex h-[80vh] justify-center items-center">
          <img src={sun} alt="sun vaporwave img" className="absolute  " />
          <h1 className="z-10 text-white text-8xl font-orbitron text-glitch text-center">
            Enzo D. Prado
          </h1>
        </div>
        <img
          src={arrowDown}
          alt="arrow down"
          className=" w-28  inset-0 mx-auto animate-bounce"
        />
      </section>

      <section
        ref={aboutRef}
        className="w-screen flex flex-col justify-center items-center pt-28 "
      >
        <div className="w-screen h-[100vh] lg:h-[380px] pt-5 pb-5 bg-angel bg-cover flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:max-w-96 lg:pl-16 justify-center flex flex-col items-center">
            <h1 className="text-5xl font-orbitron text-white hover:text-glitch text-center">
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
          <div className="w-[470px] lg:pr-16 flex flex-col justify-center items-center z-20">
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

        <div className="flex flex-col justify-center items-center pt-32 h-auto">
          <div className="w-screen items-start justify-start z-0 relative">
            <img
              src={effects}
              alt="effect effect"
              className="absolute top-[-180px] "
            />
          </div>
          <p className="text-5xl font-orbitron text-white text-center hover:text-glitch z-10">
            Contato - コンタクト
          </p>
          <div className="w-screen flex flex-col justify-between gap-10 lg:flex-row lg:pl-16 lg:pr-16 lg:pt-10 lg:z-10">
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

      <section
        ref={projectsRef}
        className="w-screen h-screen flex flex-col justify-center items-center pt-24"
      >
        <p className="text-5xl font-orbitron text-white text-center hover:text-glitch z-10">
          Projetos
        </p>
        <div className="h-[700px] pt-40 lg:w-[1200px] justify-center items-center lg:pt-10">
          <Swiper
            effect={"coverflow"}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
            grabCursor={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            className="swiper_container"
          >
            {projects.map((uri) => (
              <SwiperSlide>
                <img
                  src={uri.toString()}
                  alt="project"
                  className=" h-96  lg:h-[700px] lg:w-[1200px]"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div
                className="swiper-button-prev slider-arrow"
                onClick={() => swiperRef.current.slidePrev()}
              ></div>
              <div
                className="swiper-button-next slider-arrow"
                onClick={() => swiperRef.current.slideNext()}
              ></div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </section>

      <section
        ref={contactRef}
        className="w-screen flex flex-col justify-center items-center"
      >
        <div className="flex justify-between items-center w-screen pb-10 lg:pb-0">
          <img src={crown} alt="crown vaporwave" className="h-24  lg:h-1/2 lg:ml-28" />
          <p className="text-2xl lg:text-5xl font-orbitron text-white text-center hover:text-glitch z-10">
            Envie sua mensagem
          </p>
          <img src={crown} alt="crown vaporwave" className="h-24 lg:h-1/2  lg:mr-28" />
        </div>
        <EmailForms></EmailForms>
      </section>
    </div>
  );
}

export default App;
