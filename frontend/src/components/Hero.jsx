import "../styles/hero.css";
import SplitText from "./SplitText";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

function Hero() {
  return (
    <section className="hero">
          <HeroBackground />
      <div className="hero-content">

        <div className="hero-left">
          <div className="hero-title">

    <SplitText
        text="Eat Better."
        delay={0}
    />

    <SplitText
        text="Live Smarter."
        delay={0.2}
    />
    <motion.p
      initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    delay: 0.4,
    duration: 0.6,
  }}
>     Velora helps you track nutrition,
      generate AI-powered meal recommendations,
      and build healthier habits effortlessly.
    </motion.p>

    </div>
          <div className="hero-buttons">

    <motion.button
         className="primary-btn"
        whileHover={{
            scale: 1.05,
            y: -3
        }}
        whileTap={{
            scale: 0.96
        }}
        transition={{
            duration: 0.2
        }}
    >
        Get Started
    </motion.button>

    <motion.button
        className="secondary-btn"
        whileHover={{
            scale: 1.05,
            y: -3
        }}
        whileTap={{
            scale: 0.96
        }}
        transition={{
            duration: 0.2
        }}
    >
        Learn More
    </motion.button>

   </div>
 </div>

        <motion.div
  className="hero-right"
  initial={{
    opacity: 0,
    x: 60,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0,
  }}
>

          <motion.div
  className="dashboard-card"
  animate={{
  y: [0, -8, 0],
  rotate: [0, 0.5, 0],
}}
transition={{
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
}}
whileHover={{
    scale:1.03,
    rotateY:4,
    rotateX:-4
}}
>

            <h3>Today's Nutrition</h3>

            <motion.div
  className="progress"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.2,
    duration: 0.4,
  }}
>
  Calories: 1680 / 2200
</motion.div>

           <motion.div
  className="progress"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.35,
    duration: 0.4,
  }}
>Water : 2L
</motion.div>

            <motion.div
  className="progress"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.5,
    duration: 0.4,
  }}
>
Protein : 92g
</motion.div>
<motion.div
  className="progress"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    delay: 0.65,
    duration: 0.4,
  }}
>
 Health Score ⭐ 92
</motion.div>
            

         </motion.div>

       </motion.div>

      </div>

    </section>
  );
}

export default Hero;