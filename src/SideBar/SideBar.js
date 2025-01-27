import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Import the CSS for the sidebar styling

// Import SVG images for each item
import DashboardIcon from '../Images/Dashboard.svg';
import SupportIcon from '../Images/Support.svg';
import ReferralsIcon from '../Images/Referrals.svg';
import PayoutIcon from '../Images/Payout.svg';
import LogoutIcon from '../Images/Logout.svg'; // Logout icon

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link to="/dashboard">
          <img src={DashboardIcon} alt="Dashboard" />
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/support">
          <img src={SupportIcon} alt="Support" />
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/referrals">
          <img src={ReferralsIcon} alt="Referrals" />
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/payout">
          <img src={PayoutIcon} alt="Payout" />
        </Link>
      </div>
      
      {/* Logout */}
      <div className="logout-item">
        <Link to="/logout">
          <img src={LogoutIcon} alt="Logout" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
