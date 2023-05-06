import React from 'react';
import Chart from '../Chart/Chart';
import './dashboard.css';

const Dashboard = () => {
  const chartData = [
    { name: 'January', value: 100 },
    { name: 'February', value: 200 },
    { name: 'March', value: 150 },
    { name: 'April', value: 300 },
    { name: 'May', value: 250 },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-chart">
        <Chart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
