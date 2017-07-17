import {connect} from 'react-redux';
import {onChangeViewport} from 'redux-map-gl';

import Map from '../components/map/map';
import {getSidebarWidth} from '../selectors/ui';
import {getMapStyle} from '../selectors/map-style';
import {addPoint} from '../actions/geo';

function mapStateToProps(state) {
  const mapState = state.map.viewport.toJS();
  const mapStyle = getMapStyle(state);

  return {
    isLoading: false,
    width: (state.browser.width - getSidebarWidth(state) - 1),
    height: state.browser.height,
    mapState,
    mapStyle
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChangeViewport: (event) => {
      dispatch(onChangeViewport(event));
    },
    onClick: (event) => {
      dispatch(addPoint(event));
    },
    onHoverFeatures: (features) => {},
    onClickFeatures: (features) => {}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
