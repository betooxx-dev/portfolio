"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Estudia Confort",
    description: "Estudia Confort es una app web que le permite a los estudiantes de Chiapas encontrar un lugar donde vivir cerca de su universidad y administrar su departamento. El administrador gestiona visitas a los departamentos, pagos, y publicaciones.",
    image: "/images/projects/estudia_confort.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/evilBetooxx/frontend-estudiaconfort.git",
    previewUrl: "https://main.d25eiycej117li.amplifyapp.com/",
  },
  {
    id: 2,
    title: "Barhhaala",
    description: "Barhalla es una app web donde los usuarios puedes agendar citas en sus barberias favoritas, los barberos pueden administrar sus citas y los administradores pueden gestionar las barberias y los barberos.",
    image: "/images/projects/barhalla.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/evilBetooxx/barhalla.git",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
