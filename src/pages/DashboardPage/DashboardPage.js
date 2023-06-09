import React from 'react';
import DataExploration from '../../components/DataExploration/DataExploration';
import Chart from '../../components/Chart/Chart';
import './DashboardPage.css';

const DashboardPage = () => {

  const chartData = [
    { d_activitymovemode: 'Walking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 10, d_build: '1.2.3', d_isinternal: false },
    { d_activitymovemode: 'Running', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 5, d_build: '2.0.1', d_isinternal: true },
    { d_activitymovemode: 'Cycling', d_activitytype: 'Indoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 3, d_build: '1.1.0', d_isinternal: false },
    { d_activitymovemode: 'Swimming', d_activitytype: 'Water', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 15, d_build: '2.3.2', d_isinternal: true },
    { d_activitymovemode: 'Hiking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 8, d_build: '1.4.5', d_isinternal: false },
  ];

  const testDataset = [
    { name: "alex", value: 200 },
    { name: "bob", value: 100 },
  ];

  return (
    <div className="dashboard-page-container">
      <h1 className="dashboard-page-title">Dashboard</h1>
      <div className="dashboard-page-content">
        <div className="dashboard-page-chart">
          <Chart data={chartData} />
        </div>
        <div className="dashboard-page-data-exploration">
          <DataExploration />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
