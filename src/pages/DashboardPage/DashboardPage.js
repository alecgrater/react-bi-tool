import React from 'react';
import DataExploration from '../../components/DataExploration/DataExploration';
import Chart from '../../components/Chart/Chart';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page-container">
      <h1 className="dashboard-page-title">Dashboard</h1>
      <div className="dashboard-page-content">
        <div className="dashboard-page-chart">
          <Chart />
        </div>
        <div className="dashboard-page-data-exploration">
          <DataExploration />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
