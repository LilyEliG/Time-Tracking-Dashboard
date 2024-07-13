import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import ActivityCard from './ActivityCard';
import '../styles/Dashboard.css';

const activities = [
  { title: 'Work', current: { daily: 5, weekly: 32, monthly: 103 }, previous: { daily: 7, weekly: 36, monthly: 128 }, color: 'hsl(15, 100%, 70%)' },
  { title: 'Play', current: { daily: 1, weekly: 10, monthly: 23 }, previous: { daily: 2, weekly: 8, monthly: 29 }, color: 'hsl(195, 74%, 62%)' },
  { title: 'Study', current: { daily: 0, weekly: 4, monthly: 13 }, previous: { daily: 1, weekly: 7, monthly: 19 }, color: 'hsl(348, 100%, 68%)' },
  { title: 'Exercise', current: { daily: 1, weekly: 4, monthly: 11 }, previous: { daily: 1, weekly: 5, monthly: 18 }, color: 'hsl(145, 58%, 55%)' },
  { title: 'Social', current: { daily: 1, weekly: 5, monthly: 21 }, previous: { daily: 3, weekly: 10, monthly: 23 }, color: 'hsl(264, 64%, 52%)' },
  { title: 'Self Care', current: { daily: 0, weekly: 2, monthly: 7 }, previous: { daily: 1, weekly: 2, monthly: 11 }, color: 'hsl(43, 84%, 65%)' },
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
            title={activity.title}
            currentHours={activity.current[timeframe]}
            previousHours={activity.previous[timeframe]}
            timeframe={timeframe}
            color={activity.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
