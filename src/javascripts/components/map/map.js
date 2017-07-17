import React from 'react';
import PropTypes from 'prop-types';
import HTMLOverlay from 'react-map-gl/src/overlays/html.react';
import LoadingOverlay from './loading-overlay';
import MapGL from 'react-map-gl';

import {MAPBOX_ACCESS_TOKEN} from '../../lib/constants';

const Map = ({
  mapState,
  mapStyle,
  isLoading,
  width,
  height,
  targets,
  onChangeViewport,
  onHoverFeatures,
  onClickFeatures,
  onClick,
}) => {

  const containerStyle = {
    position: 'absolute',
    right: 0
  };

  return (
    <div style={containerStyle}>
      <MapGL
        {...mapState}
        showZoomControls={true}
        width={width}
        height={height}
        mapStyle={mapStyle}
        mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
        onHoverFeatures={onHoverFeatures}
        onClickFeatures={onClickFeatures}
        onChangeViewport={onChangeViewport}
        onClick={onClick}
      >
      <HTMLOverlay
        {...mapState}
        width={width}
        height={height}
        project={() => {}}
        redraw={() => {
          if (!isLoading) {
            return '';
          }
          return <LoadingOverlay/>;
        }}
      />
      </MapGL>
    </div>
  );
};

Map.propTypes = {
  onChangeViewport: PropTypes.func.isRequired,
  onHoverFeatures: PropTypes.func.isRequired,
  onClickFeatures: PropTypes.func.isRequired
};

export default Map;
