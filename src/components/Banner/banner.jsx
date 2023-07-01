import React from "react";
import "../../css/banner.css";
import { motion } from "framer-motion";

export default function Banner() {
  //Variantes Framer Motion
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  const AnimatedLetters = ({ title, className }) => {
    //Dividimos el string en un array de caracteres
    const splitWords = title.split("");

    //Recorremos el Array y comprobamos los espacios para añadir el código necesario
    const words = [];
    splitWords.map((word) => {
      return word === " " ? words.push("\u00A0") : words.push(word);
    });
    return (
      <motion.div className="animated-container" variants={banner}>
        <motion.span
          className={`row-title ${className ? className : ""}`}
          variants={banner}
          initial="initial"
          animate="animate"
        >
          {[...words].map((letter, index) => (
            <motion.span
              key={index}
              className="row-letter"
              variants={letterAnimation}
              translate="no"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>
    );
  };
  return (
    <div className="banner-container">
      <h1 style={{"fontSize": "0px"}}>Jose María Campos Desarrollador Web</h1>
      <div className="banner-row-center">
        <div style={{ flex: 1 }}>
          <AnimatedLetters title={"Hola ,"} />
        </div>
        <div className="banner-circle">
          <motion.div
            className="banner-text-container"
            initial={{
              scale: 0,
              opacity: 0,
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
              },
            }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 1.6,
              },
            }}
          >
            <motion.div
              className="banner-text"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 0.6,
                delay: 2.1,
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 2.7,
                }}
              >
                Apasionado al Desarrollo Web y sus Frameworks.
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.3,
                  delay: 2.7,
                }}
              >
                Estudianto DAW
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="banner-row-botton">
        <AnimatedLetters title={"Soy "} />
        <motion.h2
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.7,
            duration: 0.4,
            ease: [0.6, 0.01, -0.05, 0.95],
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="title-effect"
        >
          José María
        </motion.h2>

        {/* <div className="content">
          <h2>Jose Maria</h2>
          <h2>Jose Maria</h2>
        </div> */}

        {/* Apasionado al Desarrollo Web y todo lo que lo rodea. Estudiando GS */}
      </div>
    </div>
  );
}
