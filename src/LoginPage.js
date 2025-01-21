import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !password) {
            setError('Username and Password are required');
            return;
        }

        // Here you can add login logic, e.g., API calls
        console.log('Login submitted:', { username, password });
        setError(''); // Clear error if validation passes
        alert('Login successful!');
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/397/516/large_2x/cyber-security-illustration-free-vector.jpg)', // Add your image URL here
                backgroundSize: 'cover',  // Make sure the image covers the entire screen
                backgroundPosition: 'center',  // Center the image
                backgroundRepeat: 'no-repeat',  // Prevent the image from repeating
            }}
        >
            <div
                style={{
                    width: '300px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    opacity: 1, // Optionally, add opacity to the form background to make it stand out
                }}
            >
                <h2>Login</h2>
                {error && (
                    <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
                )}
                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                >
                    <div style={{ textAlign: 'left' }}>
                        <label htmlFor="username">Username</label>
                        
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            style={{
                                width: '96%',
                                padding: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                marginTop: '5px',
                            }}
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
                            style={{ width: '96%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginTop: '5px'}}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#000080',
                            color: 'white',
                            padding: '10px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
