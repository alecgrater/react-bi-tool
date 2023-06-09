import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Chart.css';

const Chart = ({ data }) => {
  return (
    <div className="chart-container">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" width={500} height={300} />
        <XAxis dataKey="d_activitymovemode" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="d_autopausecount" fill="#007AFF" />
      </BarChart>
    </div>
  );
};

export default Chart;
