import R from 'ramda';

// const PENDING = '_PENDING';
// const FULFILLED = '_FULFILLED';
// const REJECTED = '_REJECTED';
//
// function joinAction(parts) {
//   return parts.join('/');
// }

// function createAsyncActions(group, baseAction) {
//   return {
//     [baseAction]: joinAction([group, baseAction]),
//     [baseAction + PENDING]: joinAction([group, baseAction]) + PENDING,
//     [baseAction + FULFILLED]: joinAction([group, baseAction]) + FULFILLED,
//     [baseAction + REJECTED]: joinAction([group, baseAction]) + REJECTED
//   };
// }

const staticActions = {
  // Geo
  ADD_POINT: 'geo/ADD_POINT',
  ADD_HASHES: 'geo/ADD_HASHES',
  SET_GEOJSON: 'geo/SET_GEOJSON',
};

// Async actions


// Make a final combination of async and static actions
export default R.mergeAll([
  staticActions
]);
