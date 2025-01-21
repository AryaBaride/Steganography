import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For React Router v6
import LoginPage from './LoginPage'; // Adjust the path if the file is in a subfolder
import SignupPage from './SignupPage'; // Adjust the path for SignupPage

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Define the route for the signup page */}
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
