import {connect} from 'react-redux';

import {addHashes, setGeoJSON} from '../actions/geo';
import {getSidebarWidth} from '../selectors/ui';
import {getSelectedHashesSorted} from '../selectors/geo';

import Sidebar from '../components/sidebar';

function mapStateToProps(state) {
  return {
    width: getSidebarWidth(state),
    geohashes: getSelectedHashesSorted(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onGeoAdd: (event) => {
      if (event.hashes) {
        // TODO: handle invalid geohashes
        const allHashes = event.hashes.split(' ');
        dispatch(addHashes(allHashes));
      }

      if (event.geojson) {
        // TODO: handle bad json input
        const data = JSON.parse(event.geojson);
        dispatch(setGeoJSON(data));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
