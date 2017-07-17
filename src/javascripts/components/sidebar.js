import React from 'react';
import AddGeoForm from './add-geo';

const Sidebar = ({width, geohashes, onGeoAdd}) => {
  const containerStyle = {
    width,
    float: 'left',
    height: '100vh',
    borderRight: '1px solid #AAA',
    backgroundColor: '#EFEFEF',
  };
  const contentStyle = {
    padding: '10px'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h3>Geohashes</h3>
        <AddGeoForm onSubmit={onGeoAdd}/>
        <ul>
         {geohashes.map((hash) => <li key={hash}>{hash}</li>)}
       </ul>
      </div>
    </div>
  );
};

export default Sidebar;
