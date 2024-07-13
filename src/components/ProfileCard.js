
import React from 'react';
import '../styles/ProfileCard.css';
import profileImage from '../assets/image-jeremy.png';

function ProfileCard({ name, setTimeframe, currentTimeframe }) {
  return (
    <div className="profile-card">
      <div className="profile-info">
        <img src={profileImage} alt={name} className="profile-image" />
        <div className="profile-text">
          <p className="report-for">Report for</p>
          <h2 className="profile-name">Jeremy<br/>Robson</h2>
        </div>
      </div>
      <div className="timeframe-selector">
        <button
          onClick={() => setTimeframe('daily')}
          className={currentTimeframe === 'daily' ? 'active' : ''}
        >
          Daily
        </button>
        <button
          onClick={() => setTimeframe('weekly')}
          className={currentTimeframe === 'weekly' ? 'active' : ''}
        >
          Weekly
        </button>
        <button
          onClick={() => setTimeframe('monthly')}
          className={currentTimeframe === 'monthly' ? 'active' : ''}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
