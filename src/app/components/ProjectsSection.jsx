"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PIBITI 2023",
    description: "Pelatihan Bidang Teknologi dan Informasi",
    image: "/images/projects/pibiti.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://pibiti.himatifa.com/",
  },
  {
    id: 2,
    title: "SIADUSBY",
    description: "Sistem Pelayanan Informasi untuk Warga Surabaya",
    image: "/images/projects/sapawarga.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SyahrialZky/final-project-pemweb",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "GMP Project",
    description: "Project dengan GMP (Graha Mutu Persada Mojokerto)",
    image: "/images/projects/gmp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Gunting, Batu, Kertas Classification",
    description: "Klasifikasi gambar suit (gunting, batu, kertas) menggunakan DeepLearning Python",
    image: "/images/projects/suit.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/SyahrialZky/image-classification",
    previewUrl: "/",
  },

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
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
