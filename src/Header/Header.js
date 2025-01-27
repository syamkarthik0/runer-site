import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS for the header styling

// Import icons
import NotificationIcon from '../Images/Notification.svg'; // Notification bell icon
import ProfilePic from '../Images/ProfilePic.png'; // User's profile picture
import SearchIcon from '../Images/SearchIcon.svg';
import { ReactComponent as LogoIcon } from '../Images/LogoIcon.svg'; 
import { ReactComponent as CompanyLogo } from '../Images/CompanyLogo.svg'; 
import ArrowDown from '../Images/ArrowDown.svg';

const Header = () => {
  return (
    <div className="header">
      {/* Left: Company Logo and Icon */}
      <div className="logo-container">
        <LogoIcon className="logo-icon" />  {/* Using SVG component directly */}
        <CompanyLogo className="company-logo" />  {/* Using SVG component directly */}
      </div>

      {/* Right: Search Bar, Notification, and Profile Section */}
      <div className="header-right">
        {/* Search Bar */}
        <div className="search-bar">
        <button>
            <img src={SearchIcon} alt="Search" />
          </button>
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notification Bell */}
        <div className="notification">
          <img src={NotificationIcon} alt="Notifications" />
        </div>

        {/* Profile Section */}
        <div className="profile">
          <img src={ProfilePic} alt="Profile" />
          <div className="name-role">
            <span className="name">Runer</span>
            <span className="role">Admin</span>
          </div>
          {/* <div className="arrow"></div>  */}
          <img src={ArrowDown} alt="Down Arrow" className="arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
