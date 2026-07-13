import { motion } from "framer-motion";
import "../styles/splitText.css";

function SplitText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <div className="split-text">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="split-word"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.15,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default SplitText;