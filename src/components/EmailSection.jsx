"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.status === 200) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    } else {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 relative my-12 md:my-12">
          Contáctame
        </h2>
      </div>
      <div
        id="contact"
        className="grid md:grid-cols-2 my-10 md:my-10 py-24 gap-4 relative"
      >
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">Vamos a Conectarnos</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Me complace saber que está interesado en comunicarse conmigo. Mi bandeja de entrada está siempre abierta y me esforzaré por responder a cualquier consulta o comentario que tenga, ya sea una pregunta formal o simplemente un saludo. No dude en ponerse en contacto.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/evilBetooxx">
              <Image src={GithubIcon} alt="Icono de Github" />
            </Link>
            <Link href="https://www.linkedin.com/in/alberto-avenda%C3%B1o-2370aa282/">
              <Image src={LinkedinIcon} alt="Icono de Linkedin" />
            </Link>
          </div>
        </div>
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              ¡Mensaje enviado exitosamente!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Su correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="beto@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Asunto
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Consulta sobre el proyecto"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Compártame sus comentarios o solicitudes..."
                />
              </div>
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;