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
    <form onSubmit={sendEmail} className="w-screen flex flex-col gap-3">
      <div className="flex w-screen justify-between pl-28 pr-28 gap-11">
        <input
          type="text"
          value={username}
          onChange={(value) => setUsername(value.target.value)}
          placeholder="Seu nome"
          className="h-20 w-6/12 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white pl-4"
        />
        <input
          placeholder="Seu email"
          type="text"
          value={userMail}
          onChange={(value) => setUserMail(value.target.value)}
          className="h-20 w-6/12 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white pl-4"
        />
      </div>
      <input
        type="text"
        placeholder="Assunto"
        value={subject}
        onChange={(value) => setSubject(value.target.value)}
        className="h-20 ml-28 mr-28 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white pl-4"
      />
      <textarea
        placeholder="Mensagem"
        value={message}
        maxLength={1000}
        onChange={(value) => setMessage(value.target.value)}
        className="h-96 ml-28 mr-28 bg-backgroundDefault border-2 rounded-2xl font-orbitron text-3xl text-white pl-4"
      />
      <div className="w-screen flex justify-end ">
        <input
          type="submit"
          value={loading ? "Enviando..." : "Enviar"}
          disabled={loading}
          className="mr-28 bg-backgroundDefault border-2 rounded-2xl h-28 w-64 text-white font-orbitron text-3xl"
        />
      </div>
    </form>
  );
};
