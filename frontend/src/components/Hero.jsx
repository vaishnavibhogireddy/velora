import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-left">

          <h1>
            Eat Better.
            <br />
            Live Smarter.
          </h1>

          <p>
            Velora helps you track nutrition, generate AI-powered meal
            recommendations, and build healthier habits effortlessly.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard-card">

            <h3>Today's Nutrition</h3>

            <div className="progress">
              Calories: 1680 / 2200
            </div>

            <div className="progress">
              Water: 2.1L
            </div>

            <div className="progress">
              Protein: 92g
            </div>

            <div className="progress">
              Health Score ⭐ 92
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;