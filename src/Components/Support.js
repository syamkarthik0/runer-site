import React from 'react';
import Tickets from '../Images/Tickets.svg'; // Example SVG imports, update with actual paths
import Open from '../Images/Open.svg';
import Progress from '../Images/Progress.svg';
import Closed from '../Images/Closed.svg';
import './Support.css';
import SupportImage from '../Images/Support.png';

const Support = () => {
  return (
    <div className="support-section">
      {/* Section Title */}
      <h3 className="support-header">Overall</h3>

      {/* Tickets Info: All Tickets, Open, In-Progress, Closed */}
      <div className="ticket-info">
        {/* Ticket Item */}
        <div className="ticket-item">
          <img src={Tickets} alt="Tickets" />
          <span>All Tickets</span>
          <span className="ticket-count">0</span>
        </div>

        <div className="ticket-item">
          <img src={Open} alt="Open" />
          <span>Open</span>
          <span className="ticket-count">0</span>
        </div>

        <div className="ticket-item">
          <img src={Progress} alt="In-Progress" />
          <span>In-Progress</span>
          <span className="ticket-count">0</span>
        </div>

        <div className="ticket-item">
          <img src={Closed} alt="Closed" />
          <span>Closed</span>
          <span className="ticket-count">0</span>
        </div>

        {/* Open Tickets: Urgent, Medium, Low */}
        <div className="open-tickets">
          <h4>Open Tickets</h4>
          <div className="radio-group">
            <label className="radio-item urgent">
              <input type="radio" name="ticket-priority" value="urgent" />
              Urgent
            </label>
            <label className="radio-item medium">
              <input type="radio" name="ticket-priority" value="medium" />
              Medium
            </label>
            <label className="radio-item low">
              <input type="radio" name="ticket-priority" value="low" />
              Low
            </label>
          </div>
        </div>
      </div>

      {/* Image under the section */}
      <div className="support-image-container">
        <img src={SupportImage} alt="Support Illustration" className="support-image" />
      </div>

      {/* Additional Text below the image */}
      <div className="no-tickets-text">
        No Tickets, sit back and relax!
      </div>
    </div>
  );
};

export default Support;
