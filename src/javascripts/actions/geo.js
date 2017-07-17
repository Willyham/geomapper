import Types from './action-types';

export function addPoint(point) {
  return {
    type: Types.ADD_POINT,
    payload: {
      point
    }
  };
}

export function addHashes(hashes) {
  return {
    type: Types.ADD_HASHES,
    payload: {
      hashes
    }
  };
}

export function setGeoJSON(geojson) {
  return {
    type: Types.SET_GEOJSON,
    payload: {
      geojson
    }
  };
}
