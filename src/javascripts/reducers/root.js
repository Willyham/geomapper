import {combineReducers} from 'redux';
import {createResponsiveStateReducer} from 'redux-responsive';
import {createViewportReducer} from 'redux-map-gl';
import { reducer as formReducer } from 'redux-form'

import geo from './geo';
import ui from './ui';

export default combineReducers({
  browser: createResponsiveStateReducer(null, {
    extraFields: () => ({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
  }),
  map: createViewportReducer(),
  form: formReducer,
  geo,
  ui
});
