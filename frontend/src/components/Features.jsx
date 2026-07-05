import "../styles/features.css";
import { FaUtensils, FaChartLine, FaRobot, FaBullseye } from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="section-title">
        <h2>Why Choose Velora?</h2>
        <p>
          Everything you need to build healthier habits in one place.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <FaUtensils className="feature-icon" />
          <h3>Smart Meal Plans</h3>
          <p>
            Personalized meal plans based on your health goals and preferences.
          </p>
        </div>

        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Nutrition Tracking</h3>
          <p>
            Monitor calories, protein, carbs, fats and water intake easily.
          </p>
        </div>

        <div className="feature-card">
          <FaRobot className="feature-icon" />
          <h3>AI Assistant</h3>
          <p>
            Get instant AI-powered nutrition tips and food suggestions.
          </p>
        </div>

        <div className="feature-card">
          <FaBullseye className="feature-icon" />
          <h3>Health Goals</h3>
          <p>
            Set fitness goals and track your progress every day.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;