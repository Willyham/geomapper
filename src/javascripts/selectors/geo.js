import R from 'ramda';
import {fromJS} from 'immutable';
import {createSelector} from 'reselect';
import geohash from 'latlon-geohash';
import geojson from 'geojson';

const getSelectedHashes = (state) => state.geo.get('selectedHashes');
const getSelectedGeoJSON = (state) => state.geo.get('selectedGeoJSON');

const getSelectedHashesSorted = createSelector([getSelectedHashes], (hashes) => {
  return hashes.sort()
});

const selectedHashesAsGeoJSON = createSelector([getSelectedHashes], (hashes) => {
  return fromJS(hashes.map(R.compose(polygonToGeoJSON, hashToPolygon)));
});

const hashToPolygon = (hash) => {
  const bounds = geohash.bounds(hash);
  const polygon = boundsToPolygon(bounds);
  return {
    hash,
    polygon,
  };
}

const boundsToPolygon = (bounds) => {
  return [
    [bounds.sw.lon, bounds.ne.lat],
    [bounds.ne.lon, bounds.ne.lat],
    [bounds.ne.lon, bounds.sw.lat],
    [bounds.sw.lon, bounds.sw.lat],
    [bounds.sw.lon, bounds.ne.lat],
  ];
}

const polygonToGeoJSON = (poly) => {
  const gj = geojson.parse(poly, {
    Polygon: 'polygon',
    include: ['hash'],
  });
  // TODO: Is this a bug in the geojson library?
  // Need to nest coords one level deeper.
  gj.geometry.coordinates = [gj.geometry.coordinates]
  return gj;
}

export {getSelectedHashes, getSelectedHashesSorted, getSelectedGeoJSON, selectedHashesAsGeoJSON}
