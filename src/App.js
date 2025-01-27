import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './SideBar/SideBar';
import Dashboard from './Components/Dashboard';
import Support from './Components/Support';
import Referrals from './Components/Referrals';
import Payout from './Components/Payout';
import Login from './Login';
import Logout from './Components/Logout';
import Header from './Header/Header'; // Import the Header component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Header />} {/* Render Header only when logged in */}
        {isLoggedIn && <Sidebar />} {/* Show sidebar only if logged in */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            {isLoggedIn && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/support" element={<Support />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/payout" element={<Payout />} />
                <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
