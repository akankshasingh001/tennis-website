import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Tennis Junction</h1>
            <p className="lead">HIT AND NEVER QUIT !</p>
            <div className="buttons">
              <Link to="/register" className="ui primary button">
                Sign Up
              </Link>
              <Link to="/login" className="ui green button">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
