import {Map, Set, OrderedSet} from 'immutable';
import geohash from 'latlon-geohash';

import Types from '../actions/action-types';

const defaultState = Map({
  hashPrecision: 6,
  selectedHashes: OrderedSet(),
  selectedGeoJSON: null,
  hoveringPoint: Map(),
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case Types.ADD_POINT:
      const hash = pointToHashAtPrecision(action.payload.point, state.get('hashPrecision'));
      const allHashes = hashToPrecisionParts([], hash)
      return state.updateIn(['selectedHashes'], (hashes) => {
        return hashes.union(allHashes);
      });
    case Types.ADD_HASHES:
      const newHashes = Set(action.payload.hashes);
      return state.updateIn(['selectedHashes'], (hashes) => {
        return hashes.union(newHashes);
      });
    case Types.SET_GEOJSON:
      return state.set('selectedGeoJSON', action.payload.geojson);
    default:
    return state;
  }
}

const pointToHashAtPrecision = (point, precision) => {
  return geohash.encode(point.lat, point.lng, precision);
}

/**
 * Convert a geohash to a hash all precisions.
 * e.g. beer -> ['beer', 'bee', 'be', 'b']
 * @param  {String} hash the hash
 * @return {Array} the resulting hash array.
 */
const hashToPrecisionParts = (memo, hash) => {
  if (hash.length === 0) {
    return memo;
  }
  memo.push(hash)
  return hashToPrecisionParts(memo, hash.substring(0, hash.length - 1));
}
