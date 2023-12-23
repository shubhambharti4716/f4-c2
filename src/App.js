// App.js
import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import './App.css'; // Import main styles

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Profile onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <SignIn onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
