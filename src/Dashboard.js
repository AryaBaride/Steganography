import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Import your page components
import Dashboard from './Dashboard';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

const AppContent = () => {
  const location = useLocation();
  const carouselRef = useRef(null);

  // Only initialize the carousel when on the Dashboard route
  useEffect(() => {
    if (location.pathname === '/Dashboard' && carouselRef.current && window.bootstrap) {
      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 1000, // 3 seconds between slides
        ride: 'carousel',
      });
    }
  }, [location]);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Branding on the Left */}
          <Link className="navbar-brand" to="/">
            <img 
              src="https://static.thenounproject.com/png/1871532-200.png" 
              height={48} 
              width={60}
              className="d-inline-block align-middle me-4" 
              alt="Logo"
            />
            DataEmbed
          </Link>
          {/* Toggler for mobile view */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navigation Links on the Right */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign-up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Conditionally render the Carousel only when on the Dashboard route */}
      {location.pathname === '/Dashboard' && (
        <div 
          ref={carouselRef}
          id="carouselExampleIndicators" 
          className="carousel slide" 
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/023/499/177/large_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" 
                className="d-block w-100" 
                alt="Slide 1"
              />
      
            </div>
            <div className="carousel-item">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/023/365/220/original/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" 
                className="d-block w-100" 
                alt="Slide 2"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Optional caption */}
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/021/938/298/original/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" 
                className="d-block w-100" 
                alt="Slide 3"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Optional caption */}
              </div>
            </div>
          </div>
          {/* Optional: Carousel controls (if needed) */}
        </div>
      )}
      
      {/* Define your routes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Additional routes as needed */}
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
