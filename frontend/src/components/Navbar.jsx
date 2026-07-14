import "../styles/navbar.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
      >
        Velora
      </motion.div>

      <ul className="nav-links">
        <li>
          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
        </li>

        <li>
          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            Features
          </motion.a>
        </li>

        <li>
          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
        </li>

        <li>
          <motion.a
            href="#"
            whileHover={{
              y: -2,
            }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <motion.button
            className="login-btn"
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            Login
          </motion.button>
        </Link>
        <motion.button
          className="register-btn"
          whileHover={{
            scale: 1.05,
            y: -4,
            rotateX: -6,
            rotateY: 4,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          Register
        </motion.button>
      </div>
    </nav>
  );
}

export default Navbar;
