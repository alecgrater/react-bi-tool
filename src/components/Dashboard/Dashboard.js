import React from 'react';
import Chart from '../../components/Chart/Chart';
import Table from '../../components/Table/Table';

const Dashboard = () => {
  const chartData = [
    { d_activitymovemode: 'Walking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 10, d_build: '1.2.3', d_isinternal: false },
    { d_activitymovemode: 'Running', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 5, d_build: '2.0.1', d_isinternal: true },
    { d_activitymovemode: 'Cycling', d_activitytype: 'Indoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 3, d_build: '1.1.0', d_isinternal: false },
    { d_activitymovemode: 'Swimming', d_activitytype: 'Water', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 15, d_build: '2.3.2', d_isinternal: true },
    { d_activitymovemode: 'Hiking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 8, d_build: '1.4.5', d_isinternal: false },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="panels">
        <div className="panel">
          <h2>Chart</h2>
          <Chart data={chartData} />
        </div>
        <div className="panel">
          <h2>Data Exploration</h2>
          <Table data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
