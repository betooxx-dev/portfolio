"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hola, soy
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Alberto Avendaño",
                1000,
                "Desarrollador Web",
                1000,
                "Desarrollador Móvil",
                1000,
                "Hacker Ético",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* Descripción más carismática */}
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            ¡Bienvenido a mi mundo digital! Aquí encontrarás innovación, creatividad y soluciones tecnológicas que transforman ideas en realidad. ¿Listo para embarcarte en esta aventura tech?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
            >
              Contáctame
            </Link>
            {/* Botón de Descargar CV más responsive */}
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
              onClick={() => window.open("/assets/cv.pdf")}
            >
              Descargar CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/header_memoji.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderSection;