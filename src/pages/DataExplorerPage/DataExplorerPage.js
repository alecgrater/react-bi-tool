import React from 'react';
import DataSelector from '../../components/DataSelector/DataSelector';
import DataExport from '../../components/DataExport/DataExport';
import './DataExplorerPage.css';

const DataExplorerPage = () => {
  return (
    <div className="data-explorer-page-container">
      <h1 className="data-explorer-page-title">Data Explorer</h1>
      <div className="data-explorer-page-content">
        <div className="data-explorer-page-selector">
          <DataSelector />
        </div>
        <div className="data-explorer-page-data">
          <DataExport />
        </div>
      </div>
    </div>
  );
};

export default DataExplorerPage;
