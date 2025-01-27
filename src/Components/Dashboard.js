import React from 'react';
import './Dashboard.css'; // Create a separate CSS file to handle the styles

import AddSection from '../Images/AddSection.svg';
import Filter  from '../Images/Filter.svg';
import SearchIcon from '../Images/SearchIcon.svg';
import Options from '../Images/Options.svg'
import Message from '../Images/Message.svg'
import Calendar from '../Images/Calendar.svg'
import People from '../Images/People.svg'
import ArrowDown from '../Images/ArrowDown.svg'
import  Executives from '../Images/Executives.svg'
import  Leads from '../Images/Leads.svg'
import  LeadTime from '../Images/LeadTime.svg'
import  Revenue from '../Images/Revenue.svg'
import  VVCMahindra from '../Images/VVCMahindra.svg'
import  VihanKia from '../Images/VihanKia.svg'
import  TejaswiTata from '../Images/TejaswiTata.svg'
import  LakshmiHyundai from '../Images/LakshmiHyundai.svg'
import Upwards from '../Images/Upwards.svg'
import TwoSideArrow from '../Images/TwosideArrow.svg'


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="left-side">
    {/* Header Section */}
    <div className="left-side-header">
        <h3>Available Showrooms</h3>
        <img src={AddSection} alt="AddSection" />
    </div>

    {/* Search Bar with Filter and Three Dots */}
    <div className="search-bar-container4">
        <div className="search-bar4">
            <img src={SearchIcon} alt="Search" />
            <input type="text" placeholder="Search..." />
            <img src={Filter} alt="Filter" />
        </div>
        <img className="three-dots4" src={Options} alt="Options" />
    </div>
    <div>
    <p className="onboard-text"><u>0 Onboard</u></p> {/* Moved to the next line */}
    </div>
    {/* Center Content */}
    <div className="center-content">
        <img src={AddSection} alt="AddSection" />
        <p>Click here to<br />”Add Showroom”</p>
    </div>
</div>


<div className="center-side">
    {/* Referrals Statistics Header */}
    <h3 className="center-side-header">Referrals Statistics</h3>

    {/* Section Container */}
    <div className="section-container">
        <div className="section">
            {/* Section 1 Header */}
            <div className="section-header">
                <img src={Message} alt="Message" />
                <span>SMS Cost</span>
            </div>

            {/* SMS Cost Value */}
            <div className="sms-cost">
                ₹ 0
            </div>

            {/* Divider Line */}
            <hr className="section-divider" />

            {/* Total Referral Cost Text */}
            <div className="section-footer">
                Total Referral Cost
            </div>
        </div>

        <div className="section">
            {/* Section 2 Header */}
            <div className="section-header">
                <img src={Calendar} alt="Calendar" />
                <span>Current Month</span>
            </div>

            {/* SMS Cost Value */}
            <div className="sms-cost">
                ₹ 0
            </div>

            {/* Divider Line */}
            <hr className="section-divider" />

            {/* Footer Content: Referrals Cost */}
            <div className="section-footer">
                The cost for 2360 Referrals
            </div>
        </div>

        <div className="section">
            {/* Section 3 Header */}
            <div className="section-header">
                <img src={People} alt="People" />
                <span>Successful Referrals</span>
            </div>

            {/* SMS Cost Value */}
            <div className="sms-cost">
                ₹ 0
            </div>

            {/* Divider Line */}
            <hr className="section-divider" />

            {/* Footer Content: Referrals Info */}
            <div className="section-footer">
                <span className="highlight">638 Successful</span> of 2360 Today
            </div>
        </div>
    </div>

    {/* Total Runs Section */}
    <div className="total-runs-section">
        {/* Header: Total Runs */}
        <div className="total-runs-header">
            <span>Total Runs</span>
            <span>0</span>
        </div>

        {/* Second Line: Percentage */}
        <div className="total-runs-percentage">
            0%
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
            <div className="progress-bar dark-blue" style={{ width: '1%' }}></div>
            <div className="progress-bar light-blue" style={{ width: '99%' }}></div>
        </div>
        {/* Withdraw and Balance Circles */}
        <div className="bottom-left-circles">
            <div className="circle-container">
                <div className="circle dark-blue-circle"></div>
                <span>Withdraws 0</span>
            </div>
            <div className="circle-container">
                <div className="circle light-blue-circle"></div>
                <span>Balance 0</span>
            </div>
        </div>
    </div>


{/* Referral Tracking Section */}
<div className="referral-tracking-section">
    {/* Header: "Referral Tracking" on the left */}
    <div className="referral-tracking-header">
        <span>Referral Tracking</span>
    </div>

    {/* Percentage Values: 25%, 28.3%, 17.4%, 14.6% */}
    <div className="referral-percentage">
        <div className="percentage-bar-container">
            <div className="percentage-bar blue">
                <span>25%</span>
            </div>
            <div className="percentage-bar orange">
                <span>28.3%</span>
            </div>
            <div className="percentage-bar green">
                <span>17.4%</span>
            </div>
            <div className="percentage-bar pink">
                <span>14.6%</span>
            </div>
        </div>
    </div>

    {/* Bottom Left Circles for referral tracking */}
    <div className="bottom-left-circles">
        <div className="circle-container">
            <div className="circle dark-blue-circle"></div>
            <span>In Process 26,255</span>
        </div>
        <div className="circle-container">
            <div className="circle orange-circle"></div>
            <span>Downloaded 18,774</span>
        </div>
        <div className="circle-container">
            <div className="circle green-circle"></div>
            <span>Activated 11,636</span>
        </div>
        <div className="circle-container">
            <div className="circle pink-circle"></div>
            <span>Unsuccessful 9,532</span>
        </div>
    </div>
</div>





<div className="referral-tracking-container">
    {/* Header: Referral Tracking with "This Week" */}
    <div className="referral-header">
        <span className="referral-header-title">Referral Tracking</span>
        <div className="this-week-container">
            <div className="this-week-border">
                <span>This Week</span>
                <img src={ArrowDown} alt="Down Arrow" className="arrow-down" />
            </div>
            <img src={Options} alt="Options" className="options-icon" />
        </div>
    </div>

    {/* Referral Sent Today & SMS Cost */}
    <div className="referral-info">
        <div className="left-info">
            <span className="dark-black">2452</span>
            <span className="light-black">Referrals Sent Today</span>
        </div>
        <div className="right-info">
            <span className="dark-black">346.00/-</span>
            <span className="light-black">SMS Cost</span>
        </div>
    </div>

    {/* Graph Section */}
    <div className="graph-container">
        <div className="graph">
            <div className="y-axis">
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
            </div>
            <div className="x-axis">
                <div className="Mon">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Tue">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Wed">
                    <div className="blue-border" style={{ height: '85px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Thur">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Fri">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Sat">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
                <div className="Sun">
                    <div className="blue-border" style={{ height: '75px' }}></div>
                    <div className="pink-border" style={{ height: '35px' }}></div>
                    <div className="yellow-border" style={{ height: '50px' }}></div>
                </div>
            </div>
        </div>
    </div>
    <div className="day">
                <span>Mon</span> 
                <span>Tue</span>
                <span>Wed</span>
                <span>Thur</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
    </div>

    {/* Bottom Line with Circles */}
    <div className="bottom-line">
        <div className="circle1 dark-blue"></div>
        <span>Referral Sent</span>
        <div className="circle1 pink"></div>
        <span>Downloaded</span>
        <div className="circle1 yellow"></div>
        <span>Activated</span>
    </div>
</div>
</div>



<div className="right-side">
    {/* Header: Overall */}
    <h3 className="right-side-header">Overall</h3>

    {/* Section Container */}
    <div className="section-container">
        {/* Section 1: Total Executives */}
        <div className="section">
            <div className="section-header">
                <img src={Executives} alt="Executives" />
                <span>Total Executives</span>
            </div>

            {/* SMS Cost and Executive Stats */}
            <div className="sms-cost1">
                1700
            </div>
            <hr className="section-divider1" />
            <div className="executive-stats">
                <span>1470</span>
                <span className="executive-right">230</span>
            </div>

            {/* Bottom Circles: Active & Inactive */}
            <div className="bottom-right-circles">
                <div className="circle-container">
                    <div className="circle dark-blue-circle"></div>
                    <span>Active</span>
                </div>
                <div className="circle-container">
                    <div className="circle light-blue-circle"></div>
                    <span>Inactive</span>
                </div>
            </div>
        </div>

        {/* Section 2: Total Leads */}
<div className="section">
    <div className="section-header">
        <img src={Leads} alt="Leads" />
        <span>Total Leads</span>
    </div>

    {/* SMS Cost and Lead Stats */}
    <div className="sms-cost1">
        3600
    </div>
    <hr className="section-divider1" />
    <div className="executive-stats">
        <span>1470</span>
        <span className="executive-right">230</span>
    </div>

    {/* Bottom Circles: This Month & Last Month */}
    <div className="bottom-right-circles">
        <div className="circle-container">
            <div className="circle dark-blue-circle"></div>
            <span>This Month</span>
        </div>
        <div className="circle-container">
            <div className="circle light-blue-circle"></div>
            <span>Last Month</span>
        </div>
    </div>
</div>
        {/* Section 3: Average Lead Time */}
<div className="section">
    <div className="section-header">
        <img src={LeadTime} alt="Lead Time" />
        <span>Average Lead Time</span>
    </div>

    {/* SMS Cost and Lead Time Stats */}
    <div className="sms-cost1">
        12 min
    </div>
    <hr className="section-divider1" />
    <div className="executive-stats">
        <span>23 min</span>
        <span className="executive-right">45 min</span>
    </div>

    {/* Bottom Circles: Today & This Week */}
    <div className="bottom-right-circles">
        <div className="circle-container">
            <div className="circle dark-blue-circle"></div>
            <span>Today</span>
        </div>
        <div className="circle-container">
            <div className="circle light-blue-circle"></div>
            <span>This Week</span>
        </div>
    </div>
</div>
    </div>




    <div className="section1">
    <div className="revenue">
        <div className="section-header1">
            <img src={Revenue} alt="Revenue" />
            <span>Total Revenue</span>
        </div>

        {/* Revenue Value */}
        <div className="revenue-value">
            ₹ 20,000
        </div>
    </div>

    {/* Comparison Stats: Individual Boxes */}
<div className="comparison-stats">
    <div className="comparison-stat-box">
        <span className="comparison-title">This Week</span>
        <div className="stat-graph">
            <img src={Upwards} alt="Growth" />
            <span className="percentage-blue">+8.08%</span>
        </div>
    </div>

    <div className="comparison-stat-box">
        <span className="comparison-title">This Month</span>
        <div className="stat-graph">
            <img src={Upwards} alt="Growth" />
            <span className="percentage-blue">+12.08%</span>
        </div>
    </div>

    <div className="comparison-stat-box">
        <span className="comparison-title">Month ends</span>
        <div className="stat-graph">
            <span className="percentage-blue">17 days</span>
        </div>
    </div>
</div>
</div>



{/* Total Performers from Showroom Section */}
<div className="performers-section">
    <div className="section-header">
        <span>Total Performers from Showroom</span>
    </div>

    {/* SVGs placed next to each other */}
    <div className="performers-svg-container">
        <img src={VVCMahindra} alt="VVC Mahindra" className="performer-svg" />
        <img src={VihanKia} alt="Vihan Kia" className="performer-svg" />
        <img src={TejaswiTata} alt="Tejaswi Tata" className="performer-svg" />
        <img src={LakshmiHyundai} alt="Lakshmi Hyundai" className="performer-svg" />
    </div>
</div>



<div className="executives-section">
    {/* Section Header: List of Executives and Count */}
    <div className="executives-header">
        <span>List of Executives</span>
        <div>
            <span className="executives-count"><div className="zero-onboard">0</div></span>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container2"> 
            <div className="search-bar2"> 
                    <img src={SearchIcon} alt="Search" />
                <input type="text" placeholder="Search..." />
                <img className="filter" src={Filter} alt="Filter" />
            </div>
            <img className="three-dots2" src={Options} alt="Options" /> 
        </div>
    </div>

    {/* Table Headers: Name, ID Number, Leads, Status */}
    <div className="executives-table-header">
        <span>Name</span>
        <div className="executives-table-details">
            <span>ID Number</span>
            <span>Leads</span>
            <span>Status</span>
            <img src={TwoSideArrow} alt="Sort" />
        </div>
    </div>
</div>



</div>

    </div>
  );
};

export default Dashboard;
