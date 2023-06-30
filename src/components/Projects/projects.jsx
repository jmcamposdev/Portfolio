import React from "react";
import { useState } from "react";
import { ScrollTitle } from "../../assets/scrollTitle.jsx";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/projects.css";
//Importamos las Imágenes
import shorter from "../../img/shorter.jpg";
import moviesearch from "../../img/moviesearch.jpg";
import pokeapi from "../../img/pokeapi.jpg";
import todolist from "../../img/todolist.jpg";

export default function Proyects() {
  const [proyectsItems, setProyectsItems] = useState([
    {
      id: 1,
      title: "Shorter",
      image: shorter,
      show: true,
      url: "https://shorter.jmcampos.tk",
      github: "https://github.com/jmcamposdev/shorter",
    },
    {
      id: 2,
      title: "MoviSearch",
      image: moviesearch,
      show: false,
      url: "https://movie.jmcampos.tk",
      github: "https://github.com/jmcamposdev/moviesearch",
    },
    {
      id: 3,
      title: "PokeApi",
      image: pokeapi,
      show: false,
      url: "https://pokeapi.jmcampos.tk",
      github: "https://github.com/jmcamposdev/pokeapi",
    },
    {
      id: 4,
      title: "TodoList",
      image: todolist,
      show: false,
      url: "https://todolist.jmcampos.tk",
      github: "https://github.com/jmcamposdev/todolist",
    },
  ]);
  const [urlPage, setUrlPage] = useState({
    url: proyectsItems[0].url,
    github: proyectsItems[0].github,
  });

  const handletab = (e, id) => {
    proyectsItems.map((proyect, index) => {
      let tab = document.getElementById(index);
      tab.classList.remove("selected");
      return e.currentTarget.classList.add("selected");
    });
    setUrlPage({
      url: proyectsItems[id].url,
      github: proyectsItems[id].github,
    });
    handleimg(id);
  };

  const handleimg = (id) => {
    const img = [...proyectsItems];
    img.map((img) => {
      return (img.show = false);
    });
    setProyectsItems(img, (img[id].show = true));
  };

  return (
    <div className="projects">
      <ScrollTitle title="Proyectos" />

      <div className="projects-content-container">
        <motion.div
          className="projects-tabs-container"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, delay: 0.3 },
          }}
          viewport={{ once: true }}
        >
          {proyectsItems.map((project, index) => (
            <div
              id={index}
              key={index}
              className={
                index === 0 ? "projects-tabs selected" : "projects-tabs"
              }
              onClick={(e) => handletab(e, index)}
            >
              <div className="tabs-count">
                <h5>{project.id}</h5>
              </div>
              <h3 translate="no">{project.title}</h3>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="projects-image"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.6 },
          }}
          viewport={{ once: true }}
        >
          <div className="image-container">
            {proyectsItems.map((proyect, index) => (
              <AnimatePresence key={`image-${index}`}>
                {proyect.show && (
                  <>
                    <motion.img
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      exit={{ x: 30, opacity: 0 }}
                      src={proyect.image}
                    />
                  </>
                )}
              </AnimatePresence>
            ))}
          </div>
          <div className="image-button">
            <a
              target="_blank"
              rel="noreferrer"
              href={urlPage.url}
              translate="no"
            >
              <svg
                style={{ transform: "rotate(180deg)", margin: "0 12px 0 0" }}
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 8 17 17 8 17" />
              </svg>
              Demo
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href={urlPage.github}
              translate="no"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
