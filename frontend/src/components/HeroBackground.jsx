import { motion } from "framer-motion";

import bowl from "../assets/bowl.jpg";
import avocado from "../assets/avocado.jpg";
import broccoli from "../assets/broccoli.jpg";
import strawberry from "../assets/strawberry.jpg";
import banana from "../assets/banana.jpg";
import apple from "../assets/apple.jpg";
import "../styles/heroBackground.css";

function HeroBackground() {
  return (
    <div className="hero-bg">

      {/* Bowl */}
      <motion.img
        src={bowl}
        className="bg-bowl"
        alt="Bowl"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.03, 1],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Avocado */}
      <motion.img
        src={avocado}
        className="bg-avocado"
        alt="Avocado"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Broccoli */}
      <motion.img
        src={broccoli}
        className="bg-broccoli"
        alt="Broccoli"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Strawberry */}
      <motion.img
        src={strawberry}
        className="bg-strawberry"
        alt="Strawberry"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Banana */}
      <motion.img
        src={banana}
        className="bg-banana"
        alt="Banana"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    {/* Apple */}
      <motion.img
        src={apple}
        className="bg-apple"
        alt="Apple"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


    </div>
  );
}

export default HeroBackground;