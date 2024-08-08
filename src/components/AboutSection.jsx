"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className="list-disc pl-2">
        <img src="https://skillicons.dev/icons?i=git,aws,docker,dynamodb,express,firebase,github,html,java,js,linux,md,materialui,mongodb,mysql,nextjs,nodejs,postman,py,react,tailwind,ts,azure,nest&perline=14" />
      </ul>
    ),
  },
  {
    title: "Formación",
    id: "formacion",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidad Politécnica de Chiapas</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Services</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("habilidades");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Sobre mí
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Como desarrollador full-stack especializado en backend, mi enfoque se centra en la eficiencia y funcionalidad de los proyectos, buscando constantemente soluciones innovadoras. Mi pasión radica en crear soluciones que mejoren la calidad de vida de las personas. Paralelamente, me dedico a mi desarrollo profesional continuo, con el objetivo de perfeccionar mis habilidades y conocimientos en el campo de la tecnología.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("habilidades")}
              active={tab === "habilidades"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formacion")}
              active={tab === "formacion"}
            >
              {" "}
              Formación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificaciones")}
              active={tab === "certificaciones"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Image src="/images/about_memoji.png" width={500} height={500} />
      </div>
    </section>
  );
};

export default AboutSection;