import {createSelector} from 'reselect';
import {fromJS, Set} from 'immutable';

import {getSelectedGeoJSON, selectedHashesAsGeoJSON} from './geo';

// TODO: At some point, we should load this dynamically instead of bundling style json
import defaultMapStyle from '../../static/streets.json';
const defaultMapImmutable = fromJS(defaultMapStyle);

// Style layers are constant, so compute this on load rather than on each call.
const customLayers = generateLayers();
const styleWithLayers = defaultMapImmutable.update('layers', layers => {
  return layers.concat(customLayers);
});

const getMapStyle = createSelector([selectedHashesAsGeoJSON, getSelectedGeoJSON], (hashes = Set([]), geoData) => {
  const hashList = hashes.flatten(1).toJS();
  return styleWithLayers.update('sources', sources => {
    return sources.merge(
      sourceFromFeatures(hashList),
      createGeoJSONLayer(geoData)
    )
  });
});

const sourceFromFeatures = (features) => {
  return {
    'object-source-geohash': {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features
      }
    }
  };
};

const createGeoJSONLayer = (data) => {
  data = data || {
    type: 'FeatureCollection',
    features: []
  };
  return {
    'object-source-geojson': {
      type: 'geojson',
      data
    }
  };
}

function generateLayers() {
  const hashFillLayer = {
    id: 'object-layer-geohash',
    source: 'object-source-geohash',
    type: 'fill',
    interactive: false,
    paint: {
      'fill-opacity': 0.2,
      'fill-outline-color': '#222222',
      'fill-color': '#444444'
    }
  };

  const jsonFillLayer = {
    id: 'object-layer-geojson',
    source: 'object-source-geojson',
    type: 'fill',
    interactive: false,
    paint: {
      'fill-opacity': 0.5,
      'fill-outline-color': '#FF0000',
      'fill-color': '#AAAAAA'
    }
  };

  // const labelLayer = {
  //   id: 'object-layer-geohash-label',
  //   source: 'object-source-geohash',
  //   type: 'symbol',
  //   layout: {
  //     'text-field': "{hash}",
  //     'icon-text-fit': 'both',
  //     'icon-allow-overlap': true
  //   }
  // }

  // const hoverLayer = {
  //   id: 'object-layer-hover',
  //   source: 'object-source-hover',
  //   type: 'fill',
  //   interactive: false,
  //   minzoom: 5,
  //   paint: {
  //     'line-width': 2,
  //     'line-opacity': 0.2,
  //     'line-color': '#000000'
  //   }
  // };

  // return fromJS([fillLayer, labelLayer]);
  return fromJS([hashFillLayer, jsonFillLayer]);
}



export {getMapStyle};
