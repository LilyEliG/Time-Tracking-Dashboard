import React from 'react';
import ellipsis from '../assets/icon-ellipsis.svg';
import exercise from '../assets/icon-exercise.svg';
import play from '../assets/icon-play.svg';
import selfcare from '../assets/icon-self-care.svg';
import social from '../assets/icon-social.svg';
import study from '../assets/icon-study.svg';
import work from '../assets/icon-work.svg';
import '../styles/ActivityCard.css';

function ActivityCard({ title, hours, lastWeek, color, timeframe }) {
  const iconMap = {
    Work: work,
    Play: play,
    Study: study,
    Exercise: exercise,
    Social: social,
    'Self Care': selfcare
  };

  const iconSrc = iconMap[title] || '';

  return (
    <div className="activity-card">
      <div className="activity-background" style={{ backgroundColor: color }}>
        <img src={iconSrc} alt="" className="activity-icon" />
      </div>
      <div className="activity-content">
        <div className="activity-header">
          <h3>{title}</h3>
          <img src={ellipsis} alt="More" className="more-button" />
        </div>
        <div className="activity-time">
          <h2>{hours}hrs</h2>
          <p>Last {timeframe} - {lastWeek}hrs</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
