import React, { Component } from 'react';
import {Provider} from 'react-redux';

import SidebarContainer from '../containers/sidebar';
import MapContainer from '../containers/map';
import configureStore from '../store/configure-store';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SidebarContainer />
          <MapContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
