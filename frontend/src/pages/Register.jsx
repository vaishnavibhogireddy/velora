import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "../styles/register.css";

import { MdEmail } from "react-icons/md";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
export default function Register() {

    const [showPassword, setShowPassword] = useState(false);

    
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
      <div className="auth-page">
        <Link to="/" className="back-home">
          ⮜ Back to Home
        </Link>

        <div className="auth-container">
          <div className="auth-card">
            <h1>Create Account</h1>

            <p>Join Velora and begin your healthy journey.</p>
            <label>Full Name</label>

            <div className="input-box">
              <FaUser className="input-icon" />

              <input type="text" placeholder="Enter your full name" />
            </div>
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
                placeholder="Create password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <label>Confirm Password</label>

            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className="auth-btn">Register</button>
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
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    );

}