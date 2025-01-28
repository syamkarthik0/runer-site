import React from 'react';
import SearchIcon from '../Images/SearchIcon.svg';  // Assuming you have the Search icon in your Images folder
import Filter from '../Images/Filter.svg';      // Assuming you have the Filter icon in your Images folder
import Options from '../Images/Options.svg';   // Assuming you have the Options (three dots) icon in your Images folder
import Calendar1 from '../Images/Calendar1.svg'; // Assuming Calendar1 SVG is in your Images folder
import UpArrow from '../Images/UpArrow.svg';     // Assuming UpArrow SVG is in your Images folder
import './Payout.css'; // CSS file for styling
import PayoutImage from '../Images/Payout.png'

const Payout = () => {
  return (
    <div className="payout-container">
      {/* Section 1: Header */}
      <div className="header-section">
        <h2>Payout Approval</h2>
        <div className="payout-count">
          <span className="count-text">2549</span>
        </div>
      </div>

      {/* Search Bar with Filter and Three Dots */}
      <div className="search-bar-container">
        <div className="search-bar">
          <button>
            <img src={SearchIcon} alt="Search" />
          </button>
          <input type="text" placeholder="Search..." />
          <img src={Filter} alt="Filter" />
        </div>
        <img className="three-dots" src={Options} alt="Options" />
      </div>

      {/* Tabs for "All", "Activated", "Downloaded", "Terminated" */}
      <div className="tabs-container">
        <span className="tab">All</span>
        <span className="tab">Pending</span>
        <span className="tab">Approved</span>
        <span className="tab">Rejected</span>
      </div>

      {/* Filters for Calendar and Export */}
      <div className="filters-container">
        <div className="calendar-filter">
          <img src={Calendar1} alt="Calendar" />
          <span>Last 30 days</span>
        </div>
        <div className="export-filter">
          <img src={UpArrow} alt="Export" />
          <span>Export</span>
        </div>
      </div>

      
      {/* Section 2 Header */}
      <div className="section2-header">
      <div className="square-box"></div> {/* Square box */}
        <div className="section2-header-item">ID Number</div>
        <div className="section2-header-item">Executive Name</div>
        <div className="section2-header-item">Contact</div>
        <div className="section2-header-item">Showroom</div>
        <div className="section2-header-item">Location</div>
        <div className="section2-header-item">Requested Amount</div>
        <div className="section2-header-item">Date</div>
        <div className="section2-header-item">UPI ID</div>
        <div className="section2-header-item">Status</div>
      </div>


      <div className="section3">
  <img src={PayoutImage} alt="Payout" className="payout-image" />
  <p className="no-payout-text">Looks like there are no referrals yet.</p>
</div>

    </div>
  );
};

export default Payout;
