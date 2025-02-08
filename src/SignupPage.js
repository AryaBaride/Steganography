import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Signup submitted:', { username, password });
    setError('');
    alert('Signup successful!');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/015/678/452/non_2x/confidential-documents-security-illustration-concept-a-flat-illustration-isolated-on-white-background-vector.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        width: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: 'white',
      }}>
        <h6>Create your account today!</h6>
        <h4>Signup</h4>
        {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{ width: '96%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{ width: '96%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              style={{ width: '96%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px' }}
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#0000CD', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
