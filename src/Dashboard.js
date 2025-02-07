import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'; // Optional: for any additional custom styles

// Import BrowserRouter, Routes, Route, and Link from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your page components
import Dashboard from './Dashboard';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
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
                  {/* If you have a Features page, adjust the route accordingly */}
                  <Link className="nav-link" to="/features">Features</Link>
                </li>
                <li className="nav-item">
                  {/* If you have an About Us page, adjust the route accordingly */}
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

        {/* Carousel (without indicators or controls) */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/023/499/177/large_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" 
                className="d-block w-100" 
                alt="Slide 1"
              />
              <div className="carousel-caption d-none d-md-block">
                {/* Optional caption */}
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/023/258/497/non_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" 
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
          {/* No indicators or controls are included */}
        </div>
        
        {/* Define your routes */}
        <div className="container mt-4">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* Add additional routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
