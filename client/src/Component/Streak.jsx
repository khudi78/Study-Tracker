import React from 'react';
import ContributionGraph from './ContributionGraph';

const Streak = () => {
  // Sample data
  const data = [
    { date: '2024-01-01', count: 5 },
    { date: '2024-01-02', count: 10 },
    // Add more data here
  ];

  return (
    <div>
      <h1>Contribution Graph</h1>
      <ContributionGraph data={data} />
    </div>
  );
};

export default Streak;