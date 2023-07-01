import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "./framer.jsx";

export function ScrollTitle({ title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.2", "0.4 1"],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -800]);
  return (
    <motion.div
      ref={ref}
      className="projects-title noselect"
      style={useMediaQuery("(min-width: 992px)") ? { x: yRange } : {}}
    >
      <h2 translate="no">{title}</h2>
    </motion.div>
  );
}
