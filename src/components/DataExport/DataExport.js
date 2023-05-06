import React, { useState } from 'react';
import Button from '../Button/Button';
import './DataExport.css';

const DataExport = () => {
  const [exportMessage, setExportMessage] = useState('');

  const handleExport = () => {
    // Perform data export logic here
    // Example:
    // Generate a CSV file or export data in a specific format
    // Set the exportMessage state accordingly
    const message = 'Data exported successfully!';
    setExportMessage(message);
  };

  return (
    <div className="data-export-container">
      <h2 className="data-export-title">Data Export</h2>
      <Button className="data-export-button" onClick={handleExport}>
        Export Data
      </Button>
      {exportMessage && (
        <p className="data-export-message">{exportMessage}</p>
      )}
    </div>
  );
};

export default DataExport;
