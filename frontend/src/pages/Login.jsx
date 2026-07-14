import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { MdEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">
      <Link to="/" className="back-home">
        <span className="back-arrow">⮜</span>
        Back to Home
      </Link>
      <div className="login-container">
        <div className="login-card">
          <h1>Welcome Back 👋</h1>
          <p>Sign in to continue your healthy journey.</p>
          <label>Email Address</label>
          <div className="input-box">
            <MdEmail className="input-icon" />

            <input type="email" placeholder="Enter your email" />
          </div>
          <label>Password</label>
          <div className="input-box">
            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#" className="forgot">
              Forgot Password?
            </a>
          </div>

          <button className="login-btn">Login</button>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="google-btn">
            <FcGoogle className="google-icon" />
            Continue with Google
          </button>
          <p className="bottom-text">
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
