import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import Button from '../Button/Button';
import './DataExploration.css';

const DataExploration = () => {
  const [chartData, setChartData] = useState([]);

  const handleFilter = () => {
    // Perform data filtering logic here
    // Update the chartData state accordingly
    // Example:
    const filteredData = [
      { d_activitymovemode: 'Walking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 10, d_build: '1.2.3', d_isinternal: false },
      { d_activitymovemode: 'Running', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 5, d_build: '2.0.1', d_isinternal: true },
      { d_activitymovemode: 'Cycling', d_activitytype: 'Indoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 3, d_build: '1.1.0', d_isinternal: false },
      { d_activitymovemode: 'Swimming', d_activitytype: 'Water', d_automateddevicegroup: 'Smartwatch', d_autopausecount: 15, d_build: '2.3.2', d_isinternal: true },
      { d_activitymovemode: 'Hiking', d_activitytype: 'Outdoor', d_automateddevicegroup: 'Fitness Tracker', d_autopausecount: 8, d_build: '1.4.5', d_isinternal: false },
    ];
    setChartData(filteredData);
  };

  return (
    <div className="data-exploration-container">
      <h2 className="data-exploration-title">Data Exploration</h2>
      <div className="data-exploration-filters">
        {/* Render your filter components here */}
        <Button onClick={handleFilter}>Apply Filters</Button>
      </div>
      <div className="data-exploration-chart">
        <Chart data={chartData} />
      </div>
    </div>
  );
};

export default DataExploration;
