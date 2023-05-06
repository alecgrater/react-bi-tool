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
      { name: 'January', value: 100 },
      { name: 'February', value: 200 },
      { name: 'March', value: 150 },
      { name: 'April', value: 300 },
      { name: 'May', value: 250 },
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
