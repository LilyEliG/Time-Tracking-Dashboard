import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import ActivityCard from './ActivityCard';
import '../styles/Dashboard.css';

const activities = [
  { title: 'Work', hours: 32, daily: 5, weekly: 32, monthly: 103, color: 'hsl(15, 100%, 70%)' },
  { title: 'Play', hours: 10, daily: 2, weekly: 10, monthly: 23, color: 'hsl(195, 74%, 62%)' },
  { title: 'Study', hours: 4, daily: 0, weekly: 4, monthly: 13, color: 'hsl(348, 100%, 68%)' },
  { title: 'Exercise', hours: 4, daily: 1, weekly: 4, monthly: 11, color: 'hsl(145, 58%, 55%)' },
  { title: 'Social', hours: 5, daily: 1, weekly: 5, monthly: 21, color: 'hsl(264, 64%, 52%)' },
  { title: 'Self Care', hours: 2, daily: 0, weekly: 2, monthly: 7, color: 'hsl(43, 84%, 65%)' },
];

function Dashboard() {
  const [timeframe, setTimeframe] = useState('weekly');

  return (
    <div className="dashboard">
      <ProfileCard name="Jeremy Robson" setTimeframe={setTimeframe} currentTimeframe={timeframe} />
      <div className="activity-grid">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            {...activity}
            hours={activity[timeframe]}
            lastPeriod={
              timeframe === 'daily' ? 'Yesterday' :
              timeframe === 'weekly' ? 'Last Week' : 'Last Month'
            }
            timeframe={timeframe}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
