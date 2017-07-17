import React from 'react';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.75)'
};

const LoadingOverlay = () => (
  <div style={style}>
    <p>Loading</p>
  </div>
);

LoadingOverlay.propTypes = {};

export default LoadingOverlay;
