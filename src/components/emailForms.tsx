import React, { useState } from "react";
import "../styles/index.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { validateMail } from "../utils/emailRegex";


export const EmailForms = () => {
  const [loading, setIsloading] = useState(false)

  const [username, setUsername] = useState<string>();
  const [userMail, setUserMail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [subject, setSubject] = useState<string>();

  const validateEntrys = async (
    username: string,
    email: string,
    message: string
  ): Promise<boolean> => {
    if (!username || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "Faltando campos obrigatórios",
        icon: "error",
      });
      return false;
    }else if(!validateMail(email)){
        Swal.fire({
            title: "Error!",
            text: "Email inválido",
            icon: "error",
          });
        return false
    }

    return true;
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidated = await validateEntrys(username!, userMail!, message!);

    if (isValidated) {
      const templateParams = {
        from_name: username,
        message: message,
        email: userMail,
      };
      setIsloading(true)
      emailjs
        .send(
          "service_2lgl79j",
          "template_rg5o6h4",
          templateParams,
          "ese77rqAlhyDbR5a_"
        )
        .then(() => {
            Swal.fire({
                title: "Sucesso!",
                text: "Email enviado com sucesso, logo menos te retornarei!",
                icon: "success",
              });

              setMessage("")
              setUsername("")
              setUserMail("")
              setSubject("")
        }).finally(() => setIsloading(false))
    }
  };

  return (
    <form onSubmit={sendEmail} className="w-screen flex flex-col gap-3 pl-4 pr-4">
      <div className="flex  flex-col lg:flex-row justify-between lg:pl-28 lg:pr-28 lg:gap-11 gap-3">
        <input
          type="text"
          value={username}
          onChange={(value) => setUsername(value.target.value)}
          placeholder="Seu nome"
          className="h-20 lg:w-6/12 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white lg:pl-4"
        />
        <input
          placeholder="Seu email"
          type="text"
          value={userMail}
          onChange={(value) => setUserMail(value.target.value)}
          className="h-20 lg:w-6/12 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white lg:pl-4"
        />
      </div>
      <input
        type="text"
        placeholder="Assunto"
        value={subject}
        onChange={(value) => setSubject(value.target.value)}
        className="h-20 lg:ml-28 lg:mr-28 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white lg:pl-4"
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        maxLength={1000}
        onChange={(value) => setMessage(value.target.value)}
        className="h-96 lg:ml-28 lg:mr-28 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white lg:pl-4"
      />
      <div className="flex justify-end pb-4">
        <input
          type="submit"
          value={loading ? "Enviando..." : "Enviar"}
          disabled={loading}
          className="lg:mr-28 bg-backgroundDefault border-2 rounded-2xl h-28 w-64 text-white font-orbitron text-3xl"
        />
      </div>
    </form>
  );
};
